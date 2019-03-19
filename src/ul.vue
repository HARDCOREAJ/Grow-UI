<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name:'g-UL',
};
</script>

<style lang="scss" scoped>
ul {
  background: #fff;
  border-top: 6px solid #70c2c2;
  width: 200px;
  margin: 0 auto;
  color:grey;
}
</style>
