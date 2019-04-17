<template>
  <div>
    <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <div style="padding: 20px;">
        <g-cascader :source.sync="source" popover-height="200px"
        :selected.sync="selected" :load-data="loadData"></g-cascader>
    </div>
    {{selected.map(item=> item.name)}}
  </div>
</template>
<script>
import Cascader from "./cascader";
import db from "./db";
function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId);
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 300);
  });
}

export default {
  name: "demo",
  components: {
    "g-cascader": Cascader
  },
  data() {
    return {
      source: [],
      selected: []
    };
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
      console.log(result);
    });
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result); // 回调:把别人传给我的函数调用一下
      });
    },
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>

