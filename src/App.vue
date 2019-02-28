<template>
  <div id="app">
    <MNav></MNav>
    <div class="container">
      <transition-group name="fade" >
        <router-view key="1"></router-view>
        <router-view key="2" name="name"></router-view>
        <router-view key="3" name="version"></router-view>
      </transition-group>
     
    </div>
  </div>
</template>

<script>
import MNav from './components/MNav.vue'
export default {
  components:{
    MNav
  }
}
</script>

<style>

</style>
