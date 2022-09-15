<template>
  
  <HeroSection/>
    <ProductsCarousel class="mb-[100px]"/>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import ProductsCarousel from '@/components/ProductsCarousel.vue';
export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ProductsCarousel
},

}


</script>
