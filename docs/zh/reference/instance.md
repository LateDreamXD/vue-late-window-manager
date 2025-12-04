# 实例 {#instance}

## 获取实例 {#get-instance}

您有两种方式来获取 Vue Late Window Manager 实例：

1. 在 Vue 组件中使用 `inject('$lwm')`。

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

2. ~~在 Vue 实例中使用 `app.config.globalProperties.$lwm`。~~
<Badge type="warning" text="已弃用" />  
<Badge type="danger" text="不推荐" />

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
取消最小化窗口 `id` 并将其聚焦。
```js [Example]
$lwm.actions.focusWindow('test-window');
```

### `closeWindow(id: string): void` {#close-window}
关闭窗口 `id`。
```js [Example]
$lwm.actions.closeWindow('test-window');
```

### `openWindow(id: string, options?: LateWindowOptions): void` {#open-window}
使用 `id` 和 [`options`](../types/window#options) 打开窗口。
```js [Example]
$lwm.actions.openWindow('test-window', {
	content: 'Hello Vue Late Window Manager!'
});
```

### `maximizeWindow(id: string): void` {#maximize-window}
(取消)最大化窗口 `id`。
```js [Example]
$lwm.actions.maximizeWindow('test-window');
```

### `minimizeWindow(id: string): void` {#minimize-window}
取消聚焦并最小化窗口 `id`。
```js [Example]
$lwm.actions.minimizeWindow('test-window');
```

### `updateWindowPos(id: string, pos: { x: number, y: number }): void` {#update-window-pos}
将窗口 `id` 的位置更新为 `pos`。
```js [Example]
$lwm.actions.updateWindowPos('test-window', {
	x: Math.floor(window.innerWidth / 2),
	y: Math.floor(window.innerHeight / 2)
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
