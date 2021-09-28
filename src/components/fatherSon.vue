<template>
  <div>
  <h3 @click="sonChange">父子组件</h3>
  <son ref="son"></son>
  </div>
</template>

<script>
import son from './components/son.vue'
export default {
components:{
  son
},
methods:{
  sonChange(){
    this.$refs['son'].add();
  }
}
}
</script>

<style>

</style>