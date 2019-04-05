<template>
    <div class="demo">
        <g-collapse single :selected="['finance']">
            <g-collapse-item title="新闻" name="finance" class="child"> 新闻中心国际频道，中国最大的24小时原创国际资讯平台,专门展示国际时事、综述评论及图片的栏目，主要包括最新报道、新闻人物、评论分析、媒体聚焦、军事新闻。</g-collapse-item>
            <g-collapse-item title="体育" name="sports"  class="child"> 国家篮球协会是北美的男子职业篮球组织，拥有30支球队，分属两个分区：东部联盟和西部联盟；而每个分区各由三个赛区组成，每个赛区有五支球队。</g-collapse-item>
            <g-collapse-item title="娱乐" name="entertainment"  class="child"> 搜狐体育是中国知名的体育媒体，是受体育迷欢迎的网络资讯及互动平台。频道集赛事新闻报道、赛事视频转播、体育资讯服务、自媒体内容互动于一体。</g-collapse-item>
        </g-collapse>
    </div>
</template>

<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";
export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  }
};
</script>

<style lang="scss" scoped>
.demo {
  background: #3498db;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  .child {
    background: #95a5a6;
  }
}
</style>