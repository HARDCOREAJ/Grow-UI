<template>
    <div class="demo">
        <g-icon name="left"></g-icon>
        <g-icon name="right"></g-icon>
        <g-icon name="error"></g-icon>
    </div>
</template>

<script>
import icon from "../../../src/icon";
export default {
  components: {
    "g-icon": icon
  },
};
</script>
<style scoped>
.demo {
  background: #3498DB;
  margin-right:10px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
