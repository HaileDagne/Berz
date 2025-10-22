# Hostinger Deployment Guide

## 🚀 How to Deploy Your React App to Hostinger

### Prerequisites

- Hostinger hosting account
- File Manager access or FTP client
- Your project built and ready

### Step 1: Build Your Project

```bash
npm run build:hostinger
```

### Step 2: Access Your Hostinger File Manager

1. Log into your Hostinger control panel
2. Go to **File Manager**
3. Navigate to `public_html` directory

### Step 3: Upload Files

1. **Delete all existing files** in `public_html` (if any)
2. **Upload ALL contents** from the `dist` folder to `public_html`
   - Upload `index.html`
   - Upload `manifest.json`
   - Upload `robots.txt`
   - Upload `sitemap.xml`
   - Upload `sw.js`
   - Upload `vite.svg`
   - Upload the entire `assets` folder

### Step 4: Verify Upload

Your `public_html` directory should contain:

```
public_html/
├── index.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── sw.js
├── vite.svg
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    ├── vendor-[hash].js
    └── router-[hash].js
```

### Step 5: Test Your Site

1. Visit your domain (e.g., `https://yourdomain.com`)
2. Check browser console for any errors
3. Test all pages and functionality

### Important Notes

- ✅ **All paths are configured for root deployment**
- ✅ **No subdirectory issues**
- ✅ **Production optimized build**
- ✅ **All assets properly linked**

### Troubleshooting

If you see 404 errors:

1. Ensure ALL files from `dist` folder are uploaded
2. Check that file permissions are correct (644 for files, 755 for folders)
3. Verify the `assets` folder and its contents are uploaded

### File Upload Methods

**Option 1: File Manager (Recommended)**

- Use Hostinger's built-in File Manager
- Drag and drop files directly

**Option 2: FTP Client**

- Use FileZilla or similar FTP client
- Connect to your Hostinger FTP
- Upload to `public_html` directory

### Performance Tips

- Enable Gzip compression in Hostinger control panel
- Set up caching headers for static assets
- Consider using a CDN for better global performance

---

**Your app is now ready for production on Hostinger! 🎉**

