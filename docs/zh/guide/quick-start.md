# 快速开始 {#quick-start}

## 安装 {#install}

Vue Late Window Manager 可以添加到您现有的 Vue3 项目中。
如果您没有 Vue3 项目，请查看 [创建一个 Vue 应用](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)。

您可以使用您喜欢的包管理器安装 Vue Late Window Manager。

::: code-group

```sh [npm]
$ npm install vue-late-window-manager -D
```

```sh [pnpm]
$ pnpm add vue-late-window-manager -D
```

```sh [yarn]
$ yarn add vue-late-window-manager -D
```

```sh [bun]
$ bun add vue-late-window-manager -D
```

:::

## 使用 {#usage}

要使用 Vue Late Window Manager，相当简单。

### 导入插件 {#import}

首先，您需要在 Vue3 项目中导入 Vue Late Window Manager 插件。
像这样修改您的 `main.ts` ( 或 `main.js`) 文件：

```ts [src/main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import LWM from 'vue-late-window-manager' // [!code ++]
// 默认窗口样式
import 'vue-late-window-manager/style' // [!code ++]

const app = createApp(App)
app.use(LWM) // [!code ++]
app.mount('#app')
```

### 创建窗口 {#create-window}

然后，您可以尝试创建一个窗口。
像这样修改您的 `App.vue` 文件：

```vue [src/App.vue]
<script setup lang="ts">
import { inject } from 'vue';

// 获取 LWM 实例
const $lwm = inject<LWM.Instance>('$lwm')!;

// 打开一个测试窗口
$lwm.actions.openWindow('test-window', {
	content: 'Hello Vue Late Window Manager!'
});
</script>

<template>
	<div>
		<!-- 初始化 LWM 容器 -->
		<LWM />
	</div>
</template>
```

如果一切正常，您应该会看到一个窗口，就像这样：

<iframe title="Example" src="/vue-late-window-manager/other/example.html" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>

## 下一步 {#next}
- [自定义窗口样式](./customization)
- [了解更多关于窗口的操作](../reference/instance#actions)
