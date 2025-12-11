<script setup lang="ts">
import { computed, ref, inject, type DeepReadonly } from 'vue';
import icons from '../icons';
import type { LateWindowState } from '../types';

const $lwm = inject<LWM.Instance>('$lwm')!;

const props = defineProps<{
	window: DeepReadonly<LateWindowState>
}>();

const dragging = ref(false);
const offset = ref({ x: 0, y: 0 });

const styleObject = computed(() => ({
	zIndex: props.window.zIndex,
	left: `${props.window.position!.x}px`,
	top: `${props.window.position!.y}px`,
	width: typeof props.window.size!.width === 'number'? `${props.window.size!.width}px`: props.window.size!.width,
	height: typeof props.window.size!.height === 'number'? `${props.window.size!.height}px`: props.window.size!.height,
	display: props.window.isMinimized? 'none': 'flex'
}));

const isActive = computed(() => props.window.id === $lwm.State.activeWindowId);

const onMouseDown = (e: MouseEvent) => {
	$lwm.actions.focusWindow(props.window.id);
}

const startDrag = (e: MouseEvent) => {
	if(props.window.isMaximized || !props.window.moveable) return;
	dragging.value = true;
	offset.value = {
		x: e.clientX - props.window.position!.x,
		y: e.clientY - props.window.position!.y
	}
	window.addEventListener('mousemove', onDrag);
	window.addEventListener('mouseup', stopDrag);
}

const onDrag = (e: MouseEvent) => {
	if (!dragging.value) return;
	let x = e.clientX - offset.value.x;
	let y = e.clientY - offset.value.y;
	$lwm.actions.updateWindowPos(props.window.id, { x, y });
}

const stopDrag = () => {
	dragging.value = false;
	window.removeEventListener('mousemove', onDrag);
	window.removeEventListener('mouseup', stopDrag);
}

const maximize = () => $lwm.actions.maximizeWindow(props.window.id);
const minimize = () => $lwm.actions.minimizeWindow(props.window.id);
const close = () => $lwm.actions.closeWindow(props.window.id);
</script>

<template>
	<div :id="window.id" :class="{ [$lwm.DefaultOptions.manager!.customClass!.window!]: true, 'focused': isActive, 'minimized': window.isMinimized, 'maximized': window.isMaximized }" :style="styleObject" @mousedown="onMouseDown">
		<div class="title-bar" @mousedown="startDrag">
			<span class="title">
				<img class="icon" v-if="window.icon" :src="window.icon" alt="props.window.title" />
				{{ window.title }}
			</span>
			<div class="controls">
				<button class="dream-button icon" @click="minimize" title="最小化" v-html="icons['window-minimize']"></button>
				<button class="dream-button icon" @click="maximize" :title="window.isMaximized? '还原': '最大化'"
					v-html="window.isMaximized? icons.compress: icons.expand"
				></button>
				<button class="dream-button danger icon" @click="close" title="关闭" v-html="icons.xmark"></button>
			</div>
		</div>
		<div class="workspace">
			<slot></slot>
		</div>
	</div>
</template>
