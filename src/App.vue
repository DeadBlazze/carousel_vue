<template>
  <router-link to="/about">About</router-link>
  <router-link to="/">Home</router-link>
  <RouterView/>
</template>

<script>

export default {
  
}
</script>

<style>
 *{
    box-sizing: border-box;
    color: black;
  }
  body{
    background-color: rgb(255, 255, 255);
  }
  h2{
    color: white;
  }
  a{
    all:unset;
    cursor: pointer;
  }
  button {
    background-color: #FFFFFF;
    border: 1px solid #222222;
    border-radius: 8px;
    color: #222222;
    cursor: pointer;
    display: inline-block;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    outline: none;
    padding: 5px 10px;
    text-align: center;
  }
  input{
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
  }
</style>
<style scope>
  a:first-child{
    margin-right: 20px;
  }
</style>
