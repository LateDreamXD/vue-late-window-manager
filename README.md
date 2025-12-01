<div align="center">
<img src="https://github.com/LateDreamXD/vue-late-window-manager/refs/heads/main/docs/preview.png" alt="preview" width="120" height="120" align="right" />

# Late Window Manager for Vue 3
[![npm](https://img.shields.io/npm/v/vue-late-window-manager?style=flat-square&logo=npm)](https://www.npmjs.com/package/vue-late-window-manager)
[![vue](https://img.shields.io/badge/vue-3.x-yellow?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![stars](https://img.shields.io/github/stars/LateDreamXD/vue-late-window-manager?style=flat-square&logo=github)](https://github.com/LateDreamXD/vue-late-window-manager/stargazers)
[![issues](https://img.shields.io/github/issues-search/LateDreamXD/vue-late-window-manager?query=is%3Aopen&style=flat-square&logo=github&label=issues
)](https://github.com/LateDreamXD/vue-late-window-manager/issues)

English | [中文文档](https://github.com/LateDreamXD/vue-late-window-manager/blob/main/docs/README.zh_CN.md)

</div>

## Installation
```bash
npm install vue-late-window-manager --save-dev
# or
# yarn add vue-late-window-manager --dev
# pnpm add vue-late-window-manager -D
```

## Usage
`main.ts`
```ts
import { createApp } from 'vue'
import App from './App.vue'
import LWM from 'vue-late-window-manager'
// default window style
import 'vue-late-window-manager/style'

const app = createApp(App)
app.use(LWM)
app.mount('#app')
```

`App.vue`
```html
<script setup lang="ts">
import { getCurrentInstance } from 'vue';

// get LWM instance
const $lwm = getCurrentInstance()!.appContext.config.globalProperties.$lwm;

// open a test window
$lwm.actions.openWindow('test-window', {
	content: 'Hello Vue Late Window Manager!'
});
</script>

<template>
	<div>
		<!-- init LWM container -->
		<LWM />
	</div>
</template>
```
