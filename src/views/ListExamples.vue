<template lang="">
    <PostForm @create="createPost"/>
    <PostList :posts="posts"/>
</template>
<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
export default {
    components:{
    PostList, PostForm
  },
  data(){
    return {
      posts:[
        {title:'Первый пост',body:'Описание 1'},
        {title:"Второй пост",body:'Описание 2'}
      ],
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    }
  }
}
</script>
<style lang="">
    
</style>