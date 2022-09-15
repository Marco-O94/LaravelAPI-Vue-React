<template>
  <div class="navbar base-300">
    <div class="navbar-start">
      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
      </button>
    </div>
    <div class="navbar-center">
    <router-link to="/" class="btn btn-ghost normal-case text-xl">Laravel & Vue</router-link>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <router-link to="login" class="btn btn-ghost btn-circle">
        <i class="fa-solid fa-user"></i>
      </router-link>
      <button @click="logout" class="btn btn-ghost btn-circle">
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>
    </div>
  </div>
  <!--- OFFCanvas -->
  <div
    class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-base-200 invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out top-0 left-0 border-none w-96"
    tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
    <div class="offcanvas-header flex items-center justify-between p-4">
      <a href="https://github.com/Marco-O94" class="btn btn-ghost normal-case text-xl"><i class="fa-brands fa-github mr-2"></i> Marco-O94</a>
      <button type="button"
        class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-secondary border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-accent hover:opacity-75 hover:no-underline"
        data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <!-- OFFCanvas Body -->
    <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
      <ProfileBar :uname="username" v-if="username" />
      <MainMenu  />


    </div>
    <!-- // -->
  </div>

</template>
<script>
import ProfileBar from './ProfileBar.vue';
import MainMenu from './MainMenu.vue';
import service from '../services/MainService.js';
export default {
  components: {
    MainMenu,
    ProfileBar
  },
  props: {
    username: {
      type: String,
      required: false,
    },
  },
  methods: {
    logout() {
      // delete localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      service.logoutRequest();
      this.$router.push('/login');
    },
  },
}
</script>