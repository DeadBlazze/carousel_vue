<template lang="">
    <form @submit.prevent="destroyLink">
        <h4>Создание поста</h4>
        <input v-model="post.title" type="text" placeholder="Название"> 
        <input v-model="post.body" type="text" placeholder="Описание"> 
        <button @click="createPost">Создать</button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
        },
    }
}
</script>
<style lang="">
    
</style>