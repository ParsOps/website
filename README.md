# Hugo Theme for ParsOps

This is the ParsOps homepage converted to Hugo theme format.

## Quick Start

1. Navigate to the hugo directory:
```bash
cd hugo
```

2. Start the Hugo development server:
```bash
hugo server -D
```

3. Open your browser at `http://localhost:1313`

## Build for Production

```bash
hugo
```

The static site will be generated in the `public/` directory.

## Theme Structure

```
hugo/
├── hugo.toml                    # Hugo configuration
├── content/
│   └── _index.md               # Homepage content
├── static/
│   ├── css/
│   │   └── styles.css          # All CSS styles
│   └── js/
│       └── script.js           # All JavaScript
└── themes/
    └── parsops/
        └── layouts/
            └── index.html      # Homepage template
```

## Features

- ✅ Hugo template functions ({{ .Site.Title }}, {{ relURL }})
- ✅ Bootstrap 5 integration
- ✅ Bootstrap Icons
- ✅ Responsive design
- ✅ Scroll animations
- ✅ Testimonial slider
- ✅ Modern DevOps-themed design

## Customization

Edit `hugo.toml` to change site title, baseURL, and other settings.

## Deploy to GitHub Pages for ParsOps.com

### 1. Create GitHub Repository

```bash
cd /home/mparvin/Documents/MyGit/ParsOps/new-design/hugo
git init
git add .
git commit -m "Initial commit: ParsOps Hugo theme"
```

### 2. Create Repository on GitHub

Create a new repository on GitHub (e.g., `parsops-website`)

```bash
git remote add origin https://github.com/YOUR_USERNAME/parsops-website.git
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages with GitHub Actions

Create `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.126.2
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your workflow file:

```bash
mkdir -p .github/workflows
# Create the hugo.yml file with content above
git add .github/workflows/hugo.yml
git commit -m "Add GitHub Actions workflow for Hugo deployment"
git push
```

### 5. Custom Domain (ParsOps.com)

1. In your repository, go to **Settings** → **Pages**
2. Under **Custom domain**, enter `parsops.com`
3. Wait for DNS check to complete
4. Enable **Enforce HTTPS**

5. Update your DNS records at your domain registrar:
   - Add an `A` record pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a `CNAME` record for `www` pointing to `YOUR_USERNAME.github.io`

6. Create a `static/CNAME` file:

```bash
echo "parsops.com" > static/CNAME
git add static/CNAME
git commit -m "Add CNAME for custom domain"
git push
```

7. Update `hugo.toml`:

```toml
baseURL = 'https://parsops.com/'
```

### 6. Verify Deployment

After pushing, GitHub Actions will automatically build and deploy your site. Check:
- Actions tab for build status
- Visit `https://parsops.com` after DNS propagation (may take up to 24 hours)

### Quick Commands

```bash
# Local development
hugo server -D

# Build for production
hugo --minify

# Deploy to GitHub
git add .
git commit -m "Update content"
git push
```
