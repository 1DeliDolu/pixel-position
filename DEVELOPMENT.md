# Pixel Position - Laravel Development Guide

## 📋 Project Overview

Pixel Position is a Laravel-based job board application that connects employers with potential candidates. The application features job listings, employer profiles, and a tagging system for better job categorization.

## 🚀 Project Setup

### Initial Project Creation

```bash
laravel new pixel-position
```

### Prerequisites

-   PHP 8.2 or higher
-   Composer
-   Node.js and npm
-   MySQL database
-   Laravel Herd (for local development)
-   TablePlus (for database management)
-   dbngix (for database operations)

### Installation Steps

1. Clone the repository
2. Install PHP dependencies:
    ```bash
    composer install
    ```
3. Install JavaScript dependencies:
    ```bash
    npm install
    ```
4. Copy environment file:
    ```bash
    copy .env.example .env
    ```
5. Generate application key:
    ```bash
    php artisan key:generate
    ```
6. Configure database settings in `.env`
7. Run migrations:
    ```bash
    php artisan migrate
    ```
8. Seed the database:
    ```bash
    php artisan db:seed
    ```

## 🗂️ Project Structure

### Core Models

-   **User**: Handles user authentication and profiles
-   **Employer**: Manages company information and job postings
-   **Job**: Represents job listings with detailed information
-   **Tag**: Provides categorization for jobs

### Database Schema

```
users
├── id
├── name
├── email
├── password
└── timestamps

employers
├── id
├── name
├── logo
└── timestamps

jobs
├── id
├── employer_id (foreign key)
├── title
├── salary
├── location
├── schedule
├── url
├── featured
└── timestamps

tags
├── id
├── name
└── timestamps

job_tag (pivot table)
├── job_id
├── tag_id
└── timestamps
```

## 🔧 Development Commands

### Running the Application

```bash
# Start development server
php artisan serve

# Compile assets
npm run dev

# Watch for changes
npm run watch
```

### Database Operations

```bash
# Create new migration
php artisan make:migration create_table_name

# Run migrations
php artisan migrate

# Rollback migrations
php artisan migrate:rollback

# Refresh migrations with seeding
php artisan migrate:refresh --seed
```

### Code Generation

```bash
# Create model with migration and factory
php artisan make:model ModelName -mf

# Create controller
php artisan make:controller ControllerName

# Create policy
php artisan make:policy PolicyName

# Create seeder
php artisan make:seeder SeederName

# Create factory
php artisan make:factory FactoryName
```

### Testing

```bash
# Run all tests
php artisan test

# Run specific test file
php artisan test tests/Unit/JobTest.php

# Run tests with coverage
php artisan test --coverage
```

## 🎨 Frontend Development

### Technologies Used

-   **Tailwind CSS**: For styling and responsive design
-   **Alpine.js**: For interactive components
-   **Vite**: For asset bundling and hot module replacement

### Blade Components

#### Layout Component

-   **Location**: `resources/views/components/layout.blade.php`
-   **Purpose**: Main layout template for all pages
-   **Features**:
    -   Responsive navigation with authentication states
    -   Dark theme with Tailwind CSS styling
    -   Hanken Grotesk font integration
    -   Vite asset compilation for CSS/JS in header
    -   Authentication-aware navigation (login/logout/register)
    -   Job posting functionality for authenticated users
    -   Logo integration with `Vite::asset('resources/images/logo.svg')`
    -   Main content area with `{{ $slot }}` for dynamic content

#### Layout Header Structure

```blade
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pixel Positions</title>

    <!-- Google Fonts Integration -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- Vite Asset Compilation -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
```

#### Form Components

-   **Label Component**: `resources/views/components/forms/label.blade.php`
-   **Purpose**: Reusable form label with custom styling
-   **Features**:
    -   White dot indicator for form fields
    -   Bold font styling
    -   Props support for `name` and `label` attributes
    -   Accessible label-input association

#### Component Structure

```
resources/views/
├── components/
│   ├── layout.blade.php     # Main layout component
│   └── forms/
│       └── label.blade.php  # Form label component
├── jobs/                    # Job-related views
├── auth/                    # Authentication views
└── welcome.blade.php        # Home page
```

#### Layout Structure Details

```blade
<nav>
  <div>
    <a href="/">
      <img src="{{ Vite::asset('resources/images/logo.svg') }}" alt="">
    </a>
  </div>
  <!-- Navigation menu -->
</nav>

<main class="mt-10 max-w-[986px] mx-auto">
  {{ $slot }}  <!-- Dynamic content area -->
</main>
```

