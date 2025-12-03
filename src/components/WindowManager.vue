<script setup lang="ts">
import { inject, computed } from 'vue';

const $lwm = inject<LWM.Instance>('$lwm')!;

const windows = computed(() => $lwm.State.windows);
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
