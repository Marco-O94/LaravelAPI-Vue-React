# LaravelApi with Vue and React
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
Verranno in futuro inseriti anche React e forse Svelte.

### Documentazione

- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue](https://vuejs.org/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [ChartJS](https://www.chartjs.org/docs/latest/)
- [Laravel Cashier](https://laravel.com/docs/9.x/billing)
- [Vue Cal](https://antoniandre.github.io/vue-cal/)

### TODO LIST
Configurare le rotte per i prodotti
- Creare Dashboard
- Creare pagine CRUD prodotto
- Creare rotte private
- Creare pagina di registrazione
- Aggiungere campi (isAdmin, role) in tabella users
- Aggiungere tabella (roles) con Model
- Aumentare caratteristiche Prodotto in tabella.
- Fare rotta + view singolo prodotto 
- Aggiungere Commenti nel progetto Vue

### Avvisi
Quando il progetto va in produzione, settare i Cookies: \
`{secure: true }`
### RoadMap
- Integrazione prodotti con possibilità di inserimento da parte di utente con privilegi
- Dashboard con storico ordini, grafico con chartjs di vendite, riepilogo prodotti creati, etc.
- Sistema di Pagamento Stripe tramite Laravel Cashier
- Sistema di Ticketing e di prenotazione
- Creazione di ulteriore SPA in React
- In Costruzione...

