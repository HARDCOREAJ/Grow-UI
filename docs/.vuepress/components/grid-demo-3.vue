<template>
    <div class="demo">
        <g-row gutter="20" class="g-row">
            <g-col class="g-col" :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ><div class="grid-content bg-purple"></div></g-col>
            <g-col class="g-col" :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ><div class="grid-content bg-purple-dark"></div></g-col>
            <g-col class="g-col" :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ><div class="grid-content bg-purple-light"></div></g-col>
            <g-col class="g-col" :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ><div class="grid-content bg-purple"></div></g-col>
            <g-col class="g-col" :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ><div class="grid-content bg-purple-dark"></div></g-col>
            <g-col class="g-col" :pc="{span:3}" :narrow-pc="{span:6}" :ipad="{span:12}" ><div class="grid-content bg-purple-light"></div></g-col>
        </g-row>
    </div>
</template>

<script>
import col from "../../../src/col";
import row from "../../../src/row";
export default {
  components: {
    "g-col": col,
    "g-row": row
  }
};
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 10px;
  padding: 10px 10px 0 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .g-col {
      border-radius: 4px;
      margin-bottom: 10px;
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
  }
}
</style>