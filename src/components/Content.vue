<template>
    <span>当前应该定位到 ---- {{ currentLocation }} 位置</span>
    <br />
    <el-row :gutter="20">
        <el-col class="title" id="test1">位置一</el-col>
        <el-col :span="4" v-for="item in  3" :key="item">
            <el-card shadow="always">
                <div class="img">
                    <img src="../assets/cover.jpeg" alt="coverImage" />
                </div>
                <div class="text">
                    <span>demo 示例{{ item }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20" id="createScene">
        <el-col class="title">创建场景</el-col>
        <el-col :span="4" v-for="item in 7" :key="item" @click="handlePreviewData('test')">
            <el-card shadow="always">
                <div class="img">
                    <img src="../assets/cover.jpeg" alt="coverImage" />
                </div>
                <div class="text">
                    <span>demo 示例{{ item }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20"  id="mapEvent">
        <el-col class="title">场景控制</el-col>
        <el-col :span="4" v-for="item in 2" :key="item">
            <el-card shadow="always">
                <div class="img">
                    <img src="../assets/cover.jpeg" alt="coverImage" />
                </div>
                <div class="text">
                    <span>demo 示例{{ item }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col class="title" id="test2">位置四</el-col>
        <el-col :span="4" v-for="item in  7" :key="item">
            <el-card shadow="always">
                <div class="img">
                    <img src="../assets/cover.jpeg" alt="coverImage" />
                </div>
                <div class="text">
                    <span>demo 示例{{ item }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps<{
    currentLocation: string;
}>()

const handleScroller = (id: string) => {
    const dom = document.getElementById(id)
    const top = dom?.offsetTop ? dom.offsetTop - 80: 0
    document.getElementById('content-container')?.scrollTo({
        top,
        behavior: 'smooth'
    });
}

const handlePreviewData = (id: string) => {
    const href = router.resolve({
        name: 'preview',
        path: `/preview`,
        params: {
            id
        }
    })
    window.open(href.href, '_blank')
}

watch(
    () => props.currentLocation,
    (now, prev) => {
        handleScroller(now)
        console.log(now, prev);
    }
)

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
