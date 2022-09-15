<template>

    <div class="hero  min-h-screen">
        <div class="hero-content container flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Accedi!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form @submit.prevent="login(form)">
              <div class="form-control">
              <CustomInput v-model="form.email" type="email" label="Email" name="email" placeholder="Inserisci la tua email"  />
            </div>
              <div class="form-control grid">
              <CustomInput v-model="form.password" type="password" label="Password" name="password" placeholder="Inserisci la tua password"  />
                  <a href="#" class="label-text-alt link link-hover justify-self-start mt-2">Password dimenticata?</a>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Accedi</button>
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
import MainService  from '@/services/MainService'
export default {
  name: 'LoginView',
  components: {
    CustomInput
  },
  methods: {
    login(credentials) {
      MainService.login(credentials)
    }
  },
  data() {
    return {
      form: {
        email: this.EmailInput,
        password: this.PasswordInput
      }
    }
  },
  }
</script>