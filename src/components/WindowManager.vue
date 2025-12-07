<script setup lang="ts">
import { inject, computed } from 'vue';

const $lwm = inject<LWM.Instance>('$lwm')!;

const windows = computed(() => $lwm.State.windows);

defineProps<{
	/**
	 * scoop custom class name | 范围自定义类名
	 * @description if set, will extend default class name | 如果设置了范围自定义类名，会扩展默认类名
	 */
	customClass?: {
		/** custom class name for manager | 自定义管理器类名 */
		manager?: string;
		/** custom class name for window | 自定义窗口类名 */
		window?: string;
	}
}>();
</script>

<template>
	<div :class="{ [$lwm.DefaultOptions.manager!.customClass!.manager!]: true, [customClass?.manager!]: customClass?.manager! }">
		<late-window :class="{ [customClass?.window!]: customClass?.window! }" v-for="win in windows" :key="win.id" :window="win">
			<template v-slot:default>
				<div v-if="typeof win.content === 'string'">
					{{ win.content }}
				</div>
				<component v-else :is="win.content" />
			</template>
		</late-window>
	</div>
</template>
