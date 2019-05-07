<template>
  <div class="tabs-pane" :class="activeClass" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GrowTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    activeClass() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  }
};
</script>
<style <style lang="scss" scoped>
.tabs-pane {
  padding: 1em;
  &.active {
    background: rgba(0, 0, 0, 0.75);
  }
}
</style> 