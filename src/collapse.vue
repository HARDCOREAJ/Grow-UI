<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'GrowCollapse',
  props:{
      single:{
          type:Boolean,
          default:false
      },
      selected:{
          type:Array
      }
  },
  data(){
      return {
          eventBus:new Vue()
      }
  },
  provide(){
      return {
          eventBus:this.eventBus
      }
  },
  mounted(){
      this.eventBus.$emit('update:selected',this.selected)

      this.eventBus.$on('update:addSelected',(name)=>{
          let selectedArray=JSON.parse(JSON.stringify(this.selected))
          if(this.single){
              selectedArray=[name]
          }else{
              selectedArray.push(name)
          }
          this.eventBus.$emit('update:selected',selectedArray)
          this.$emit('update:selected',selectedArray) //遵循单项数据流，由父组件通知子组件
      })
      
      this.eventBus.$on('update:removeSelected',(name)=>{
          let selectedArray=JSON.parse(JSON.stringify(this.selected))
          let index=selectedArray.indexOf(name)
          selectedArray.splice(index,1)
          this.eventBus.$emit('update:selected',selectedArray)
          this.$emit('update:selected',selectedArray) //遵循单项数据流，由父组件通知子组件
      })
  }
}
</script>
<style lang="scss" scoped>
$grey:#ddd;
$border-radius:4px;
.collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>
