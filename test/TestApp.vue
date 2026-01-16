<script setup lang="ts">
import { h } from 'vue';
import { useLWM } from 'vue-late-window-manager';

const lwm = useLWM();

lwm.actions.openWindow('test-window', {
	content: h('p', { style: { padding: '6px' } }, 'Hello Vue Late Window Manager!'),
	size: {
		width: 400,
		height: 'auto'
	}
});
lwm.actions.openWindow('ld', {
	title: 'LateDreamXD',
	icon: 'https://about.latedream.cn/avatar',
	content: h('div', {}, [
		h('img', { src: 'https://about.latedream.cn/avatar', style: { width: '100%', height: '100%' } }),
		h('p', { style: { padding: '6px' } }, 'Welcome to LateDreamXD!')
	]),
	size: {
		width: 400,
		height: 400
	}
});
</script>

<template>
	<LWM :custom-class="{ manager: 'custom-manager', window: 'custom-window' }" />
</template>

<style>
body {
	margin: 0;
	backdrop-filter: blur(10px);
	background: url('https://about.latedream.cn/background') no-repeat center center fixed;
	background-size: cover;
}
</style>