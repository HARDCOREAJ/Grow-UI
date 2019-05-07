<template>
  <div>
<!--     <p>{{selected &&selected[0] &&selected[0].name || '空'}}</p>
    <p>{{selected &&selected[1] &&selected[1].name || '空'}}</p>
    <p>{{selected &&selected[2] &&selected[2].name || '空'}}</p>
    <div style="padding: 20px;">
        <g-cascader :source.sync="source" popover-height="200px"
        :selected.sync="selected" :load-data="loadData"></g-cascader>
    </div>
    {{selected.map(item=> item.name)}} -->

    <g-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>

  </div>
  
</template>
<script>
/* import Cascader from "./cascader";
import db from "./db"; */
import Slides from "./slides";
import SlidesItem from "./slide-item";
/* function ajax(parentId = 0) {
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
} */

export default {
  name: "demo",
  components: {
    /*     "g-cascader": Cascader, */
    "g-slides": Slides,
    "g-slides-item": SlidesItem
  },
  data() {
    return {
      source: [],
      selected: "undefined"
    };
  },
  created() {
    /*     ajax(0).then(result => {
      this.source = result;
      console.log(result);
    }); */
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result); // 回调:把别人传给我的函数调用一下
      });
    }
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

.wrapper {
  margin: 40px;
}

.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>

