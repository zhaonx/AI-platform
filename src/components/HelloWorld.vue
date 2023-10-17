<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref("");

const toast = () => {
  ElMessage.success("Hello");
};

const value1 = ref(true);
</script>

<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header" >
        <span>语音识别</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="text item">Similarity(相似度检测)
      将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
      结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
      结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
    </div>
  </el-card>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header" >
        <span>语音识别</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="text item">Similarity(相似度检测)
      将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
      结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
      结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
    </div>
  </el-card>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header" >
        <span>语音识别</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="text item">Similarity(相似度检测)
      将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
      结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
      结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
    </div>
  </el-card>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header" >
        <span>语音识别</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="text item">Similarity(相似度检测)
      将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
      结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
      结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
    </div>
  </el-card>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header" >
        <span>语音识别</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="text item">Similarity(相似度检测)
      将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
      结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
      结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
    </div>
  </el-card>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header" >
        <span>语音识别</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="text item">Similarity(相似度检测)
      将文本转换为向量之后基于余弦相似度等方法计算出两个文本的相似度
      结合BERT将用户问题与数据库中的问题的相似度进行比对，返回最相似的问题答案
      结合知识图谱地址匹配：如湖北省中一路=武汉市中一路 知识聚合 可能结合铁路开发设计的应用场景 铁路知识信息聚合
    </div>
  </el-card>
</template>

<style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 25px;
  }

  .box-card {
    width: 90%;
  }
</style>
