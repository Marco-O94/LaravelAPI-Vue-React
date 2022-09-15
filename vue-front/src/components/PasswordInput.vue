<template>
   
    <label class="label">
      <span class="label-text">Password</span>
    </label>
        <input type="password" name="password" v-model="password" class="input input-bordered" placeholder="Inserisci la password">
    </template>
    
    <script>
    export default {
      name: 'PasswordInput',
      data() {
        return {
          password: '',
        };
      },
    }
    </script>