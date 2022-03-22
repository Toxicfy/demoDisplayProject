<template>
    <h1>主体部分</h1>
    <span>当前应该定位到 ---- {{ currentLocation }} 位置</span>
    <br>
    <br>
    <el-row :gutter="20">
        <el-col :span="4" v-for="item in 7" :key="item">
            <el-card shadow="always">
                <div class="img">
                    <img src="../assets/cover.jpeg" alt="coverImage" />
                </div>
                <div class='text'>
                    <span>demo 示例{{item}}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    currentLocation: string
}>()

</script>

<style>
.el-col {
    margin-bottom: 15px;
}
.el-card__body {
    cursor: pointer;
    height: 220px;
    padding: 0;
}
.el-card__body .img {
    width: 100%;
    height: 80%;
}

.el-card__body .img img {
    width: 100%;
    height: 100%;
}

.el-card__body .text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20%;
}
</style>
