---
layout: page
title: Example
---

<script setup lang="ts">
import { inject } from 'vue';

const $lwm = inject<LWM.Instance>('$lwm')!;

const open = () => $lwm.actions.openWindow('test-window', {
	content: 'Hello Vue Late Window Manager!',
	position: {
		x: Math.floor((window.innerWidth - 400) / 2),
		y: Math.floor((window.innerHeight - 300) / 2)
	},
	size: {
		width: 400,
		height: 300
	}
});

const reopen = () => {
	if($lwm.State.windows['test-window'])
		$lwm.actions.focusWindow('test-window');
	else open();
}

open();
</script>

<button class="dream-button" style="margin: 8px;" @click="reopen">Reopen</button>

<LWM />

<style scoped>
@import 'vue-late-window-manager/style';
</style>
