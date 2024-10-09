<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NClick
      :count="2"
      content="点击"></NClick>
    <SwitchComponent v-model="switchValue" ></SwitchComponent> -->
    <Tree></Tree>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import NClick from './components/NClick.vue';
// import SwitchComponent from './components/SwitchComponent.vue';
import Tree from './components/Tree.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // NClick,
    // SwitchComponent,
    Tree,
  },
  data() {
    return {
      switchValue: false,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
