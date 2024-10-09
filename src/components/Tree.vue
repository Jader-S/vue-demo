<template>
  <div>
    <!-- 可视区域容器 -->
    <div class="infinite-list-container">
      <!-- 容器占位，用于形成滚动条 -->
      <div class="infinite-list-phantom"></div>
      <!-- 列表项渲染区域 -->
      <div class="infinite-list"></div>
    </div>
  </div>
</template>
<script>
import { getTreeApi } from '@/api/tree';
export default {
  name: 'tree-component',
  data() {
    return {
      treeData: [],
    }
  },
  methods: {
    async getTree() {
      console.time('获取数据');
      const res = await getTreeApi();
      console.log('res: ', res)
      this.treeData = res.data.data;
      console.timeEnd('获取数据');
    },

  },
  computed: {
  },
  mounted() {
    this.getTree(); // Fetch the tree data when the component is mounted
  },

}
</script>
<style lang="less">
.infinite-list-container {
  position: relative;
  overflow: auto;
  height: 300px; // Adjust the height as needed

  .infinite-list-phantom {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infinite-list {
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
  }
}
</style>