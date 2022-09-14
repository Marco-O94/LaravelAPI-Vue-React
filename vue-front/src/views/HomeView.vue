<template>
  
  <HeroSection/>
  
    <ProductsCarousel/>
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
