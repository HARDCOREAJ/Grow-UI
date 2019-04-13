<template>
    <div class="cascaderItem" :style="{height:height}">
        <div class="left">
            <div class="lable" v-for="(item,index) in items" @click="onClickLable(item)" :key="index">
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <grow-cascader-items ref="right" :items="rightItems" :height="height"
            :level="level+1" :selected="selected" @update:selected="onUpdateSelected"></grow-cascader-items>
        </div>
    </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "GrowCascaderItems",
  components: { Icon },
  props: {
    items: { type: Array },
    height: { type: String },
    selected: { type: Array },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selected = this.items.filter(
          item => item.name === this.selected[this.level].name
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        }
      }
    }
  },
  mounted() {},
  updated() {
    console.log("cascader items updated");
  },
  methods: {
    onClickLable(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "_var";
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 1em;
      transform: scale(0.5);
    }
  }
}
</style>


