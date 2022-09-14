# Laravel-Api-and-JsFrameworks

Un progetto in cui inserirò nel tempo tutto ciò che riguarda Laravel, VueJs ed altri framework che verranno inseriti in futuro, 
come React, tutti collegati al medesimo Laravel.

---

## Installazione

### Sulla cartella di Laravel: 

- `composer install`
- Configurare il file .env inserendo il db
- `php artisan migrate`
- Se si vogliono creare fake data: `php artisan db:seed`
- `php artisan serve`

### Sulla cartella di Vue:
- `npm install`
- Nel file MainService.js in services cambiare il baseURL con l'url di Laravel
- `npm run serve`
