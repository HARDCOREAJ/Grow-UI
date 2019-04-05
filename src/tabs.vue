<template>
    <div class="tabs">
        <slot>

        </slot>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "GrowTabs",
  data() {
    return { eventBus: new Vue() };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
    }
  },
  mounted() {
    if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs shoul contain tabs-head&tabs-item')
      }
    this.$children.forEach(vm => {
      if (vm.$options.name === "GrowTabsHead") {
        vm.$children.forEach(childVm => {
          if (
            childVm.$options.name === "GrowTabsItem" &&
            childVm.name == this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected,childVm);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>


