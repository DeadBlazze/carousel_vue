<template lang="">
    <div>
        <h3>Список пользователей</h3>
        <PostItem v-for="post in posts" :post="post"/>
    </div>
    
</template>
<script>
import PostItem from '@/components/PostItem.vue';
export default {
    components: {
        PostItem
    },
    props:{
        posts:{
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>