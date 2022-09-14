<template>
    <ul class="relative px-1">
        <MenuLink label="Home" link="/" fontAwesomeIcon="fa-solid fa-house" :collapsible="false" />
        <MenuLink label="Prodotti" link="/products" fontAwesomeIcon="fa-solid fa-boxes" :collapsible="false" />
      </ul>
</template>
<script>
    import MenuLink from './MenuLink.vue';
    export default {
        name: 'MainMenu',
        components: {
            MenuLink
        }
    }
</script>