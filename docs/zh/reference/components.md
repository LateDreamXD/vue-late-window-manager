# 组件 {#components}

Vue Late Window Manager 提供了两个组件：`LateWindow` 和 `LateWindowManager`。它们会在您[导入插件](../guide/quick-start#import-the-plugin)时被注册为全局组件。

## `LateWindow` {#late-window}
<Badge type="tip">别名 <code>late-window</code></Badge>

独立窗口组件。 [`$lwm`](./instance#instance) **不会**影响到它。需要一个 [`LateWindowState`](../types/window#state) 对象作为 `window` prop。

```vue [Vue]
<script setup lang="ts">
const win: LWM.State.windows['0'] = {
	id: 'standalone-window',
	title: 'Standalone Window',
	zIndex: 100
}
</script>
<template>
	<LateWindow :window="win">
		<template v-slot:default>
			write sth here...
		</template>
	</LateWindow>
</template>
...
```

<iframe title="Rendered Result" src="/vue-late-window-manager/other/components/window" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>

## `LateWindowManager` {#late-window-manager}
<Badge type="tip">别名 <code>LWM</code></Badge>  
<Badge type="tip">别名 <code>late-window-manager</code></Badge>

Vue Late Window Manager 的核心组件。它使用 [`$lwm`](./instance#instance) 来控制所有由 `$lwm` 打开的窗口。

```vue [Vue]
<script setup lang="ts">
import { inject, h } from 'vue';

const $lwm = inject<LWM.Instance>('$lwm')!;

$lwm.actions.openWindow('ld', {
	title: 'LateDreamXD',
	icon: 'https://about.latedream.cn/avatar',
	content: h('img', { src: 'https://about.latedream.cn/avatar', style: { width: '100%', height: '100%' } }),
	size: {
		width: 350,
		height: 350
	},
	position: {
		x: Math.floor((window.innerWidth - 350) / 2),
		y: 6
	}
});
$lwm.actions.openWindow('test-window', {
	content: h('p', { style: { padding: '6px' } }, 'Hello Vue Late Window Manager!'),
	size: {
		width: 350,
		height: 36
	},
	position: {
		x: Math.floor((window.innerWidth - 350) / 2),
		y: Math.floor(window.innerHeight - 80)
	}
});
</script>
<template>
	<LateWindowManager />
</template>
...
```

<iframe title="Rendered Result" src="/vue-late-window-manager/other/components/windowManager" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>
