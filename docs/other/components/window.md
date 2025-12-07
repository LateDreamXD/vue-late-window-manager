---
layout: page
title: Standalone Window Component Showcase
---

<script setup>
const win = {
	id: 'standalone-window',
	title: 'Standalone Window',
	position: {
		x: Math.floor((window.innerWidth - 400) / 2),
		y: Math.floor((window.innerHeight - 300) / 2)
	},
	size: {
		width: 400,
		height: 300
	},
	zIndex: 100
}
</script>
<style scooped>
@import 'vue-late-window-manager/style';
.title-bar>* {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
</style>
<LateWindow :window="win">
	<template v-slot:default>
		write sth here...
	</template>
</LateWindow>