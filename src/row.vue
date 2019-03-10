<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  created() {

  },
  mounted() {
    this.$children.forEach(vm => (vm.gutter = this.gutter));
  },
  computed:{
    rowStyle(){
      let {gutter} = this
      return {marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}
    }
  }
}
var div = document.createElement("div"); // created
var childDiv = document.createElement("div"); // child created
div.appendChild(childDiv); // child mounted
document.body.appendChild(div); // mounted

</script>

<style scoped lang="scss">
.row {
  display: flex;
}
</style>