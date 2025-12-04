# Components {#components}

Vue Late Window Manager provides two components: `LateWindow` and `LateWindowManager`. They will be registered as global components when you [import plugin](../guide/quick-start#import-the-plugin).

## `LateWindow` {#late-window}
<Badge type="tip">alias <code>late-window</code></Badge>

Single stand alone window component. [`$lwm`](./instance#instance) **not** effect to it. Need a [`LateWindowState`](../types/window#state) object as `window` prop.

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

<iframe title="Rendered Result" src="/other/components/window" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>

## `LateWindowManager` {#late-window-manager}
<Badge type="tip">alias <code>LWM</code></Badge>  
<Badge type="tip">alias <code>late-window-manager</code></Badge>

Core component of Vue Late Window Manager. It use [`$lwm`](./instance#instance) to control all windows opened by `$lwm`.

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

<iframe title="Rendered Result" src="/other/components/windowManager" width="100%" height="400px" style="border: 1px solid #ccc;border-radius: 6px;"></iframe>
