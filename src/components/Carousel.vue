<template>
    <div>
        <div class="wrapper">
            <div class="carousel" :style="{'transform': 'translateX(-' + (100 * currentSlideIndex) + '%)'}">
                <CarouselItem v-for="item in carousel_data" :key="item.id" :item_data="item"/>
            </div>
        </div>
        <div class="form-btns">
            <button @click="prevSlide" style="margin-right: 10px;">Назад</button>
            <button @click="nextSlide">Вперед</button>
        </div>
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
    },
    data(){
        return{
            currentSlideIndex: 0
        }
    },
    methods:{
        prevSlide(){
            if(this.currentSlideIndex > 0){
                this.currentSlideIndex--
            }
            else{
                this.currentSlideIndex = this.carouselLength-1;
            }
        },
        nextSlide() {
            if(this.currentSlideIndex < this.carouselLength-1) {
                this.currentSlideIndex++;
            }
            else{
                this.currentSlideIndex = 0;
            }
        }
    },
    computed: {
        carouselLength() {
            return this.carousel_data.length;
        }
    }
}
</script>
<style>
    .wrapper{
        height: 60vh;
        overflow-x:hidden;      
        overflow-y: scroll;
        margin-bottom: 10px;
    }
    .carousel{
        display: flex;
        transition: all ease .7s;
    }
    .form-btns{
        display: flex;
        justify-content: center;
        width:90%;
    }
</style>