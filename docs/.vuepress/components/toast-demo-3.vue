<template>
    <div class="demo">
        <g-button @click="onClickButton">上方弹出</g-button>
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
  },
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:pink;">加粗字体</strong>', {
        enableHtml: true
      });
    }
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
.wrapper {
  z-index: 30 !important;
}
</style>