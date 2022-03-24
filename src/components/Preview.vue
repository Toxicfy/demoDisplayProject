<template>
  <div id="preview-container">
    <div class="code-container" v-show="showCodeEditor">
      <div class="code-info">
        <el-button color="#626aef" :icon="VideoPlay" class="execute-button" @click="handleExecuteCode">执行</el-button>
        <el-button color="#626aef" :icon="DArrowLeft" class="hide-button" @click="handleHideCodeEditor">收起编辑器
        </el-button>
      </div>
      <div class="code-editor"></div>
    </div>
    <div class="iframe-container">
      <div class="iframe-info">
        <el-button v-show="!showCodeEditor" color="#626aef" :icon="DArrowRight" class="open-button"
                   @click="handleOpenCodeEditor">打开编辑器
        </el-button>
        <span style="margin: 0 auto">功能名称</span>
      </div>
      <iframe srcdoc="" name="codeIframe" id="codeIframe"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { router } from '../router'
import { VideoPlay, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import * as monaco from 'monaco-editor'
import * as data from '../assets/data'

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

const currentPreviewId = ref(router.currentRoute.value.params.id)
const isResize = ref(false)
const showCodeEditor = ref(true)
let downPosition: number = 0
let editor = null

self.MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === 'html') {
      return new htmlWorker();
    }
    return new EditorWorker();
  },
};

const handleExecuteCode = () => {
  if (editor) {
    const value = editor.getValue()
    document.getElementById('codeIframe').srcdoc = value
  }
}
const handleHideCodeEditor = () => {
  showCodeEditor.value = false
  document.querySelector('.iframe-container').style.width = '100%'
}
const handleOpenCodeEditor = () => {
  showCodeEditor.value = true
  document.querySelector('.iframe-container').style.width = '60%'
}

// 页面初始化完成
onMounted(() => {
  const htmlModel = monaco.editor.createModel(data[currentPreviewId.value], 'html')
  const codeContainer = document.querySelector('.code-editor')
  // 创建代码编辑器
  editor = monaco.editor.create(codeContainer, {
    model: htmlModel,
    tabSize: 4,
    automaticLayout: true,
    scrollBeyondLastLine: false,
    theme: 'vs-dark'
  })
  // 执行代码
  handleExecuteCode()
})
</script>

<style>
#preview-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.code-container {
  width: 40%;
  overflow: hidden;
}

.code-container .code-editor {
  width: 100%;
  height: 100%;
}

.code-container .code-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: #171717;
}

.code-info .execute-button,
.code-info .hide-button,
.iframe-info .open-button {
  color: white;
  margin: 0 10px;
}


.iframe-container {
  width: 60%;
  background-color: #ddd;
  border: medium none;
}

.iframe-container .iframe-info {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #171717;
  color: #fff;
  font-size: 14px;
}

.iframe-container #codeIframe {
  border: none;
  width: 100%;
  height: 100%;
}
</style>
