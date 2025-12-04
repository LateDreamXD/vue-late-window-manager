# Options {#options}
Vue Late Window Manager also provides some options to config default parameters.

## `UserOptions` {#user-options}

You can use [`UserOptions`](../types/options#options) to config default parameters when [import plugin](../guide/quick-start#import-the-plugin) like this:

::: code-group

```ts [src/main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import LWM, { type UserOptions } from 'vue-late-window-manager' // [!code focus]
// default window style
import 'vue-late-window-manager/style'

const LWMOptions: UserOptions = { // [!code focus]
	// Your options here... // [!code focus]
} // [!code focus]
const app = createApp(App)
app.use(LWM, LWMOptions) // [!code focus]
app.mount('#app')
```

```js [src/main.js]
import { createApp } from 'vue'
import App from './App.vue'
import LWM from 'vue-late-window-manager'
// default window style
import 'vue-late-window-manager/style'

/** @type {import('vue-late-window-manager').UserOptions} */ // [!code focus]
const LWMOptions = { // [!code focus]
	// Your options here... // [!code focus]
} // [!code focus]

const app = createApp(App)
app.use(LWM, LWMOptions) // [!code focus]
app.mount('#app')
```

:::
