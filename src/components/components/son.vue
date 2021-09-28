<template>
  <div @click="add">我是son {{value}}</div>
</template>

<script>
export default {
data(){
  return{
value:0,
  }
},
methods:{
  add(){
    this.value=this.value+1
  }
}
}
</script>

<style>

</style>