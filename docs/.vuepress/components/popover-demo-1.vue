<template>
    <div class="demo">
    <g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
    </g-popover>
    <g-popover position="right">
    <g-button>右边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
    </g-popover>
    <g-popover position="left" >
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
    </g-popover>
    <g-popover position="bottom" >
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
    </g-popover>
    </div>
</template>

<script>
import popover from "../../../src/popover";
import Button from "../../../src/button";
export default {
  components: {
    "g-popover": popover,
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
