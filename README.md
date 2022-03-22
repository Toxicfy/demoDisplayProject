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
