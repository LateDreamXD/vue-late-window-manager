# Instance {#instance}

## Get Instance {#get-instance}

You have two ways to get Vue Late Window Manager instance:

1. Use `inject('$lwm')` in Vue component.

::: code-group

```vue [Typescript]
<script setup lang="ts">
import { inject } from 'vue'

const $lwm = inject<LWM.Instance>('$lwm')
</script>
...
```

```vue [Javascript]
<script setup>
import { inject } from 'vue'

/** @type {LWM.Instance} */
const $lwm = inject('$lwm')
</script>
...
```

:::

2. ~~Use `app.config.globalProperties.$lwm` in Vue instance.~~
<Badge type="warning" text="Deprecated" />  
<Badge type="danger" text="Not recommended" />

::: code-group

```vue [Typescript]
<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const $lwm = getCurrentInstance()!.appContext.app.config.globalProperties.$lwm;
</script>
...
```

```vue [Javascript]
<script setup>
import { getCurrentInstance } from 'vue'

const $lwm = getCurrentInstance().appContext.app.config.globalProperties.$lwm;
</script>
...
```

:::

## `actions` {#actions}

### `focusWindow(id: string): void` {#focus-window}
Cancel minimize window with `id` and focus it.
```js [Example]
$lwm.actions.focusWindow('test-window');
```

### `closeWindow(id: string): void` {#close-window}
Close window with `id`.
```js [Example]
$lwm.actions.closeWindow('test-window');
```

### `openWindow(id: string, options?: LateWindowOptions): void` {#open-window}
Open a window with `id` and [`options`](../types/window#options).
```js [Example]
$lwm.actions.openWindow('test-window', {
	content: 'Hello Vue Late Window Manager!'
});
```

### `maximizeWindow(id: string): void` {#maximize-window}
(Un)Maximize window with `id`.
```js [Example]
$lwm.actions.maximizeWindow('test-window');
```

### `minimizeWindow(id: string): void` {#minimize-window}
Cancel fouce and minimize window with `id`.
```js [Example]
$lwm.actions.minimizeWindow('test-window');
```

### `updateWindowPos(id: string, pos: { x: number, y: number }): void` {#update-window-pos}
Update window with `id` position to `pos`.
```js [Example]
$lwm.actions.updateWindowPos('test-window', {
	x: Math.floor(window.innerWidth / 2),
	y: Math.floor(window.innerHeight / 2)
});
```

## `DefaultOptions` {#default-options}
<Badge type="tip" text="readonly" />

Default or [user defined options](./options#options) of Vue Late Window Manager.

## `State` {#state}
<Badge type="tip" text="readonly" />

Current state of Vue Late Window Manager.

## `Element` {#element}

Types definition of Vue Late Window Manager components.
