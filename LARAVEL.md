# Laravel Development Guide - Pixel Position

## 🎨 Tailwind CSS Installation with Laravel

### Setting up Tailwind CSS in a Laravel project

This guide covers the installation and configuration of Tailwind CSS using Vite in a Laravel project.

### Step-by-Step Installation Process

#### 01. Create your project

Start by creating a new Laravel project if you don't have one set up already. The most common approach is to use the Laravel installer.

```bash
laravel new my-project
cd my-project
```

#### 02. Install Tailwind CSS

Install `@tailwindcss/vite` and its peer dependencies via npm.

```bash
npm install tailwindcss @tailwindcss/vite
```

#### 03. Configure Vite Plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration.

**vite.config.ts**

```typescript
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        // …
    ],
});
```

#### 04. Import Tailwind CSS

Add an `@import` to `./resources/css/app.css` that imports Tailwind CSS. Additionally, tell Tailwind CSS to scan some directories for utilities.

**app.css**

```css
@import "tailwindcss";
@source '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php';
@source '../../storage/framework/views/*.php';
@source '../**/*.blade.php';
@source '../**/*.js';
```

#### 05. Start your build process

Run your build process with npm run dev.

```bash
npm run dev
```

#### 06. Start using Tailwind in your project

Make sure your compiled CSS is included in the `<head>` then start using Tailwind's utility classes to style your content.

**app.blade.php**

```blade
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    @vite('resources/css/app.css')
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

### Key Configuration Points

#### Vite Integration

-   **Plugin**: `@tailwindcss/vite` provides seamless integration with Vite
-   **Hot Module Replacement**: Supports live reloading during development
-   **Build Optimization**: Optimizes CSS output for production

#### CSS Source Scanning

-   **Blade Templates**: Scans all `.blade.php` files for utility classes
-   **JavaScript Files**: Includes `.js` files in the scanning process
-   **Laravel Views**: Includes Laravel framework pagination views
-   **Storage Views**: Scans compiled views in storage directory

#### Development Workflow

-   **Development Server**: `npm run dev` for development with hot reloading
-   **Production Build**: `npm run build` for optimized production assets
-   **Watch Mode**: `npm run watch` for continuous compilation

### Benefits of Tailwind CSS with Laravel

#### Performance

-   **Utility-First**: Only used classes are included in final CSS
-   **Small Bundle Size**: Eliminates unused CSS automatically
-   **Fast Development**: Rapid prototyping with utility classes

#### Developer Experience

-   **IntelliSense**: VS Code extensions provide autocomplete
-   **Responsive Design**: Built-in responsive utility classes
-   **Customization**: Easy theming and customization options

#### Integration

-   **Vite Compatibility**: Seamless integration with Laravel's Vite setup
-   **Blade Components**: Works perfectly with Laravel Blade components
-   **Asset Pipeline**: Integrates with Laravel's asset compilation pipeline

---

_Configuration completed for Pixel Position project_
