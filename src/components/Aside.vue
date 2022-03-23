<template>
    <el-row class="tac">
        <el-col :span="24" class="aside-main">
            <el-menu
                active-text-color="#ffd04b"
                :background-color="backgroundColor"
                class="el-menu-vertical"
                default-active="1"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <home-filled />
                        </el-icon>
                        <span>{{initOptions.title}}</span>
                    </template>
                    <el-menu-item
                        v-for="item in initOptions.children"
                        :index="item.index"
                        :key="item.index"
                        @click="emit('handleLocation', item.index, item.name)"
                    >{{ item.name }}</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <copy-document />
                        </el-icon>
                        <span>图层加载</span>
                    </template>
                    <el-menu-item-group title="瓦片图层">
                        <el-menu-item index="2-1">集合下的图层1</el-menu-item>
                        <el-menu-item index="2-2">集合下的图层2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="模型图层">
                        <el-menu-item index="2-3">集合下的图层1</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <coin />
                        </el-icon>
                        <span>工具集</span>
                    </template>
                    <el-menu-item index="3-1">集合下的组元素1</el-menu-item>
                    <el-menu-item index="3-2">集合下的组元素2</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>分析功能</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'
import {
    CopyDocument,
    HomeFilled,
    Coin,
    Setting
} from '@element-plus/icons-vue'

const backgroundColor: string = '#545c64'
const initOptions = {
    title: '场景初始化',
    children: [
        { index: 'createScene', name: '创建场景' },
        { index: 'mapEvent', name: '场景控制' }
    ]
}
const emit = defineEmits(['handleLocation'])
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style>
.aside-main {
    height: 100%;
    background-color: v-bind(backgroundColor);
}

.el-menu {
    border: none;
}
</style>