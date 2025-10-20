# ብርዝ Cafe & Restaurant

A modern, responsive website for Berz Restaurant featuring authentic Ethiopian cuisine. Built with React, Vite, and optimized for performance.

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Performance Optimized** - Fast loading with lazy loading, code splitting, and caching
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Complete meta tags, sitemap, and search engine optimization
- **PWA Ready** - Service worker and web app manifest for offline functionality
- **Accessibility** - Screen reader compatible and keyboard navigation

## 🚀 Live Demo

Visit the live website: [https://haileDagne.github.io/Abity](https://haileDagne.github.io/Abity)

## 📱 Pages

- **Home** - Hero section with carousel and featured menu items
- **Cafe** - Coffee, tea, pastries, and beverages menu
- **Services** - Dine-in, takeout, delivery, catering, and private events
- **Sister Companies** - Berz Mini Market, Eskinder Consulting, Guest House, and Galaxy Marble
- **Order** - Interactive ordering system with cart functionality
- **About** - Restaurant story, team, values, and timeline
- **Contact** - Contact information, form, and location details

## 🛠️ Technologies Used

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite 7
- **Styling**: CSS3 with modern features
- **Performance**: Lazy loading, code splitting, service worker
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HaileDagne/Abity.git
cd Abity
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── Component/           # Reusable components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Site footer
│   ├── Hero/           # Hero carousel section
│   ├── Menu/           # Individual menu item
│   ├── MenuList/       # Menu items list
│   ├── CafeMenuList/   # Cafe menu items
│   ├── LazyImage/      # Lazy loading image component
│   └── PerformanceMonitor/ # Performance tracking
├── Pages/              # Page components
│   ├── Home/           # Homepage
│   ├── Cafe/           # Cafe page
│   ├── Services/       # Services page
│   ├── SisterCompany/  # Sister companies page
│   ├── Order/          # Order page
│   ├── About/          # About page
│   └── Contact/        # Contact page
├── data/               # Static data
│   └── menuData.js     # Menu items data
├── utils/              # Utility functions
│   └── performance.js  # Performance optimization utilities
└── styles/             # Global styles
    └── critical.css    # Critical CSS for above-the-fold content
```

## ⚡ Performance Features

- **Lazy Loading** - Images load only when needed
- **Code Splitting** - JavaScript chunks for faster loading
- **Service Worker** - Caching for offline functionality
- **Image Optimization** - Dynamic sizing and quality based on device
- **Critical CSS** - Inline critical styles for faster rendering
- **Resource Hints** - Preconnect to external domains
- **Compression** - Gzip/Brotli compression for assets

## 🎨 Design Features

- **Modern UI** - Clean, professional design
- **Responsive Layout** - Mobile-first approach
- **Smooth Animations** - CSS transitions and transforms
- **Accessibility** - ARIA labels and keyboard navigation
- **Color Scheme** - Ethiopian-inspired color palette
- **Typography** - Readable fonts with proper hierarchy

## 📱 Mobile Optimization

- **Touch-Friendly** - Proper sizing for touch interactions
- **Responsive Images** - Optimized for different screen sizes
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Performance** - Optimized for mobile networks

## 🔧 Configuration

### Vite Configuration
The project uses Vite with optimized build settings:
- Terser minification
- Code splitting
- Asset optimization
- Development server configuration

### Service Worker
Automatic caching of static assets and API responses for offline functionality.

## 📈 Performance Metrics

- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development**: Haile Dagne
- **Design**: Custom design inspired by Ethiopian culture
- **Content**: Authentic Ethiopian restaurant content

## 📞 Contact

- **Restaurant**: Berz Cafe & Restaurant
- **Location**: Kotebe, Addis Ababa, Ethiopia
- **Phone**: +251 911864340
- **Email**: info@berzrestaurant.com

## 🙏 Acknowledgments

- Unsplash for high-quality food images
- React community for excellent documentation
- Vite team for the fast build tool
- GitHub for hosting and deployment

---

Made with ❤️ for authentic Ethiopian cuisine