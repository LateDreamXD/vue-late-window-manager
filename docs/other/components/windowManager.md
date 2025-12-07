---
layout: page
title: Window Manager Component Showcase
---

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

<LWM />

<style scooped>
@import 'vue-late-window-manager/style';
.title-bar>* {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
</style>
