<template>
  <Navbar :username="username" :key="username" />
  <router-view/>
  <Footer/>
</template>
<script>
  import Navbar from './components/NavBar.vue'
  import Footer from './components/FooterSection.vue'
  import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
},

setup() {
  //watch localstorage and return username
  const username = ref(localStorage.getItem('username'));
  return {
    username
  }
},




}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

