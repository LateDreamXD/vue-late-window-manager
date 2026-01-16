---
layout: false
title: Window Manager Component Showcase
---

<script setup lang="ts">
import { h } from 'vue';
import { useLWM } from 'vue-late-window-manager';

const lwm = useLWM();

lwm.actions.openWindow('ld', {
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
lwm.actions.openWindow('test-window', {
	content: h('p', { style: { padding: '6px' } }, 'Hello Vue Late Window Manager!'),
	size: {
		width: 350,
		height: 'auto'
	},
	position: {
		x: Math.floor((window.innerWidth - 350) / 2),
		y: Math.floor(window.innerHeight - 80)
	}
});
</script>

<LWM />

<style scoped>
@import 'vue-late-window-manager/style-scoped';
</style>
