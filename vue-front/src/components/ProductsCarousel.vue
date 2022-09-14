<template>
    <div class="container px-0">
    <swiper :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
    }" :speed="2500" :loop="true" :pagination="{
    clickable: true,
    }" :modules="modules" :slides-per-view="3"
    :space-between="50">
        <!-- SLIDER PAGINE -->
        <template v-for="(product, index) in featuredProducts" :key="index">
            <swiper-slide class="py-[100px]">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img :src="product.image" alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{{product.name}}</h2>
                            <p class="text-left">{{product.description}}</p>
                            <div class="card-actions grid grid-cols-2 items-center">
                                <div class="text-space text-xl justify-self-start">{{product.price}} €</div>
                                <button class="btn btn-primary">Compra ora</button>
                            </div>
                        </div>
                    </div>
            </swiper-slide>
        </template>
    </swiper>
    </div>
</template>
<script>
import MainService from '@/services/MainService.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    name: 'ProductsCarousel',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            featuredProducts: [],
        }
    },
    created() {
        MainService.getFeaturedProducts().then((response) => {
            this.featuredProducts = response.data;
        }).catch((error) => {
            console.log(error);
        });
    },
    setup() {
        return {
            modules: [
                Navigation,
                Pagination,
                Autoplay,
            ]
        };
    },
}
</script>