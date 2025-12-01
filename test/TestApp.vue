<script setup lang="ts">
import { getCurrentInstance, h } from 'vue';

const $lwm = getCurrentInstance()!.appContext.config.globalProperties.$lwm;

$lwm.actions.openWindow('test-window', {
	content: h('p', { style: { padding: '6px' } }, 'Hello Vue Late Window Manager!'),
	size: {
		width: 400,
		height: 36
	}
});
$lwm.actions.openWindow('ld', {
	title: 'LateDreamXD',
	icon: 'https://about.latedream.cn/avatar',
	content: h('img', { src: 'https://about.latedream.cn/avatar', style: { width: '100%', height: '100%' } }),
	size: {
		width: 400,
		height: 400
	}
});
</script>

<template>
	<LWM />
</template>

<style>
body {
	backdrop-filter: blur(10px);
	background: url('https://about.latedream.cn/background') no-repeat center center fixed;
	background-size: cover;
}
</style>