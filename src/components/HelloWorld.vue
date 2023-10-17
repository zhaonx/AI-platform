<script setup lang="ts">
  import { ref } from "vue";
  import { ElMessage } from "element-plus";
  import { Search } from '@element-plus/icons-vue'
  defineProps<{ msg: string }>();

  const input1 = ref('');
  const input = ref("element-plus");

  const curDate = ref("");

  const toast = () => {
    ElMessage.success("Hello");
  };

  const value1 = ref(true);
</script>

<template>
  <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="输入关键字 搜索你想要的模型"
          :prefix-icon="Search"
  />
  <router-link to="/group">
    <el-card class="box-card" shadow="hover">
      <div class="card-header">
        <span class="bold-large-text">语音识别</span>
      </div>
      <div class="text item">Similarity(相似度检测)
        将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
        结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
        结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
      </div>
      <div class="empty-line"></div> <!-- 空行 -->
      <div class="author-info">
        <p>作者: [作者的名字]</p>
        <p>时间: [发布时间]</p>
        <p>下载次数: [下载次数]</p>
      </div>


    </el-card>
  </router-link>
</template>

<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 20px;
  }

  .item {
    margin-bottom: 25px;
  }

  .box-card {
    width: 90%;
  }
  .w-50{
    width: 400px;
  }
  .bold-large-text {
    font-weight: bold;
    font-size: 30px; /* 调整字体大小以满足你的需求 */
  }
  .empty-line {
    margin-bottom: 20px; /* 调整以设置空行的高度 */
  }
  .author-info {
    text-align: center;
    display: flex;
    /*justify-content: space-between; !* 将内容均匀分布在一行 *!*/
    margin-top: 20px; /* 调整以设置作者信息的上边距 */
  }
</style>
