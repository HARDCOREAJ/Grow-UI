<template>
  <div class="tabs-item" @click="change()" :class="activeClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GrowTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
      this.active = name === this.name; //if current head is selected, then active itself
    });
  },
  methods: {
    change() {
      this.eventBus.$emit("update:selected", this.name,this);
    }
  }
};
</script>
<style <style lang="scss" scoped>
$blue:blue;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: blue;
    font-weight: bold;
  }
}
</style> 