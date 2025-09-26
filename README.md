# Tailwind CSS Starter Pack

This is a minimal Tailwind CSS setup using the Tailwind CLI (no frameworks).

## Folder structure
```
tailwind-starter-pack/
├─ public/          # Your HTML & built CSS live here
│  └─ index.html
├─ src/
│  └─ input.css     # Tailwind source with @tailwind directives
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ .vscode/settings.json
```

## Quick start
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start dev watcher (builds styles.css and watches for changes)**
   ```bash
   npm run dev
   ```

3. **Open the page**
   - Use a simple server:
     ```bash
     npm run preview
     ```
     Then open http://localhost:5500
   - Or just open `public/index.html` directly in your browser.

4. **Production build (minified)**
   ```bash
   npm run build
   ```

## VS Code tips
- If you see `unknown at rules` on `@tailwind`, it's just VS Code CSS linting. This project includes `.vscode/settings.json` to ignore that.
- Install the **Tailwind CSS IntelliSense** extension for class name suggestions.

Happy hacking!
