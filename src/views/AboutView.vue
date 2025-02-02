<template lang="">
    <div class="AboutView">
        <div class="popup" v-if="$store.state.popupShow">
            <div class="popup__content">
                <div class="popup__header" >
                    <h2 class="h2">купить сайт в один клик</h2>
                    <button class="btn" @click="popupToggle">Закрыть</button>
                </div>
                <div class="popup__body">
                    <div class="popup__left">
                        <Carousel :carousel_data="slideritems"/>
                    </div>
                    <div class="popup__right">
                        <form action="">
                            <input type="text" name="" id="">
                            <input type="text" name="" id="">
                            <input type="text" name="" id="">
                            <input type="text" name="" id="">
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script >
    import Carousel from '../components/Carousel.vue'
    export default {
        components: {
            Carousel
        },
        data(){
            return{
                slideritems: [
                    {id: 1, name: 'img1', img:'src/assets/images/screen1.png'},
                    {id: 2, name: 'img2', img:'src/assets/images/screen2.png'},
                    {id: 3, name: 'img3', img:'src/assets/images/screen3.png'},
                ]
            }
        },
        methods:{
            popupToggle(){
                this.$store.state.popupShow = 0
            }
        }
    }
</script>
<style scoped>
    .AboutView{
        background-color: white;
        padding: 0;
        margin: 0;
    }
    .title{
        display: inline-block;
        margin-right: 40px;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
        font-weight: 600;
    }
    .popup{
        position:fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup__content{
        background-color: white;
        border-radius: 10px;
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
    }
    .popup__header{
        padding: 0 0 0 20px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .btn{
        height: fit-content;
    }
    .popup__left{
        width: 60%;
        display: flex;
        justify-content: center;
    }
    /* .slider{
        max-width: 100%;
        padding: 0 20px;
        overflow-x: hidden;
        overflow-y: scroll;
    } */
</style>