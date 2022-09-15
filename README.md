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
- `npm run serve`

### Altro
La gestione della sessione avviene tramite Vuex, le rotte sono gestite da Vue router.\
Su vue sto usando Option API, il Composition API lo utilizzerò nel prossimo progetto sempre collegato a questa repo. \
Verranno in futuro inseriti anche React e Svelte.

### Documentazione

- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue](https://vuejs.org/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

### RoadMap
Aggiungere Commenti nel progetto Vue
Configurazione [rotte private](https://router.vuejs.org/guide/advanced/navigation-guards.html#optional-third-argument-next)\

`router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})`
