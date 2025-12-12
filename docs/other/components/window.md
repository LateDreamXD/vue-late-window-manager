---
layout: false
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
<style scoped>
@import 'vue-late-window-manager/style-scoped';
</style>
<LateWindow :window="win">
	<template #default>
		write sth here...
	</template>
</LateWindow>