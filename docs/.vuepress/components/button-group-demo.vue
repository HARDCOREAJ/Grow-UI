<template>
    <div class="demo">
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div>
</template>

<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/buttonGroup";
export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup
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