### Asset Compilation

```bash
# Development build
npm run dev

# Production build
npm run build

# Watch mode
npm run watch
```

### JavaScript Configuration

#### Main JavaScript File: `resources/js/app.js`

```javascript
import "./bootstrap";

// Vite glob import for dynamic image loading
import.meta.glob(["../images/**"]);
```

**Key Features:**

-   **Bootstrap Import**: Loads Laravel's JavaScript bootstrap configuration
-   **Image Glob Import**: Dynamically imports all images from `resources/images/` directory
-   **Vite Integration**: Uses Vite's `import.meta.glob()` for efficient asset bundling
-   **Hot Module Replacement**: Supports live reloading during development

#### Asset Structure

```
resources/
├── css/
│   └── app.css              # Main CSS file
├── js/
│   ├── app.js               # Main JavaScript entry point
│   └── bootstrap.js         # Laravel JavaScript bootstrap
└── images/
    └── logo.svg             # Application logo and other images
```

#### Vite Asset Loading

-   **CSS/JS Compilation**: `@vite(['resources/css/app.css', 'resources/js/app.js'])`
-   **Image Assets**: `Vite::asset('resources/images/logo.svg')`
-   **Glob Imports**: Automatic bundling of image assets via `import.meta.glob()`

## 📝 Code Standards

### Laravel Best Practices

-   Follow PSR-12 coding standards
-   Use Eloquent ORM for database operations
-   Implement proper validation in form requests
-   Use policies for authorization
-   Follow RESTful naming conventions

### File Organization

```
app/
├── Http/
│   ├── Controllers/     # Handle HTTP requests
│   ├── Middleware/      # Request filtering
│   └── Requests/        # Form validation
├── Models/              # Eloquent models
├── Policies/            # Authorization logic
└── Providers/           # Service providers
```

## 🔒 Security Considerations

### Authentication & Authorization

-   User authentication via Laravel Breeze/Sanctum
-   Policy-based authorization for employers and jobs
-   CSRF protection on all forms
-   Input validation and sanitization

### Best Practices

-   Use prepared statements (Eloquent handles this)
-   Validate all user inputs
-   Implement proper error handling
-   Use HTTPS in production
-   Keep dependencies updated

## 🧪 Testing Strategy

### Test Structure

```
tests/
├── Feature/             # Integration tests
├── Unit/               # Unit tests
└── TestCase.php        # Base test class
```

### Testing Guidelines

-   Write tests for all models and controllers
-   Test both positive and negative scenarios
-   Use factories for test data generation
-   Mock external dependencies

## 🚀 Deployment

### Production Checklist

-   [ ] Set `APP_ENV=production`
-   [ ] Set `APP_DEBUG=false`
-   [ ] Configure proper database credentials
-   [ ] Run `composer install --optimize-autoloader --no-dev`
-   [ ] Run `npm run build`
-   [ ] Set proper file permissions
-   [ ] Configure web server (Apache/Nginx)
-   [ ] Set up SSL certificate
-   [ ] Configure backup strategy

### Environment Variables

```env
APP_NAME="Pixel Position"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pixel_position
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

## 📊 Performance Optimization

### Database Optimization

-   Use eager loading to prevent N+1 queries
-   Add database indexes for frequently queried columns
-   Implement caching for static data
-   Use database query optimization

### Application Optimization

-   Enable OPcache in production
-   Use Redis for session and cache storage
-   Implement proper error logging
-   Monitor application performance

## 🔄 Development Workflow

### Git Workflow

1. Create feature branches from `main`
2. Make atomic commits with clear messages
3. Run tests before committing
4. Create pull requests for code review
5. Merge after approval and testing

### Code Review Guidelines

-   Check for security vulnerabilities
-   Verify proper error handling
-   Ensure code follows Laravel conventions
-   Test functionality thoroughly
-   Review database queries for efficiency

## 📚 Resources

### Documentation

-   [Laravel Documentation](https://laravel.com/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Alpine.js Documentation](https://alpinejs.dev)

### Tools

-   **IDE**: VS Code with Laravel extensions
-   **Database**: MySQL Workbench or phpMyAdmin
-   **Testing**: PHPUnit and Pest
-   **Debugging**: Laravel Telescope (development)

---

_Last updated: July 16, 2025_
