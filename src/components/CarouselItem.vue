<template>
    <img class="carousel__img" :src="item_data.img" alt="">
</template>
<script>

export default {
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style lang="css">
   .carousel__img{
        width: 100%;
        object-fit:contain;
        object-position: 0 0;
   }

</style>