<template>
    <div class="tabs">
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
  name: "GrowTabs",
  props: {
    selected: {
      default: false,
      type: String
    },
    direction: { default: "horizontal", type: String,
    validator(value){
         return ['horizontal', 'vertical'].indexOf(value)>0
    } }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
    border: 1px red solid;
}
</style>


