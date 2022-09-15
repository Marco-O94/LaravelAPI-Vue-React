<template>

    <div class="hero  min-h-screen">
        <div class="hero-content container flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Accedi!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form @submit.prevent="login">
              <div class="form-control">
              <CustomInput v-model="form.email" type="email" label="Email" name="email" placeholder="Inserisci la tua email"  />
            </div>
              <div class="form-control grid">
              <CustomInput v-model="form.password" type="password" label="Password" name="password" placeholder="Inserisci la tua password"  />
                  <div class=" px-1 grid grid-cols-2 align-middle"><a href="#" class="label-text-alt justify-self-start link link-hover mt-2">Password dimenticata?</a>
                    <a href="#" class="label-text-alt link link-hover mt-2 justify-self-end">Registrati</a>
                  </div>
                  </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Accedi</button>
              </div>
              <div v-if="$store.state.status == 'failed'" class="alert alert-error shadow-lg py-3 mt-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Email o password non valide</span>
                </div>
              </div>
              <div v-else-if="$store.state.status == 'inProgress'" class="alert alert-info shadow-lg py-3 mt-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Accesso in corso...</span>
                </div>
              </div>
              <div>

              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import CustomInput from '@/components/CustomInput.vue';
// Custom input attributes: type, label, name, placeholder
//import service from '@/services/MainService.js'
export default {
  name: 'LoginView',
  components: {
    CustomInput
  },
 
  methods: {
    login: function () {
    let email = this.form.email 
    let password = this.form.password
    this.$store.dispatch('login', { email, password })
      .then(() => this.$router.push('/'))
      .catch(err => console.log(err))
}
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errorMessage: this.$store.state.status,
    }
  },
  }
</script>