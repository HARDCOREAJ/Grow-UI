<template>
<div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
        {{result ||'&nbsp;'}}
    </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items :items="source" class="popover" :height="popoverHeight" :selected="selected"
            @update:selected="onUpdateSelected"></cascader-items>
        </div>
</div>
</template>

<script>
import CascaderItems from "./cascader-item";
export default {
  name: "GrowCascader",
  components: { CascaderItems },
  props: {
    source: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return { popoverVisible: false };
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  },
  computed: {
    result() {
      return this.selected.map(item => item.name).join("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "_var";
.cascader {
  position: relative;
  .trigger {
    height: $input-height;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0 1em;
    min-width: 10em;
    display: inline-flex;
    align-items: center;
  }
  .popover-wrapper {
    margin-top: 8px;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    @extend .box-shadow;
  }
}
</style>


