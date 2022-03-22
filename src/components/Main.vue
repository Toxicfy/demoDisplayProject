<script setup lang="ts">
import Aside from './Aside.vue'
import Content from './Content.vue'
// 任何在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用
// import 导入的内容也会以同样的方式暴露。意味着可以在模板表达式中直接使用导入的 helper 函数，并不需要通过 methods 选项来暴露它：

import { ref } from 'vue' // 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value
import {ElMessage} from 'element-plus'
let currentLocation = ref('')
const headerHeight: string = '60px'
const handleLocation = (key: string, name: string) => {
    console.log(key, name)
    currentLocation.value = key
    ElMessage({
      type: 'success', 
      message: `定位到${name}`
    })
}
</script>

<template>
  <div class="common-layout">
    <el-header :height='headerHeight'/>
    <el-container>
      <el-aside width="200px">
        <Aside class="aside-container" @handleLocation="handleLocation"/>
      </el-aside>
      <el-main>
        <Content :currentLocation="currentLocation"/>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  background: #b1b3b87a
}
.aside-container {
  height: 100%;
}
.el-container {
  height: calc(100% - v-bind(headerHeight))
}
</style>
