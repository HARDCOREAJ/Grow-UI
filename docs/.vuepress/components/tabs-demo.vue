<template>
    <div class="demo">
        <g-tabs selected="entertainment">
            <g-tabs-head>
                <g-tabs-item name="entertainment">
                    娱乐
                </g-tabs-item>
                <g-tabs-item name="finance">
                    财经
                </g-tabs-item>
                <g-tabs-item name="sports">
                    体育
                </g-tabs-item>
                <g-tabs-item name="disable" disabled>
                    禁用
                </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="entertainment">
                    这是娱乐内容
                </g-tabs-pane>
                <g-tabs-pane name="finance">
                    这是财经内容
                </g-tabs-pane>
                <g-tabs-pane name="sports">
                    这是体育内容
                </g-tabs-pane>
                <g-tabs-pane name="disable">
                    这是禁用内容
                </g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
    </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsContent from "../../../src/tabs-body";
import TabsItem from "../../../src/tabs-item";
import TabsHead from "../../../src/tabs-head";
import TabsPane from "../../../src/tabs-pane";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-body": TabsContent,
    "g-tabs-item": TabsItem,
    "g-tabs-head": TabsHead,
    "g-tabs-pane": TabsPane
  }
};
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>