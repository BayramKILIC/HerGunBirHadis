// Gestion de la progression et des fonctionnalités
class HadisApp {
    constructor() {
        this.hadisData = [];
        this.learnedHadis = this.loadProgress();
        this.listenCounts = this.loadListenCounts();
        this.textSize = this.loadTextSize();
        this.theme = this.loadTheme();
        this.initApp();
    }

    // Charger la progression sauvegardée
    loadProgress() {
        const saved = localStorage.getItem('learnedHadis');
        return saved ? JSON.parse(saved) : [];
    }

    // Sauvegarder la progression
    saveProgress() {
        localStorage.setItem('learnedHadis', JSON.stringify(this.learnedHadis));
    }

    // Charger les compteurs d'écoute
    loadListenCounts() {
        const saved = localStorage.getItem('listenCounts');
        return saved ? JSON.parse(saved) : {};
    }

    // Sauvegarder les compteurs d'écoute
    saveListenCounts() {
        localStorage.setItem('listenCounts', JSON.stringify(this.listenCounts));
    }

    // Charger la taille de texte
    loadTextSize() {
        return localStorage.getItem('textSize') || 'medium';
    }

    // Sauvegarder la taille de texte
    saveTextSize(size) {
        this.textSize = size;
        localStorage.setItem('textSize', size);
        this.applyTextSize();
    }

    // Appliquer la taille de texte
    applyTextSize() {
        document.body.className = document.body.className.replace(/text-size-\w+/g, '');
        document.body.classList.add(`text-size-${this.textSize}`);
    }

    // Charger le thème
    loadTheme() {
        return localStorage.getItem('theme') || 'light';
    }

