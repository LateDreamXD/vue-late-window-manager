# Instance {#instance}

## Get Instance {#get-instance}

::: code-group

```vue [Compostion API]
<script setup>
import { useLWM } from "vue-late-window-manager";
const lwm = useLWM();
</script>
```

```vue [Options API]
<script>
export default {
  methods: {
    openWindow() {
      this.$lwm.actions.openWindow( /* ... */ );
    }
  }
};
</script>
```

```vue [Template]
<template>
  <button @click="$lwm.actions.openWindow('a')">open a window</button>
</template>
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
