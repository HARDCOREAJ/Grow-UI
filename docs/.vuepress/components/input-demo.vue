
<template>
    <div class="demo">
    <div class="input-wrapper"><g-input placeholder="默认状态"></g-input></div>
    <div class="input-wrapper"><g-input v-model="message"></g-input>{{message}}</div>
    <div class="input-wrapper"><g-input value="禁用状态" disabled></g-input></div>
    <div class="input-wrapper"><g-input value="只读状态" readonly></g-input></div>
    <div class="input-wrapper"><g-input value="错误状态" error="error"></g-input></div>
    </div>
</template>

<script>
import input from "../../../src/input";
import Icon from "../../../src//icon";
export default {
    data(){
       return {message:'Hi MVVM'}
    },
  components: {
    "g-input": input
  }
};
</script>
<style scoped>
.demo {
  background: #3498DB;
  margin-right: 10px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column
}
.input-wrapper{
    color: #34495E;
    margin-bottom: 30px;
    width: 300px;
    margin-right: 10px;
}
</style>