    // Sauvegarder le thème
    saveTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme);
        this.applyTheme();
    }

    // Appliquer le thème
    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
    }

    // Initialiser l'application
    async initApp() {
        await this.loadHadisData();
        this.applyTextSize();
        this.applyTheme();
        
        if (window.location.pathname.includes('hadis.html')) {
            this.initHadisPage();
        } else {
            this.initHomePage();
        }
    }

    // Charger les données des hadis
    async loadHadisData() {
        try {
            const response = await fetch('data/hadisler.json');
            if (!response.ok) {
                throw new Error('Fichier hadisler.json non trouvé');
            }
            const data = await response.json();
            this.hadisData = data.hadisler;
            
            // Vérifier si les données sont vides
            if (!this.hadisData || this.hadisData.length === 0) {
                throw new Error('Aucun hadis dans le fichier JSON');
            }
        } catch (error) {
            console.error('Erreur de chargement des hadis:', error);
            // Créer des données de test si le fichier n'existe pas
            this.createDefaultHadisData();
        }
    }

    // Créer des données par défaut si le JSON ne charge pas
    createDefaultHadisData() {
        this.hadisData = [];
        for (let i = 1; i <= 30; i++) {
            this.hadisData.push({
                id: i,
                baslik: `${i}. Hadis`,
                turkce: `[Buraya ${i}. hadis metnini giriniz]`,
                arapca: `[Buraya Arapça hadis metnini giriniz]`,
                audio: `audio/hadis_${String(i).padStart(2, '0')}.mp3`
            });
        }
    }

    // Initialiser la page d'accueil
    initHomePage() {
        this.renderHadisList();
        this.renderProgressBar();
        this.checkBadges();
        this.setupEventListeners();
    }

    // Afficher la liste des hadis
    renderHadisList() {
        const container = document.getElementById('hadis-grid');
        if (!container) return;

        container.innerHTML = '';
        
        this.hadisData.forEach((hadis, index) => {
            const isLearned = this.learnedHadis.includes(hadis.id);
            const isUnlocked = index === 0 || this.learnedHadis.includes(this.hadisData[index - 1].id);
            
            const card = document.createElement('div');
            card.className = `hadis-card ${isLearned ? 'learned' : ''} ${!isUnlocked ? 'locked' : ''}`;
            
            if (!isUnlocked) {
                card.innerHTML = `
                    <div class="hadis-number">${hadis.id}</div>
                    <div class="hadis-title">${hadis.baslik}</div>
                    <div class="lock-icon">🔒</div>
                    <div class="lock-message" data-i18n="locked">${t('locked')}</div>
                `;
                card.addEventListener('click', () => {
                    this.showLockedMessage();
                });
            } else {
                card.innerHTML = `
                    <div class="hadis-number">${hadis.id}</div>
                    <div class="hadis-title">${hadis.baslik}</div>
                    ${isLearned ? '<div class="check-icon">✓</div>' : ''}
                `;
                card.addEventListener('click', () => {
                    window.location.href = `hadis.html?id=${hadis.id}`;
                });
            }
            
            container.appendChild(card);
        });
    }

    // Afficher la barre de progression
    renderProgressBar() {
        const count = this.learnedHadis.length;
        const percentage = (count / 30) * 100;
        
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        
        if (progressText) {
            progressText.innerHTML = `<span class="progress-count">${count}/30</span> <span data-i18n="hadisLearned">${t('hadisLearned')}</span>`;
        }

        // Message de félicitations si tout est terminé
        if (count === 30) {
            this.showCompletionMessage();
        }
    }

    // Vérifier et afficher les badges
    checkBadges() {
        const count = this.learnedHadis.length;
        const badgeContainer = document.querySelector('.badges-container');
        
        if (!badgeContainer) return;

        const badges = [
            { threshold: 5, icon: '🌟', name: 'badge_5' },
            { threshold: 10, icon: '⭐', name: 'badge_10' },
            { threshold: 15, icon: '💫', name: 'badge_15' },
            { threshold: 20, icon: '✨', name: 'badge_20' },
            { threshold: 25, icon: '🌙', name: 'badge_25' },
            { threshold: 30, icon: '🏆', name: 'badge_30' }
        ];

        badgeContainer.innerHTML = '<h3 data-i18n="badges">' + t('badges') + '</h3><div class="badge-list"></div>';
        const badgeList = badgeContainer.querySelector('.badge-list');

        badges.forEach(badge => {
            const earned = count >= badge.threshold;
            const badgeElement = document.createElement('div');
            badgeElement.className = `badge ${earned ? 'earned' : 'locked'}`;
            badgeElement.innerHTML = `
                <div class="badge-icon">${earned ? badge.icon : '🔒'}</div>
                <div class="badge-name" data-i18n="${badge.name}">${t(badge.name)}</div>
            `;
            badgeList.appendChild(badgeElement);
        });
    }

    // Afficher le message de verrouillage
    showLockedMessage() {
        this.showNotification(t('unlockMessage'), 'warning');
    }

    // Afficher le message de completion
    showCompletionMessage() {
        const modal = document.createElement('div');
        modal.className = 'completion-modal';
        modal.innerHTML = `
            <div class="completion-content">
                <div class="completion-icon">🎉</div>
                <h2 data-i18n="congratulations">${t('congratulations')}</h2>
                <p data-i18n="allCompleted">${t('allCompleted')}</p>
                <button class="btn-primary" onclick="this.parentElement.parentElement.remove()">
                    <span data-i18n="close">${t('close')}</span>
                </button>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Animation de confetti
        this.createConfetti();
    }

    // Créer des confettis
    createConfetti() {
        const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 3 + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 4000);
            }, i * 30);
        }
    }

    // Afficher une notification
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 100);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Configurer les écouteurs d'événements
    setupEventListeners() {
        // Bouton À propos
        const aboutBtn = document.getElementById('about-btn');
        if (aboutBtn) {
            aboutBtn.addEventListener('click', () => this.showAboutModal());
        }

        // Bouton Paramètres
        const settingsBtn = document.getElementById('settings-btn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.showSettingsModal());
        }

        // Bouton Réinitialiser
        const resetBtn = document.getElementById('reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }
    }

    // Afficher le modal À propos
    showAboutModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 data-i18n="aboutTitle">${t('aboutTitle')}</h2>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    <p data-i18n="aboutText">${t('aboutText')}</p>
                    <h3 data-i18n="aboutFeatures">${t('aboutFeatures')}</h3>
                    <ul>
                        <li data-i18n="feature1">${t('feature1')}</li>
                        <li data-i18n="feature2">${t('feature2')}</li>
                        <li data-i18n="feature3">${t('feature3')}</li>
                        <li data-i18n="feature4">${t('feature4')}</li>
                        <li data-i18n="feature5">${t('feature5')}</li>
                        <li data-i18n="feature6">${t('feature6')}</li>
                    </ul>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Afficher le modal Paramètres
    showSettingsModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 data-i18n="settings">${t('settings')}</h2>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    <div class="setting-group">
                        <label data-i18n="textSize">${t('textSize')}</label>
                        <div class="button-group">
                            <button class="size-btn ${this.textSize === 'small' ? 'active' : ''}" data-size="small">A</button>
                            <button class="size-btn ${this.textSize === 'medium' ? 'active' : ''}" data-size="medium">A</button>
                            <button class="size-btn ${this.textSize === 'large' ? 'active' : ''}" data-size="large">A</button>
                        </div>
                    </div>
                    <div class="setting-group">
                        <label data-i18n="theme">${t('theme')}</label>
                        <div class="button-group">
                            <button class="theme-btn ${this.theme === 'light' ? 'active' : ''}" data-theme="light">
                                <span data-i18n="themeLight">${t('themeLight')}</span>
                            </button>
                            <button class="theme-btn ${this.theme === 'dark' ? 'active' : ''}" data-theme="dark">
                                <span data-i18n="themeDark">${t('themeDark')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Écouteurs pour les boutons de taille
        modal.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                modal.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.saveTextSize(e.target.dataset.size);
            });
        });

        // Écouteurs pour les boutons de thème
        modal.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                modal.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.saveTheme(e.target.dataset.theme);
            });
        });
    }

    // Réinitialiser la progression
    resetProgress() {
        if (confirm(t('resetConfirm'))) {
            this.learnedHadis = [];
            this.listenCounts = {};
            this.saveProgress();
            this.saveListenCounts();
            this.renderHadisList();
            this.renderProgressBar();
            this.checkBadges();
            this.showNotification('✓ İlerleme sıfırlandı', 'success');
        }
    }

    // Initialiser la page de détail du hadis
    initHadisPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const hadisId = parseInt(urlParams.get('id'));
        
        if (!hadisId) {
            window.location.href = 'index.html';
            return;
        }

        const hadis = this.hadisData.find(h => h.id === hadisId);
        if (!hadis) {
            window.location.href = 'index.html';
            return;
        }

        // Vérifier si le hadis est déverrouillé
        const hadisIndex = this.hadisData.findIndex(h => h.id === hadisId);
        const isUnlocked = hadisIndex === 0 || this.learnedHadis.includes(this.hadisData[hadisIndex - 1].id);
        
        if (!isUnlocked) {
            window.location.href = 'index.html';
            return;
        }

        this.renderHadisDetail(hadis);
        this.setupHadisPageListeners(hadis);
    }

    // Afficher les détails du hadis
    renderHadisDetail(hadis) {
        const isLearned = this.learnedHadis.includes(hadis.id);
        
        document.getElementById('hadis-number').textContent = hadis.id;
        document.getElementById('hadis-title').textContent = hadis.baslik;
        document.getElementById('hadis-turkish').textContent = hadis.turkce;
        document.getElementById('hadis-arabic').textContent = hadis.arapca;
        
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = hadis.audio;
        
        // Mettre à jour le compteur d'écoute
        const listenCount = this.listenCounts[hadis.id] || 0;
        this.updateListenCount(hadis.id, listenCount);
        
        // Gérer le bouton Appris/Réviser
        const learnBtn = document.getElementById('learn-btn');
        if (isLearned) {
            learnBtn.innerHTML = `<span data-i18n="revise">${t('revise')}</span> 🔄`;
            learnBtn.classList.add('learned');
        }
        
        // Gérer la navigation
        this.setupNavigation(hadis.id);
    }

    // Mettre à jour le compteur d'écoute
    updateListenCount(hadisId, count) {
        const countElement = document.getElementById('listen-count');
        if (countElement) {
            countElement.innerHTML = `
                🎧 <span class="count-number">${count}</span> <span data-i18n="listenCount">${t('listenCount')}</span>
                ${count < 3 ? `<br><small data-i18n="recommendation">${t('recommendation')}</small>` : ''}
            `;
        }
    }

    // Configurer la navigation
    setupNavigation(currentId) {
        const currentIndex = this.hadisData.findIndex(h => h.id === currentId);
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (currentIndex > 0) {
            prevBtn.style.display = 'flex';
            prevBtn.onclick = () => {
                window.location.href = `hadis.html?id=${this.hadisData[currentIndex - 1].id}`;
            };
        } else {
            prevBtn.style.display = 'none';
        }
        
        if (currentIndex < this.hadisData.length - 1) {
            const nextHadis = this.hadisData[currentIndex + 1];
            const isNextUnlocked = this.learnedHadis.includes(currentId);
            
            if (isNextUnlocked) {
                nextBtn.style.display = 'flex';
                nextBtn.onclick = () => {
                    window.location.href = `hadis.html?id=${nextHadis.id}`;
                };
            } else {
                nextBtn.style.display = 'none';
            }
        } else {
            nextBtn.style.display = 'none';
        }
    }

    // Configurer les écouteurs de la page hadis
    setupHadisPageListeners(hadis) {
        // Bouton retour (en haut)
        const backBtnTop = document.getElementById('back-btn-top');
        if (backBtnTop) {
            backBtnTop.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // Bouton retour (en bas)
        const backBtn = document.getElementById('back-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }

        // Lecteur audio
        const audioPlayer = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        
        if (audioPlayer && playBtn) {
            playBtn.addEventListener('click', () => {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    playBtn.innerHTML = '⏸️ <span data-i18n="listen">' + t('listen') + '</span>';
                } else {
                    audioPlayer.pause();
                    playBtn.innerHTML = '▶️ <span data-i18n="listen">' + t('listen') + '</span>';
                }
            });

            audioPlayer.addEventListener('ended', () => {
                playBtn.innerHTML = '▶️ <span data-i18n="listen">' + t('listen') + '</span>';
                // Incrémenter le compteur d'écoute
                const currentCount = this.listenCounts[hadis.id] || 0;
                this.listenCounts[hadis.id] = currentCount + 1;
                this.saveListenCounts();
                this.updateListenCount(hadis.id, this.listenCounts[hadis.id]);
            });
        }

        // Bouton Appris
        const learnBtn = document.getElementById('learn-btn');
        if (learnBtn) {
            learnBtn.addEventListener('click', () => {
                this.markAsLearned(hadis.id);
            });
        }
    }

    // Marquer comme appris
    markAsLearned(hadisId) {
        const isAlreadyLearned = this.learnedHadis.includes(hadisId);
        
        if (!isAlreadyLearned) {
            this.learnedHadis.push(hadisId);
            this.saveProgress();
            
            // Animation de célébration
            this.celebrateLearn();
            
            // Rediriger vers le prochain hadis ou la liste
            setTimeout(() => {
                const currentIndex = this.hadisData.findIndex(h => h.id === hadisId);
                if (currentIndex < this.hadisData.length - 1) {
                    window.location.href = `hadis.html?id=${this.hadisData[currentIndex + 1].id}`;
                } else {
                    window.location.href = 'index.html';
                }
            }, 2000);
        } else {
            // Si déjà appris, retourner à la liste
            window.location.href = 'index.html';
        }
    }

    // Célébration d'apprentissage
    celebrateLearn() {
        const messages = [
            t('encouragement_1'),
            t('encouragement_2'),
            t('encouragement_3'),
            t('encouragement_4'),
            t('encouragement_5')
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        this.showNotification(randomMessage, 'success');
        
        // Créer des étoiles
        this.createStars();
    }

    // Créer des étoiles
    createStars() {
        const stars = ['⭐', '🌟', '✨', '💫'];
        const starCount = 10;
        
        for (let i = 0; i < starCount; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'star-animation';
                star.textContent = stars[Math.floor(Math.random() * stars.length)];
                star.style.left = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() + 's';
                document.body.appendChild(star);
                
                setTimeout(() => star.remove(), 2000);
            }, i * 50);
        }
    }
}

// Initialiser l'application au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    window.hadisApp = new HadisApp();
});
