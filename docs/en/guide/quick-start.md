# Quick Start {#quick-start}

## Installation {#install}

Vue Late Window Manager can be added to your existing Vue3 project.
Not having any Vue3 project? Check out the [Creating a Vue Application](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

You can install Vue Late Window Manager using your preferred package manager.

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

## Usage {#usage}

To use Vue Late Window Manager, is quite simple.

### Import the Plugin {#import}

First, you need to import the Vue Late Window Manager plugin in your Vue3 project.
Modify your `main.ts` ( or `main.js`) file as follows:

```ts [src/main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import LWM from 'vue-late-window-manager' // [!code ++]
// default window style
import 'vue-late-window-manager/style' // [!code ++]

const app = createApp(App)
app.use(LWM) // [!code ++]
app.mount('#app')
```

### Create a Window {#create-window}

Then, you can trying to create a window.
Modify your `App.vue` file like this:

```vue [src/App.vue]
<script setup lang="ts">
import { inject } from 'vue';

// get LWM instance
const $lwm = inject<LWM.Instance>('$lwm')!;

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

If is everything right, you should see a window like this:

<iframe title="Example" src="/vue-late-window-manager/other/example.html" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>

## What's Next? {#next}
- [Customize the Window Style](./customization)
- [Learn More about the Window actions](../reference/instance#actions)
