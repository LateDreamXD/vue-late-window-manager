# 选项 {#options}
Vue Late Window Manager 也提供了一些选项来配置默认参数。

## `UserOptions` {#user-options}

您可以使用 [`UserOptions`](../types/options#options) 来在[导入插件](../guide/quick-start#import-the-plugin)时配置默认参数，例如：

::: code-group

```ts [src/main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import LWM, { type UserOptions } from 'vue-late-window-manager' // [!code focus]
// 默认窗口样式
import 'vue-late-window-manager/style'

const LWMOptions: UserOptions = { // [!code focus]
	// 在这里添加你的选项... // [!code focus]
} // [!code focus]
const app = createApp(App)
app.use(LWM, LWMOptions) // [!code focus]
app.mount('#app')
```

```js [src/main.js]
import { createApp } from 'vue'
import App from './App.vue'
import LWM from 'vue-late-window-manager'
// 默认窗口样式
import 'vue-late-window-manager/style'

/** @type {import('vue-late-window-manager').UserOptions} */ // [!code focus]
const LWMOptions = { // [!code focus]
	// 在这里添加你的选项... // [!code focus]
} // [!code focus]

const app = createApp(App)
app.use(LWM, LWMOptions) // [!code focus]
app.mount('#app')
```

:::
