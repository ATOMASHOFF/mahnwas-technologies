# Deployment Configuration Files

## Mahnwas Technology — A Mahnwas Groups Company

## 📦 For Vercel

Create `vercel.json` in root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.html"
    }
  ]
}
```

## 📦 For Netlify

Create `netlify.toml` in root:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build]
  publish = "."
  command = "echo 'No build required'"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "max-age=31536000, immutable"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "max-age=0, no-cache, no-store, must-revalidate"
```

## 🔧 For .htaccess (Apache)

Create `.htaccess` in root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Block .htaccess
  <Files .htaccess>
    Order allow,deny
    Deny from all
  </Files>
  
  # Rewrite URLs
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [QSA,L]
  
  # Enable gzip
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
  </IfModule>
  
  # Cache headers
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access 1 year"
    ExpiresByType text/javascript "access 1 year"
    ExpiresByType application/javascript "access 1 year"
    ExpiresByType image/jpeg "access 1 year"
    ExpiresByType image/png "access 1 year"
    ExpiresByType text/html "access 1 day"
  </IfModule>
</IfModule>
```

## 🔧 For Nginx

Create `nginx.conf`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    root /var/www/mahnwas-technologies;
    index index.html;
    
    # Enable gzip
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/rss+xml application/javascript application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Route all requests to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

## 🐳 For Docker

Create `Dockerfile`:
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install -g http-server
EXPOSE 8080
CMD ["http-server", "-p", "8080", "-g"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
    volumes:
      - .:/app
```

Deploy:
```bash
docker-compose up
```

## 📦 For GitHub Pages

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 📦 Package.json (Optional)

Create `package.json` for dependencies:
```json
{
  "name": "mahnwas-technologies",
  "version": "1.0.0",
  "description": "Mahnwas Technologies - Digital Infrastructure for Modern Businesses",
  "main": "index.html",
  "scripts": {
    "start": "http-server -p 8000",
    "build": "echo 'No build required'",
    "deploy": "vercel --prod"
  },
  "keywords": ["saas", "business", "technology", "india"],
  "author": "Mahnwas Technologies",
  "license": "MIT",
  "devDependencies": {
    "http-server": "^14.1.0"
  }
}
```

Install & run:
```bash
npm install
npm start
```

## 🔐 Security Headers Meta Tags

Add to `<head>` in index.html:
```html
<!-- Security & Performance -->
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="theme-color" content="#09080a">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- Open Graph (Social Media) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:title" content="Mahnwas Technologies">
<meta property="og:description" content="Digital Infrastructure for Modern Businesses">
<meta property="og:image" content="https://yourdomain.com/og-image.png">

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourdomain.com">
<meta property="twitter:title" content="Mahnwas Technologies">
<meta property="twitter:description" content="Digital Infrastructure for Modern Businesses">
<meta property="twitter:image" content="https://yourdomain.com/og-image.png">
```

## 🚀 One-Click Deployment Links

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR-REPO-URL)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=YOUR-REPO-URL)

## ✅ Deployment Checklist

Before deploying:

- [ ] All files in correct structure
- [ ] CSS path correct in index.html
- [ ] JS path correct in index.html
- [ ] All external CDN links working
- [ ] Images optimized
- [ ] No console errors
- [ ] Mobile responsive working
- [ ] All links functional
- [ ] Contact email updated
- [ ] Domain purchased
- [ ] SSL certificate ready
- [ ] Analytics configured
- [ ] Form handler configured
- [ ] Backups created

## 🎯 Recommended Deployment Platform

**Best Overall:** Vercel
- Free tier
- Automatic deployments
- Built-in analytics
- SSL included
- Fast global CDN

**Easy Alternative:** Netlify
- Free tier
- Git integration
- Drag & drop deploy
- Forms support
- Generous limits

**Budget Option:** GitHub Pages
- Completely free
- Git-based
- Custom domain support

---

Choose your deployment method and you're ready to go! 🚀
