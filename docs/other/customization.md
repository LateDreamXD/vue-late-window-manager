---
layout: page
title: Customized Example
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

<style lang="scss">
.late-window-manager .dream-button.icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
.late-window {
	position: fixed;
	flex-direction: column;

	&>* {
		width: 100%;
	}

	.title-bar {
		color: grey;
		background-color: #49413b;
		display: inline-flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		border-radius: 10px 10px 0 0;
		
		.title {
			display: inline-flex;
			user-select: none;
			margin-right: 6px;
			font-size: 12px;
		}
		.controls {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;

			.dream-button.icon {
				border: 0;
				background-color: transparent;
				width: 24px;
				height: 24px;
				svg {
					display: none; // hide default icon
				}

				&::before {
					content: '';
					display: inline-block;
					width: 12px;
					height: 12px;
					border-radius: 50%;
					background-color: #fac800;
				}

				&::first-child::before {
					background-color: #35c759;
				}

				&.danger::before {
					background-color: #ff5c60;
				}
			}
		}
	}
	.workspace {
		flex: 1;
		color: #fff;
		background-color: #233333;
		border-top: 1px #0008 solid;
		border-radius: 0 0 10px 10px;
	}

	&.focused .title-bar {
		color: #fffaf0;
		background-color: #222521;
		.title {
			font-weight: bold;
		}
	}
}
</style>
