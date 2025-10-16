const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building project...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Copying dist files to root...');
const distPath = path.join(__dirname, 'dist');
const files = fs.readdirSync(distPath);

files.forEach(file => {
  const srcPath = path.join(distPath, file);
  const destPath = path.join(__dirname, file);
  
  if (fs.statSync(srcPath).isDirectory()) {
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true });
    }
    fs.cpSync(srcPath, destPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

console.log('Files copied! Now commit and push:');
console.log('git add .');
console.log('git commit -m "Deploy to GitHub Pages"');
console.log('git push origin master');
