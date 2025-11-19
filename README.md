# Termik Santral Web Sitesi

Modern ve profesyonel termik enerji santrali web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- ✨ **Modern Tasarım**: Şık, zarif ve profesyonel arayüz
- 📱 **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- 🌍 **Çok Dilli**: Türkçe ve İngilizce dil desteği
- 🎨 **Marka Renkleri**: #34a451 ve #177753 ile özel gradient tasarımlar
- 📄 **A4 Formatında İç Sayfalar**: Profesyonel döküman görünümlü sayfa düzeni
- 🎥 **Video Hero Section**: Dinamik video arkaplan
- 🧭 **Akıllı Navigasyon**: Sticky navbar ve breadcrumb navigasyon
- 📋 **Sidebar Menü**: İç sayfalarda kolay gezinme için şık sidebar
- 🌙 **Dark Mode**: Otomatik koyu tema desteği

## 📦 Teknolojiler

- **Next.js 15**: React framework
- **TypeScript**: Tip güvenli kod
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern ikonlar
- **CSS Variables**: Kolay tema yönetimi

## 🎨 Renk Paleti

Proje, marka renklerinize göre optimize edilmiş bir renk sistemi kullanır:

- **Primary**: `#34a451` (Yeşil)
- **Primary Dark**: `#177753` (Koyu Yeşil)
- **Primary Light**: `#4abb66` (Açık Yeşil)

Tüm renkler `app/globals.css` dosyasında CSS değişkenleri olarak tanımlanmıştır ve kolayca değiştirilebilir.

## 📁 Proje Yapısı

```
termik-deneme2/
├── app/
│   ├── hakkimizda/          # Hakkımızda sayfası
│   ├── hizmetlerimiz/       # Hizmetlerimiz sayfası
│   ├── projelerimiz/        # Projelerimiz sayfası
│   ├── surdurulebilirlik/   # Sürdürülebilirlik sayfası
│   ├── iletisim/            # İletişim sayfası
│   ├── layout.tsx           # Ana layout
│   ├── page.tsx             # Ana sayfa
│   └── globals.css          # Global stiller
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section (video)
│   ├── About.tsx            # Hakkımızda bölümü
│   ├── Partners.tsx         # Partnerler bölümü
│   ├── PageLayout.tsx       # İç sayfalar için layout
│   ├── PageHeader.tsx       # Sayfa başlığı (breadcrumb ile)
│   ├── PageMenu.tsx         # Sidebar menü
│   └── LanguageToggle.tsx   # Dil değiştirme butonu
└── lib/
    └── i18n/
        ├── translations.ts   # Çeviriler
        └── LanguageContext.tsx # Dil context'i
```

## 🚦 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Production Build

```bash
# Production build oluşturun
npm run build

# Production sunucusunu başlatın
npm start
```

## 📝 Sayfa Yapısı

### Ana Sayfa
- **Hero Section**: Video arkaplanda animasyonlu başlık ve istatistikler
- **Hakkımızda**: Misyon, vizyon ve değerler
- **Partnerler**: İş ortakları grid görünümü
- **Footer**: İletişim bilgileri ve social media

### İç Sayfalar
Tüm iç sayfalar `PageLayout` bileşenini kullanır ve şunları içerir:
- **PageHeader**: Breadcrumb navigasyon ve sayfa başlığı
- **Sidebar Menu**: Sol tarafta kategori menüsü
- **İçerik Alanı**: A4 formatında, geniş padding ile profesyonel görünüm

## 🎯 Logo Ekleme

Logo eklemek için:

1. Logo dosyanızı `/public` klasörüne ekleyin (örn: `logo.png`)
2. `components/Navbar.tsx` ve `components/Footer.tsx` dosyalarındaki logo bölümlerini güncelleyin:

```tsx
// Navbar.tsx içinde
<Image 
  src="/logo.png" 
  alt="Termik Santral Logo" 
  width={48} 
  height={48}
  className="rounded-lg"
/>
```

## 🌐 Dil Desteği

Dil sistemi `lib/i18n/translations.ts` dosyasında yönetilir. Yeni çeviriler eklemek için:

```typescript
export const translations = {
  tr: {
    // Türkçe çeviriler
  },
  en: {
    // İngilizce çeviriler
  }
}
```

## 🎨 Tema Özelleştirme

Renkleri değiştirmek için `app/globals.css` dosyasını düzenleyin:

```css
:root {
  --primary: #34a451;
  --primary-dark: #177753;
  --primary-light: #4abb66;
}
```

## 📱 Responsive Tasarım

Proje mobile-first yaklaşımla tasarlanmıştır:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Özelleştirme İpuçları

1. **Sayfa Ekleme**: `app` klasörüne yeni klasör ekleyerek yeni sayfalar oluşturabilirsiniz
2. **Bileşen Oluşturma**: `components` klasörüne yeni React bileşenleri ekleyebilirsiniz
3. **Stil Değişiklikleri**: Tailwind sınıflarını kullanarak hızlıca stil değişiklikleri yapabilirsiniz

## 📄 Lisans

Bu proje özel bir proje olarak geliştirilmiştir.

## 👤 Geliştirici

Termik Enerji Santrali Web Sitesi
