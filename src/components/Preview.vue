<template>
    <div>
        <h1>去请求{{currentPreviewId}}的相关配置</h1>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {router} from '../router'
const currentPreviewId = ref(router.currentRoute.value.params.id)
</script>

<style>
</style>
