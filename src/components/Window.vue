<script setup lang="ts">
import { computed, ref, inject, type DeepReadonly } from 'vue';
import icons from '../icons';
import type { LateWindowState } from '../types';

const $lwm = inject<LWM.Instance>('$lwm')!;

const { window } = defineProps<{
	window: DeepReadonly<LateWindowState>
}>();

const dragging = ref(false);
const offset = ref({ x: 0, y: 0 });

const styleObject = computed(() => ({
	zIndex: window.zIndex,
	left: `${window.position!.x}px`,
	top: `${window.position!.y}px`,
	width: typeof window.size!.width === 'number'?
		   `${window.size!.width}px`: window.size!.width,
	height: typeof window.size!.height === 'number'?
			`${window.size!.height}px`: window.size!.height,
	display: window.isMinimized? 'none': 'flex'
}));

const isActive = computed(() => window.id === $lwm.State.activeWindowId);

const onMouseDown = (e: MouseEvent) => {
	$lwm.actions.focusWindow(window.id);
}

const startDrag = (e: MouseEvent) => {
	if(window.isMaximized || !window.moveable) return;
	dragging.value = true;
	offset.value = {
		x: e.clientX - window.position!.x,
		y: e.clientY - window.position!.y
	}
	document.addEventListener('mousemove', onDrag);
	document.addEventListener('mouseup', stopDrag);
}

const onDrag = (e: MouseEvent) => {
	if (!dragging.value) return;
	let x = e.clientX - offset.value.x;
	let y = e.clientY - offset.value.y;
	$lwm.actions.updateWindowPos(window.id, { x, y });
}

const stopDrag = () => {
	dragging.value = false;
	document.removeEventListener('mousemove', onDrag);
	document.removeEventListener('mouseup', stopDrag);
}

const maximize = () => $lwm.actions.maximizeWindow(window.id);
const minimize = () => $lwm.actions.minimizeWindow(window.id);
const close = () => {
	minimize();
	setTimeout(() => $lwm.actions.closeWindow(window.id), 300);
};

const onTouchStart = (e: TouchEvent) => {
	if(e.touches.length > 1) return;
	$lwm.actions.focusWindow(window.id);
}

const startTouchDrag = (e: TouchEvent) => {
	if(window.isMaximized || !window.moveable || e.touches.length > 1) return;
	dragging.value = true;
	const touch = e.touches[0];
	offset.value = {
		x: touch.clientX - window.position!.x,
		y: touch.clientY - window.position!.y
	}
	document.addEventListener('touchmove', onTouchDrag, { passive: false });
	document.addEventListener('touchend', stopTouchDrag);
}

const onTouchDrag = (e: TouchEvent) => {
	if (!dragging.value) return;
	e.preventDefault();
	const touch = e.touches[0];
	let x = touch.clientX - offset.value.x;
	let y = touch.clientY - offset.value.y;
	$lwm.actions.updateWindowPos(window.id, { x, y });
}

const stopTouchDrag = () => {
	dragging.value = false;
	document.removeEventListener('touchmove', onTouchDrag);
	document.removeEventListener('touchend', stopTouchDrag);
}
</script>

<template>
	<div :data-window-id="window.id" :class="{
		[$lwm.DefaultOptions.manager!.customClass!.window!]: true, dragging,
		focused: isActive, minimized: window.isMinimized, maximized: window.isMaximized
	}" :style="styleObject" @mousedown="onMouseDown" @touchstart="onTouchStart">
		<div class="title-bar" @mousedown="startDrag" @touchstart="startTouchDrag">
			<span class="title">
				<img class="icon" v-if="window.icon" :src="window.icon" alt="window.title" />
				{{ window.title }}
			</span>
			<div class="controls">
				<button class="dream-button icon" @click="minimize" title="Minimize"
						aria-label="Minimize" v-html="icons['window-minimize']"></button>
				<button class="dream-button icon" @click="maximize"
						:title="window.isMaximized? 'Restore': 'Maximize'"
						:aria-label="window.isMaximized? 'Restore': 'Maximize'"
						v-html="window.isMaximized? icons.compress: icons.expand"></button>
				<button class="dream-button danger icon" @click="close" title="Close"
						aria-label="Close" v-html="icons.xmark"></button>
			</div>
		</div>
		<div class="workspace">
			<div class="content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
