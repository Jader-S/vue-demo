<template>
  <div class="switch" @click="click" :class="[value && 'active']">
  </div>
</template>

<script>
  export default {
    name: 'SwitchComponent',
    data() {
      return {
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      click() {
        this.$emit('input', !this.value);
      }
    }
  }
</script>

<style scoped>
.switch {
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}
.switch::after {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left 0.3s;
}
.switch.active {
  background-color:lime;
}
.switch.active::after {
  left: 20px;
}
</style>