<template>
  <label class="label">
    <span class="label-text">Email</span>
  </label>
      <input type="email" name="email" v-model="email" class="input input-bordered" placeholder="Inserisci la tua email">
  </template>
  
  <script>
  export default {
    name: 'UsernameInput',
    data() {
      return {
        email: '',
      };
    },
  }
  </script>