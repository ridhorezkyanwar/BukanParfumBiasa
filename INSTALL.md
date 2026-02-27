# Instalasi Library Ren Parfume Landing Page

Jalankan command ini di terminal:

```bash
npm install contentful @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

## Breakdown Library:
- **contentful** - SDK untuk fetching data dari Contentful CMS
- **@fortawesome/fontawesome-svg-core** - Core FontAwesome
- **@fortawesome/free-solid-svg-icons** - Icon solid (spray, leaf, clock, star)
- **@fortawesome/free-brands-svg-icons** - Icon brand (WhatsApp, Instagram)
- **@fortawesome/react-fontawesome** - React component untuk FontAwesome

## Cara Jalanin:
```bash
npm run dev
```

## Notes:
- Pastikan Tailwind CSS udah ke-setup di project Vite lo
- App.jsx taruh di root atau sesuaikan import di main.jsx
- Contentful credentials udah di-hardcode di App.jsx
