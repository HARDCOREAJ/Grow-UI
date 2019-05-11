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

<!-- <g-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides> -->

    <g-nav :selected.sync="selected" vertical width="300px">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav name="about">
        <template slot="title">关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav name="phone">
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </g-sub-nav>
      </g-sub-nav>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
    <p>你好，我是中文</p>
  </div>
  
</template>
<script>
/* import Cascader from "./cascader";
import db from "./db"; */
/* import Slides from "./slides";
import SlidesItem from "./slide-item"; */
import GNav from './nav'
import GNavItem from './nav-item'
import GSubNav from './sub-nav'

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
    /* "g-slides": Slides,
    "g-slides-item": SlidesItem */
    GNav, GNavItem, GSubNav
  },
  data() {
    return {
      source: [],
      selected: "culture"
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

