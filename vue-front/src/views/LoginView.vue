<template>

    <div class="hero  min-h-screen">
        <div class="hero-content container flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Accedi!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
              <EmailInput />
            </div>
              <div class="form-control grid">
              <PasswordInput />
                  <a href="#" class="label-text-alt link link-hover justify-self-start mt-2">Password dimenticata?</a>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Accedi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import EmailInput from '@/components/EmailInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';
export default {
  name: 'LoginView',
  components: {
    EmailInput,
    PasswordInput
  },
};
</script>