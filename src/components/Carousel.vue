<template>
    <div class="wrapper">
        <div class="carousel">
            <CarouselItem v-for="item in carousel_data" :key="item.id" :item_data="item"/>
        </div>
        <button>Вперед</button>
    </div>
</template>
<script>
import CarouselItem from './CarouselItem.vue';
export default {
    components: {
        CarouselItem
    },
    name: 'Carousel',
    props: {
        carousel_data: {
            type: Array,
            default: () => {}
        }
    }
}
</script>
<style>
    .wrapper{
        width: 90%;
        overflow: hidden;
    }
    .carousel{
        display: flex;
        overflow-y:scroll;
    }
</style>