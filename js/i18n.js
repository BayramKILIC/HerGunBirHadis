// Système d'internationalisation pour support multi-langues
const translations = {
    tr: {
        siteName: "30 Hadis",
        subtitle: "Her Gün Bir Hadis Öğren",
        progress: "İlerleme",
        hadisLearned: "hadis öğrenildi",
        congratulations: "Tebrikler!",
        allCompleted: "Tüm hadisleri öğrendin! 🎉",
        listen: "Dinle",
        learned: "Öğrendim",
        learned_check: "Öğrenildi ✓",
        revise: "Tekrar Et",
        previous: "Önceki",
        next: "Sonraki",
        backToList: "Listeye Dön",
        locked: "Kilitli",
        unlockMessage: "Bu hadisi açmak için önceki hadisi öğrenmelisin",
        reset: "Sıfırla",
        resetConfirm: "Tüm ilerlemeyi sıfırlamak istediğinden emin misin?",
        about: "Hakkında",
        aboutTitle: "30 Hadis Hakkında",
        aboutText: "Bu uygulama, çocukların 30 gün boyunca her gün bir hadis öğrenmesine yardımcı olmak için tasarlanmıştır. Her hadis, Türkçe çevirisi ve Arapça metni ile birlikte sunulmaktadır. Sesli okuma özelliği sayesinde çocuklar hadisleri doğru telaffuzla öğrenebilirler.",
        aboutFeatures: "Özellikler:",
        feature1: "30 seçilmiş hadis",
        feature2: "Türkçe ve Arapça metinler",
        feature3: "Sesli okuma desteği",
        feature4: "İlerleme takibi",
        feature5: "Kademeli kilitleme sistemi",
        feature6: "Rozetler ve ödüller",
        close: "Kapat",
        badges: "Rozetler",
        badge_5: "İlk 5 Hadis",
        badge_10: "10 Hadis Ustası",
        badge_15: "Yarı Yol",
        badge_20: "Azimli Öğrenci",
        badge_25: "Neredeyse Tamam",
        badge_30: "Hadis Uzmanı",
        encouragement_1: "Harika gidiyorsun! 🌟",
        encouragement_2: "Süpersin! Devam et! 💪",
        encouragement_3: "Mükemmel! 🎯",
        encouragement_4: "İnanılmazsın! ⭐",
        encouragement_5: "Çok iyisin! 🌙",
        listenCount: "kez dinledin",
        recommendation: "Öğrenmeden önce en az 3 kez dinlemeni öneririz",
        textSize: "Metin Boyutu",
        theme: "Tema",
        themeLight: "Açık",
        themeDark: "Koyu",
        settings: "Ayarlar"
    },
    fr: {
        siteName: "30 Hadiths",
        subtitle: "Apprends un Hadith par Jour",
        progress: "Progression",
        hadisLearned: "hadiths appris",
        congratulations: "Félicitations!",
        allCompleted: "Tu as appris tous les hadiths! 🎉",
        listen: "Écouter",
        learned: "J'ai appris",
        learned_check: "Appris ✓",
        revise: "Réviser",
        previous: "Précédent",
        next: "Suivant",
        backToList: "Retour à la liste",
        locked: "Verrouillé",
        unlockMessage: "Tu dois apprendre le hadith précédent pour débloquer celui-ci",
        reset: "Réinitialiser",
        resetConfirm: "Es-tu sûr de vouloir réinitialiser toute ta progression?",
        about: "À propos",
        aboutTitle: "À propos de 30 Hadiths",
        aboutText: "Cette application est conçue pour aider les enfants à apprendre un hadith par jour pendant 30 jours. Chaque hadith est présenté avec sa traduction en français et son texte en arabe. La fonction audio permet aux enfants d'apprendre les hadiths avec la prononciation correcte.",
        aboutFeatures: "Fonctionnalités:",
        feature1: "30 hadiths sélectionnés",
        feature2: "Textes en français et arabe",
        feature3: "Support audio",
        feature4: "Suivi de progression",
        feature5: "Système de déverrouillage progressif",
        feature6: "Badges et récompenses",
        close: "Fermer",
        badges: "Badges",
        badge_5: "Premiers 5 Hadiths",
        badge_10: "Maître de 10 Hadiths",
        badge_15: "Mi-Parcours",
        badge_20: "Étudiant Déterminé",
        badge_25: "Presque Fini",
        badge_30: "Expert en Hadiths",
        encouragement_1: "Tu te débrouilles super bien! 🌟",
        encouragement_2: "Tu es génial! Continue! 💪",
        encouragement_3: "Parfait! 🎯",
        encouragement_4: "Tu es incroyable! ⭐",
        encouragement_5: "Tu es très bon! 🌙",
        listenCount: "fois écouté",
        recommendation: "Nous recommandons d'écouter au moins 3 fois avant de valider",
        textSize: "Taille du texte",
        theme: "Thème",
        themeLight: "Clair",
        themeDark: "Sombre",
        settings: "Paramètres"
    }
};

// Langue par défaut
let currentLang = 'tr';

// Fonction pour obtenir une traduction
function t(key) {
    return translations[currentLang][key] || key;
}

// Fonction pour changer de langue
function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        updatePageLanguage();
    }
}

// Fonction pour mettre à jour toute la page avec la langue actuelle
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
}

// Charger la langue sauvegardée au démarrage
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    updatePageLanguage();
});
