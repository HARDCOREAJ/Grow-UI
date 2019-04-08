<template>
    <div class="demo">
        <g-button @click="$toast('点击弹出提示',{autoClose:false})">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    </div>
</template>

<script>
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    "g-button": Button
  }
};
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

<style>
.wrapper{
  z-index: 30 !important;
}
</style>

