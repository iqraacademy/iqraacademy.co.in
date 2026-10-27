# Mufti Muhammad Abdul Matin — Official Website & Archive (GitHub + Cloudflare Deployment Package)

This repository contains the complete, production-ready code for the personal website, 17-chapter biographical & institutional digital archive, citizen connect portal (with 4-digit numeric ID status tracking), and encrypted Firebase Admin Portal for **Mufti Muhammad Abdul Matin**.

## Included Files
- `index.html` — Complete responsive web application (HTML5, Tailwind CSS, JavaScript, WebCrypto SHA-256/AES-256-GCM & Firebase Auth REST integration).
- `_headers` — Cloudflare Pages military-grade HTTP security headers (HSTS, XSS & Clickjacking protection).
- `firestore.rules` — Firebase Firestore security rules for production cloud database synchronization.

## How to Deploy on GitHub & Cloudflare Pages
1. Create a new repository on **GitHub** and upload `index.html`, `_headers`, `firestore.rules`, and `README.md`.
2. Log in to **Cloudflare Dashboard** -> **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub repository and click **Begin setup** -> **Save and Deploy** (no build command needed).
4. **Custom Domain Setup**: When you purchase your custom domain, go to Cloudflare Pages -> **Custom domains** -> **Set up a custom domain**, and update the visitor counter domain label from `example.com` to your new domain directly inside the website's **Admin Portal -> Tab 4 (Domain & Visitor Counter)**.

## Default Admin Login Credentials
- **Email:** `matinbanganur@gmail.com`
- **Password:** `MatinVIP#2026`
- **Firebase Auth Integration:** Open the Admin Login modal, expand **Firebase Project API Configuration**, and paste your Firebase Web API Key (`AIzaSy...`) when connecting to your live Firebase project.
