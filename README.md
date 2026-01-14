# 🌙 Her Gün Bir Hadis ⭐

> Çocuklar için interaktif hadis öğrenme uygulaması

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📖 Hakkında

**Her Gün Bir Hadis**, çocukların 30 gün boyunca her gün bir hadis öğrenmesine yardımcı olmak için tasarlanmış modern ve interaktif bir web uygulamasıdır. Gamification özellikleri, ilerleme takibi ve sesli okuma desteği ile öğrenmeyi eğlenceli hale getirir.

### ✨ Özellikler

- 🎯 **30 Seçilmiş Hadis** - Çocuklar için uygun hadisler
- 🇹🇷 **İki Dilli Metin** - Türkçe ve Arapça
- 🎧 **Sesli Okuma** - Her hadis için ses kaydı desteği
- 📊 **İlerleme Takibi** - Görsel ilerleme çubuğu ve sayaç
- 🔒 **Kademeli Açılım** - Bir hadisi öğrendikten sonra sıradaki açılır
- 🏆 **Rozet Sistemi** - 6 farklı başarı rozeti
- 🎨 **Modern Tasarım** - Çocuklara uygun renkler ve animasyonlar
- 🌙 **Açık/Koyu Tema** - Göz yorgunluğunu azaltır
- 📱 **Responsive** - Mobil, tablet ve masaüstü uyumlu
- 💾 **Otomatik Kayıt** - LocalStorage ile ilerleme kaydedilir
- 🌐 **Çoklu Dil Desteği** - Türkçe (Fransızca hazır)

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Modern bir web tarayıcı (Chrome, Firefox, Safari, Edge)
- Yerel bir web sunucusu (geliştirme için)

### Kurulum

1. **Repository'yi klonlayın**
   ```bash
   git clone https://github.com/[kullaniciadi]/HerGunBirHadis.git
   cd HerGunBirHadis
   ```

2. **Hadisleri ekleyin**
   - `data/hadisler.json` dosyasını düzenleyin
   - Her hadis için Türkçe ve Arapça metinleri girin
   - Örnek: `data/hadisler_exemple.json`

3. **Ses dosyalarını ekleyin**
   - `audio/` klasörüne MP3 dosyalarını koyun
   - Format: `hadis_01.mp3`, `hadis_02.mp3`, ..., `hadis_30.mp3`

4. **Yerel sunucu başlatın**
   
   **Python ile:**
   ```bash
   python -m http.server 8000
   ```
   
   **VS Code ile:**
   - Live Server eklentisini yükleyin
   - `index.html` üzerine sağ tıklayın → "Open with Live Server"

5. **Tarayıcıda açın**
   ```
   http://localhost:8000
   ```

## 📁 Proje Yapısı

```
HerGunBirHadis/
├── index.html              # Ana sayfa (hadis listesi)
├── hadis.html             # Hadis detay sayfası
├── test.html              # Tanılama sayfası
├── css/
│   └── styles.css         # Tüm stiller
├── js/
│   ├── app.js            # Ana uygulama mantığı
│   └── i18n.js           # Çoklu dil desteği
├── data/
│   ├── hadisler.json     # Hadis veritabanı
│   └── hadisler_exemple.json # Örnek hadisler
├── audio/
│   ├── hadis_01.mp3      # Ses dosyaları
│   └── ...
└── docs/
    ├── README.md          # Türkçe dokümantasyon
    ├── GUIDE_UTILISATION.md # Fransızca kılavuz
    └── DEPANNAGE.md       # Sorun giderme
```

## 🎮 Kullanım

### Ana Sayfa

1. **30 hadis kartı** gösterilir
2. **İlk hadis** her zaman açıktır
3. Bir hadisi öğrendikten sonra **sıradaki açılır**
4. Öğrenilen hadisler **yeşil** renkle işaretlenir

### Hadis Detayı

1. Türkçe metni okuyun
2. Arapça metni görüntüleyin
3. Ses dosyasını **en az 3 kez** dinleyin
4. **"Öğrendim"** butonuna basın
5. 🎉 Tebrikler! Sıradaki hadis açıldı

### Rozetler 🏆

- 🌟 **5 hadis** → İlk 5 Hadis
- ⭐ **10 hadis** → 10 Hadis Ustası
- 💫 **15 hadis** → Yarı Yol
- ✨ **20 hadis** → Azimli Öğrenci
- 🌙 **25 hadis** → Neredeyse Tamam
- 🏆 **30 hadis** → Hadis Uzmanı (konfeti yağmuru!)

## 🛠️ Geliştirme

### Hadis Ekleme

`data/hadisler.json` formatı:

```json
{
  "hadisler": [
    {
      "id": 1,
      "baslik": "1. Hadis",
      "turkce": "Hadis Türkçe metni",
      "arapca": "النص العربي للحديث",
      "audio": "audio/hadis_01.mp3"
    }
  ]
}
```

### Dil Ekleme

1. `js/i18n.js` dosyasını açın
2. Yeni dil için translations objesi ekleyin
3. HTML'de dil seçici buton ekleyin

```javascript
translations.en = {
    siteName: "30 Hadiths",
    subtitle: "Learn One Hadith Every Day",
    // ...
};
```

### Renk Değiştirme

`css/styles.css` dosyasında CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #10b981;  /* Ana renk */
    --secondary-color: #3b82f6; /* İkincil renk */
    --accent-gold: #f59e0b;     /* Vurgu rengi */
}
```

## 🐛 Sorun Giderme

### Kartlar görünmüyor?

1. **Yerel sunucu kullanıyor musunuz?** (Dosyaya doğrudan tıklama çalışmaz)
2. `test.html` sayfasını açın ve testleri çalıştırın
3. Tarayıcı konsolunu (F12) kontrol edin
4. `DEPANNAGE.md` dosyasına bakın

### Ses çalmıyor?

1. Dosya adlarını kontrol edin: `hadis_01.mp3` (sıfırlı)
2. Dosyalar `audio/` klasöründe mi?
3. Format MP3 mi?

### İlerleme kaydedilmiyor?

1. Çerezler etkin mi?
2. Gizli mod kullanmıyor musunuz?
3. LocalStorage izinleri verildi mi?

## 🤝 Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen şu adımları izleyin:

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request açın

## 📝 Yapılacaklar

- [ ] PDF export özelliği
- [ ] Quiz modu
- [ ] Haftalık hatırlatmalar
- [ ] Çoklu kullanıcı desteği
- [ ] Mobil uygulama (React Native)
- [ ] Backend entegrasyonu
- [ ] Sosyal paylaşım
- [ ] Daha fazla dil desteği

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

Eğitim amaçlı olarak geliştirilmiştir.

## 🙏 Teşekkürler

- Hadis metinleri için İslami kaynaklara
- Tasarım ilhamı için modern web uygulamalarına
- Tüm katkıda bulunanlara

## 📞 İletişim

Sorularınız veya önerileriniz için:
- 🐛 [Issue açın](https://github.com/[kullaniciadi]/HerGunBirHadis/issues)
- 💬 [Discussion başlatın](https://github.com/[kullaniciadi]/HerGunBirHadis/discussions)

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ for children's Islamic education

</div>
