<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const $lwm = getCurrentInstance()!.appContext.config.globalProperties.$lwm;

const windows = $lwm.State.windows;
</script>

<template>
	<div class="late-window-manager">
		<late-window v-for="win in windows" :key="win.id" :window="win">
			<template v-slot:default>
				<div v-if="typeof win.content === 'string'">
					{{ win.content }}
				</div>
				<component v-else :is="win.content" />
			</template>
		</late-window>
	</div>
</template>
