# 实例 {#instance}

## 获取实例 {#get-instance}

::: code-group

```vue [组合式 API]
<script setup>
import { useLWM } from "vue-late-window-manager";
const lwm = useLWM();
</script>
```

```vue [选项式 API]
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

```vue [组件模板]
<template>
  <button @click="$lwm.actions.openWindow('a')">open a window</button>
</template>
```

:::

## `actions` {#actions}

### `focusWindow(id: string): void` {#focus-window}

取消最小化窗口 `id` 并将其聚焦。

```js [示例]
$lwm.actions.focusWindow("test-window");
```

### `closeWindow(id: string): void` {#close-window}

关闭窗口 `id`。

```js [示例]
$lwm.actions.closeWindow("test-window");
```

### `openWindow(id: string, options?: LateWindowOptions): void` {#open-window}

使用 `id` 和 [`options`](../types/window#options) 打开窗口。

```js [示例]
$lwm.actions.openWindow("test-window", {
  content: "Hello Vue Late Window Manager!",
});
```

### `maximizeWindow(id: string): void` {#maximize-window}

(取消)最大化窗口 `id`。

```js [示例]
$lwm.actions.maximizeWindow("test-window");
```

### `minimizeWindow(id: string): void` {#minimize-window}

取消聚焦并最小化窗口 `id`。

```js [示例]
$lwm.actions.minimizeWindow("test-window");
```

### `updateWindowPos(id: string, pos: { x: number, y: number }): void` {#update-window-pos}

将窗口 `id` 的位置更新为 `pos`。

```js [示例]
$lwm.actions.updateWindowPos("test-window", {
  x: Math.floor(window.innerWidth / 2),
  y: Math.floor(window.innerHeight / 2),
});
```

## `DefaultOptions` {#default-options}

<Badge type="tip">只读</Badge>

Vue Late Window Manager 的默认或[用户定义选项](./options#user-options)。

## `State` {#state}

<Badge type="tip">只读</Badge>

Vue Late Window Manager 当前状态。

## `Element` {#element}

Vue Late Window Manager 组件的类型定义。
