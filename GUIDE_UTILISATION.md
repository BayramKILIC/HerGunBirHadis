# 📚 Guide d'Utilisation - 30 Hadis

## 🎯 Bienvenue !

Félicitations ! Vous venez de recevoir un site web complet pour aider les enfants à apprendre 30 hadis. Voici comment l'utiliser et le personnaliser.

---

## 📋 Table des matières

1. [Structure du projet](#structure-du-projet)
2. [Comment ajouter les hadis](#comment-ajouter-les-hadis)
3. [Comment ajouter les audios](#comment-ajouter-les-audios)
4. [Fonctionnalités du site](#fonctionnalités-du-site)
5. [Comment tester le site](#comment-tester-le-site)
6. [Ajouter le français plus tard](#ajouter-le-français)
7. [Résolution de problèmes](#résolution-de-problèmes)

---

## 📁 Structure du projet

Votre projet contient ces fichiers :

```
30-hadis/
│
├── 📄 index.html              → Page d'accueil (liste des 30 hadis)
├── 📄 hadis.html             → Page de détail d'un hadis
├── 📄 README.md              → Documentation en turc
├── 📄 GUIDE_UTILISATION.md   → Ce guide en français
│
├── 📁 css/
│   └── styles.css            → Tous les styles visuels
│
├── 📁 js/
│   ├── app.js               → Logique principale de l'application
│   └── i18n.js              → Système de traduction (turc/français)
│
├── 📁 data/
│   └── hadisler.json        → Base de données des hadis (À REMPLIR)
│
└── 📁 audio/
    ├── README.md            → Instructions pour les audios
    ├── hadis_01.mp3         → À ajouter vous-même
    ├── hadis_02.mp3         → À ajouter vous-même
    └── ... (jusqu'à hadis_30.mp3)
```

---

## ✏️ Comment ajouter les hadis

### Étape 1 : Ouvrez le fichier JSON

Ouvrez le fichier `data/hadisler.json` avec un éditeur de texte (Notepad++, VS Code, ou même Bloc-notes).

### Étape 2 : Structure d'un hadis

Chaque hadis a cette structure :

```json
{
  "id": 1,
  "baslik": "1. Hadis",
  "turkce": "Texte du hadis en turc ici",
  "arapca": "النص العربي للحديث هنا",
  "audio": "audio/hadis_01.mp3"
}
```

### Étape 3 : Exemple complet

```json
{
  "hadisler": [
    {
      "id": 1,
      "baslik": "1. Hadis",
      "turkce": "Müslüman, elinden ve dilinden Müslümanların emin olduğu kimsedir.",
      "arapca": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      "audio": "audio/hadis_01.mp3"
    },
    {
      "id": 2,
      "baslik": "2. Hadis",
      "turkce": "Votre deuxième hadis en turc",
      "arapca": "الحديث الثاني بالعربية",
      "audio": "audio/hadis_02.mp3"
    }
    // ... continuez jusqu'à 30
  ]
}
```

### ⚠️ Points importants

- Ne changez pas l'`id` (de 1 à 30)
- Respectez les guillemets `"` autour des textes
- N'oubliez pas les virgules `,` entre les hadis
- Le dernier hadis n'a PAS de virgule après

---

## 🎵 Comment ajouter les audios

### Étape 1 : Préparez vos fichiers audio

1. Enregistrez ou téléchargez les récitations des 30 hadis en arabe
2. Convertissez-les en format MP3 si nécessaire
3. Nommez-les exactement comme ceci :
   - `hadis_01.mp3` (avec le zéro devant)
   - `hadis_02.mp3`
   - `hadis_03.mp3`
   - ...
   - `hadis_30.mp3`

### Étape 2 : Placez les fichiers

Copiez tous les fichiers MP3 dans le dossier `audio/`

### Étape 3 : Vérifiez

La structure finale devrait ressembler à :

```
audio/
├── hadis_01.mp3  ✅
├── hadis_02.mp3  ✅
├── hadis_03.mp3  ✅
└── ... jusqu'à hadis_30.mp3
```

---

## 🎮 Fonctionnalités du site

### Page d'accueil (index.html)

**Ce que l'enfant voit :**
- 30 cartes numérotées de 1 à 30
- La première carte est toujours débloquée
- Les autres sont verrouillées 🔒 jusqu'à ce que la précédente soit apprise
- Une barre de progression en haut
- Des badges à débloquer

**Actions possibles :**
- Cliquer sur une carte débloquée pour voir le hadis
- Voir sa progression (X/30 hadis appris)
- Accéder aux paramètres ⚙️
- Voir la page "À propos" ℹ️
- Réinitialiser la progression 🔄

### Page de détail (hadis.html)

**Ce que l'enfant voit :**
- Le texte en turc (gros et lisible)
- Le texte en arabe (aligné à droite)
- Un lecteur audio avec compteur d'écoutes
- Le nombre de fois qu'il a écouté
- Un gros bouton "Öğrendim" (J'ai appris)

**Le parcours d'apprentissage :**
1. L'enfant lit le hadis en turc
2. Il voit le texte arabe
3. Il écoute l'audio (recommandé 3 fois minimum)
4. Quand il l'a appris, il clique sur "Öğrendim"
5. 🎉 Animation de célébration !
6. Le hadis suivant se débloque automatiquement

### Système de badges 🏆

L'enfant gagne des badges à :
- 5 hadis → 🌟 İlk 5 Hadis
- 10 hadis → ⭐ 10 Hadis Ustası
- 15 hadis → 💫 Yarı Yol
- 20 hadis → ✨ Azimli Öğrenci
- 25 hadis → 🌙 Neredeyse Tamam
- 30 hadis → 🏆 Hadis Uzmanı (avec confettis !)

### Paramètres ⚙️

**Taille du texte :**
- Petit (A)
- Moyen (A)
- Grand (A)

**Thème :**
- Clair (par défaut)
- Sombre (pour le soir)

### Progression sauvegardée 💾

- Tout est sauvegardé dans le navigateur
- Même si l'enfant ferme la page et revient, sa progression est conservée
- Aucun serveur nécessaire, tout est local

---

## 🧪 Comment tester le site

### Méthode 1 : Double-clic simple

1. Ouvrez le dossier `30-hadis`
2. Double-cliquez sur `index.html`
3. Le site s'ouvre dans votre navigateur

### Méthode 2 : Serveur local (recommandé pour tester les audios)

**Option A : Avec Python**
```bash
cd 30-hadis
python -m http.server 8000
```
Puis ouvrez : `http://localhost:8000`

**Option B : Avec Node.js**
```bash
cd 30-hadis
npx http-server
```

**Option C : Avec l'extension VS Code "Live Server"**
1. Installez l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"

### Test des fonctionnalités

**Checklist de test :**
- [ ] La page d'accueil s'affiche correctement
- [ ] Les 30 cartes sont visibles
- [ ] La première carte est cliquable (non verrouillée)
- [ ] Cliquer sur la carte 1 ouvre la page de détail
- [ ] Le texte turc s'affiche
- [ ] Le texte arabe s'affiche
- [ ] Le bouton de lecture audio fonctionne
- [ ] Cliquer sur "Öğrendim" marque le hadis comme appris
- [ ] La carte 2 se débloque après avoir appris la carte 1
- [ ] La barre de progression se met à jour
- [ ] Les badges apparaissent aux bonnes étapes

---

## 🌐 Ajouter le français plus tard

Le système est déjà prêt ! Voici comment activer le français :

### Étape 1 : Le système existe déjà

Toutes les traductions françaises sont déjà dans `js/i18n.js`. Il suffit d'ajouter un sélecteur de langue.

### Étape 2 : Ajouter un bouton de changement de langue

Dans `index.html`, ajoutez ce code après la ligne `<header class="header">` :

```html
<div class="language-selector">
    <button onclick="setLanguage('tr')" class="lang-btn">🇹🇷 Türkçe</button>
    <button onclick="setLanguage('fr')" class="lang-btn">🇫🇷 Français</button>
</div>
```

### Étape 3 : Ajoutez le style dans `css/styles.css`

```css
.language-selector {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;
    display: flex;
    gap: 10px;
}

.lang-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    background: white;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s;
}

.lang-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
```

### Étape 4 : Traduisez les hadis

Dans `data/hadisler.json`, ajoutez un champ `francais` :

```json
{
  "id": 1,
  "baslik": "1. Hadis",
  "turkce": "Texte turc",
  "francais": "Texte français",
  "arapca": "النص العربي",
  "audio": "audio/hadis_01.mp3"
}
```

C'est tout ! Le site est maintenant bilingue.

---

## 🔧 Résolution de problèmes

### Problème : Les audios ne se jouent pas

**Solutions :**
1. Vérifiez que les fichiers MP3 sont bien nommés (`hadis_01.mp3`, etc.)
2. Vérifiez qu'ils sont dans le dossier `audio/`
3. Utilisez un serveur local (pas juste double-clic sur le fichier)
4. Vérifiez le format audio (MP3 recommandé)

### Problème : Les cartes ne se débloquent pas

**Solution :**
1. Ouvrez la console du navigateur (F12)
2. Tapez : `localStorage.clear()`
3. Rechargez la page (F5)
4. Essayez à nouveau

### Problème : Le texte arabe ne s'affiche pas correctement

**Solution :**
1. Assurez-vous que votre éditeur de texte est en UTF-8
2. Vérifiez que les guillemets sont corrects
3. Utilisez un éditeur qui supporte l'arabe (VS Code, Notepad++)

### Problème : Les couleurs/styles ne s'appliquent pas

**Solution :**
1. Videz le cache du navigateur (Ctrl + F5)
2. Vérifiez que `styles.css` est dans le dossier `css/`
3. Vérifiez les chemins dans les fichiers HTML

### Problème : Les données ne sont pas sauvegardées

**Solutions :**
1. Vérifiez que vous n'êtes pas en navigation privée
2. Autorisez les cookies et le stockage local
3. Vérifiez les paramètres du navigateur

---

## 💡 Conseils pédagogiques

### Pour les parents/éducateurs

1. **Routine quotidienne** : Encouragez l'enfant à apprendre un hadis par jour
2. **Répétition** : Faites-lui écouter l'audio plusieurs fois
3. **Compréhension** : Expliquez le sens du hadis avant qu'il ne le mémorise
4. **Révision** : Utilisez le bouton "Tekrar Et" pour réviser les anciens hadis
5. **Célébration** : Célébrez chaque badge obtenu !

### Suggestions d'amélioration pour plus tard

- Ajouter des illustrations pour chaque hadis
- Créer un mode "quiz" pour tester la mémorisation
- Ajouter des histoires liées à chaque hadis
- Créer un calendrier de 30 jours
- Ajouter une section "parents" avec des explications

---

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes :

1. Relisez ce guide
2. Vérifiez que tous les fichiers sont au bon endroit
3. Ouvrez la console du navigateur (F12) pour voir les erreurs
4. Vérifiez les noms de fichiers (sensibles à la casse !)

---

## 🎉 C'est prêt !

Votre site est maintenant complètement opérationnel. Il ne vous reste plus qu'à :

1. ✅ Remplir `data/hadisler.json` avec vos 30 hadis
2. ✅ Ajouter les fichiers audio dans `audio/`
3. ✅ Tester le site
4. ✅ Partager avec les enfants !

**Bonne chance avec ce beau projet éducatif ! 🌙⭐**

---

*Pour toute question technique, n'hésitez pas à consulter le README.md ou à demander de l'aide.*
