# 🚀 Deploy Your Website to GitHub Pages - Step by Step

## ✅ **Quick Deployment Guide**

Follow these steps to publish your website on GitHub Pages:

## **Step 1: Navigate to Your Project Directory**

```bash
cd FoodMenu/FoodMenu
```

## **Step 2: Build Your Project (Optional - test before deploying)**

```bash
npm run build
```

This creates a `dist` folder with your production files.

## **Step 3: Commit All Changes**

```bash
# Check what files have changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Prepare for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

## **Step 4: Enable GitHub Pages in Repository Settings**

1. Go to your GitHub repository: `https://github.com/HaileDagne/Abity`
2. Click on **Settings** (top right of the repository page)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

## **Step 5: Trigger GitHub Actions Deployment**

The deployment will happen automatically when you push to `main`. But you can also trigger it manually:

1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select **main** branch
5. Click **Run workflow**

## **Step 6: Wait for Deployment**

- The workflow will run automatically (takes 2-3 minutes)
- Watch the progress in the **Actions** tab
- Look for a green checkmark ✓ when it's done

## **Step 7: Access Your Website**

Once deployment is complete:
- Your website will be live at: `https://hailedagne.github.io/Abity/`
- Wait a few minutes for GitHub Pages to update
- Clear your browser cache if you don't see changes immediately

## 🚨 **Troubleshooting**

### **If the workflow fails:**
1. Check the **Actions** tab for error messages
2. Make sure `package-lock.json` is committed
3. Verify GitHub Pages is enabled in Settings

### **If website doesn't load:**
1. Wait 5-10 minutes for GitHub Pages to propagate
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check the `gh-pages` branch has files

### **If assets don't load:**
1. Verify `vite.config.js` has `base: "/Abity/"`
2. Check all paths use `/Abity/` prefix
3. Rebuild: `npm run build` and check `dist` folder

## 📋 **What Happens During Deployment**

1. ✅ GitHub Actions triggers on push to `main`
2. ✅ Installs Node.js and dependencies
3. ✅ Builds your React app (`npm run build`)
4. ✅ Creates optimized production files in `dist/`
5. ✅ Deploys `dist/` folder to `gh-pages` branch
6. ✅ GitHub Pages serves your website

## 🎉 **Success!**

Your website should now be live at:
**https://hailedagne.github.io/Abity/**

---

**Need help?** Check the Actions tab in your GitHub repository for detailed logs.
