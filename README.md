# Vite Typescript Webstudio

Webstudio is a powerful platform, but its HTML embed editor may not yet be fully optimized for every use case.  
This setup allows developers to leverage their local IDEs for coding and debugging within Webstudio without relying on the HTML embed editor. By using **Toggle Preview (CMD + Shift + P)** in Webstudio, you can streamline your workflow and debug JavaScript seamlessly.

## Table of Contents
- [How to Use](#how-to-use)
- [Using in Production](#using-in-production)
- [Features](#features)
- [Future Improvements](#future-improvements)

---

## How to Use

1. **Clone the Repository**  
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/henrytrianta/vite-typescript-webstudio.git
   ```

2. **Install Dependencies**  
   Install the required dependencies using your favorite package manager. For example, with `pnpm`:
   ```bash
   pnpm install
   ```

3. **Run the Development Script**  
   Start the development server by running:
   ```bash
   pnpm dev
   ```

4. **Embed the Script in Webstudio**  
   Copy the following script into the **HTML Embed** section of your page or slot in Webstudio:
   ```html
   <script src="http://localhost:3000/index.js"></script>
   ```
   - Ensure you check the **Client Only** option, as JavaScript typically modifies the DOM or handles animations. Learn more about this [here](https://docs.webstudio.is/university/core-components/html-embed).

5. **Debugging with Toggle Preview**  
   Use **Toggle Preview (CMD + Shift + P)** in Webstudio while inspecting your browser's console tab. You should see an introductory log confirming everything is working.

6. **Edit and Save**  
   Modify the main entry point located at `/src/index.ts`. Once saved, the changes will automatically bundle and replace the JS file on your localhost. Toogle and Detoogle preview to see your updates instantly.

---

## Using in Production

When ready for production:

1. A bundled JavaScript file (`index.js`) will be generated inside the `dist` folder.
2. You can either:
   - Copy the contents of `index.js` directly into the **HTML Embed** section of Webstudio, wrapped in `<script>` tags:
     ```html
     <script>Your code here...</script>
     ```
   - Or upload the `index.js` file to a repository or storage service that supports hotlinking.

---

## Features

- **Local IDE Integration**: Code JavaScript locally in your preferred IDE while working with Webstudio.
- **Automatic Bundling**: Changes are automatically bundled and reflected in real-time upon saving.

---

## Future Improvements

- **Page Splitting**: Allow splitting scripts across multiple pages instead of loading a single JS file globally.
- **Versioning**: Add support for version control of scripts.
- **Enhanced Debugging Tools**: Integrate more advanced debugging features.

---
