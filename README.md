# demoDisplayProject

a demo display project by Vue 3 + Typescript + Vite

- 引入 Element Plus 后打包编译不过去，在`tsconfig.json`中添加 `skipLibCheck` 忽略默认库的类型声明文件的检查

```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

- vue3 中监听 props 传入的值
```javaScript 
import { defineProps, watch } from 'vue'

const props = defineProps<{
    currentLocation: string;
}>()

watch(
    () => props.currentLocation, 
    (now, prev) => {
      // doing
    }
)
```

- 扩展 env.d.ts
```ts
// 扩展 window 属性
declare interface Window {
    MonacoEnvironment: any;
}
```


- build 打包的文件路径修改
```javascript
// vite.config.ts
{
    // ...
    base: './'
}
```