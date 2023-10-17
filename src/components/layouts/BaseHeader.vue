<script lang="ts" setup>
  import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">
      <img src="../../assets/tsy.svg" class="logo vue" alt="Vue logo" />
      <span style="font-weight: bold; font-size: 24px;">数智化事业部AI能力平台</span>
    </el-menu-item>
    <!-- <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item> -->
  </el-menu>
</template>
