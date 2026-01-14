# 🚀 DÉMARRAGE RAPIDE - 30 Hadis

## ⚡ En 5 minutes, votre site est prêt !

### ✅ Étape 1 : Téléchargez tout le dossier
Vous avez reçu le dossier complet `30-hadis/` avec tous les fichiers.

### ✅ Étape 2 : Remplissez les hadis
Ouvrez `data/hadisler.json` et remplacez les textes par vos hadis.
Un exemple avec 3 hadis remplis est dans `data/hadisler_exemple.json`

### ✅ Étape 3 : Ajoutez les audios
Placez vos fichiers MP3 dans le dossier `audio/` :
- hadis_01.mp3
- hadis_02.mp3
- ... jusqu'à hadis_30.mp3

### ✅ Étape 4 : Testez !
Double-cliquez sur `index.html` pour ouvrir le site.

---

## 📂 Structure complète du projet

```
30-hadis/
├── 📄 index.html                    → Page d'accueil
├── 📄 hadis.html                    → Page de détail
├── 📄 README.md                     → Documentation technique (turc)
├── 📄 GUIDE_UTILISATION.md          → Guide complet (français)
├── 📄 DEMARRAGE_RAPIDE.md           → Ce fichier !
│
├── 📁 css/
│   └── styles.css                   → Tous les styles
│
├── 📁 js/
│   ├── app.js                       → Logique de l'application
│   └── i18n.js                      → Système de traduction
│
├── 📁 data/
│   ├── hadisler.json                → Base de données (À REMPLIR)
│   └── hadisler_exemple.json        → Exemple avec 3 hadis
│
└── 📁 audio/
    └── README.md                    → Instructions audio
```

---

## 🎯 Ce que vous devez faire

### 1️⃣ Obligatoire (sans ça, le site ne fonctionnera pas bien)

- [ ] Remplir `data/hadisler.json` avec vos 30 hadis
- [ ] Ajouter les fichiers audio MP3 dans `audio/`

### 2️⃣ Optionnel (mais recommandé)

- [ ] Tester sur plusieurs navigateurs
- [ ] Personnaliser les couleurs dans `css/styles.css`
- [ ] Ajouter le sélecteur de langue (voir GUIDE_UTILISATION.md)

---

## 🎨 Fonctionnalités incluses

✅ **30 cartes de hadis** avec système de déverrouillage progressif
✅ **Barre de progression** animée
✅ **6 badges** à débloquer (5, 10, 15, 20, 25, 30 hadis)
✅ **Lecteur audio** avec compteur d'écoutes
✅ **Thème clair/sombre** au choix
✅ **Taille de texte ajustable** (petit/moyen/grand)
✅ **Animations de célébration** (étoiles, confettis)
✅ **Système de révision** pour les hadis appris
✅ **Sauvegarde automatique** de la progression
✅ **Design responsive** (mobile, tablette, desktop)
✅ **Support multilingue** (turc + prêt pour français)

---

## 🆘 Problèmes courants

### "Les audios ne marchent pas"
→ Vérifiez que les fichiers sont bien nommés `hadis_01.mp3` (avec le 0)
→ Utilisez un serveur local (voir guide)

### "Les cartes sont toutes verrouillées"
→ La première carte (Hadis 1) est toujours déverrouillée
→ Appuyez sur F12 et tapez `localStorage.clear()` puis rechargez

### "Le texte arabe s'affiche mal"
→ Assurez-vous que votre fichier JSON est en UTF-8
→ Utilisez un bon éditeur (VS Code, Notepad++)

### "Rien ne s'affiche"
→ Vérifiez que tous les fichiers sont dans les bons dossiers
→ Ouvrez la console (F12) pour voir les erreurs

---

## 📚 Besoin de plus d'aide ?

Consultez le **GUIDE_UTILISATION.md** pour :
- Instructions détaillées étape par étape
- Captures d'écran
- Exemples de code
- Comment ajouter le français
- Conseils pédagogiques
- Et bien plus !

---

## 🎉 Vous êtes prêt !

Votre site est 100% fonctionnel. Il suffit de remplir les hadis et les audios.

**Bon courage pour ce magnifique projet éducatif ! 🌙⭐**

---

## 📞 Contact

Pour toute question, référez-vous aux fichiers de documentation :
- `GUIDE_UTILISATION.md` (français, très détaillé)
- `README.md` (turc, technique)

Tout est expliqué ! 🚀
