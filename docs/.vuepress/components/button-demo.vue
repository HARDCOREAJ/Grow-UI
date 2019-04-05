<template>
    <div class="demo">
        <g-button>默认</g-button>
        <g-button :loading='true'>加载</g-button>
        <g-button icon='settings'>设置</g-button>
        <g-button icon="settings" icon-position="right">设置</g-button>
    </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "g-button": Button
  },
};
</script>
<style scoped>
.demo {
  background: #3498DB;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>


