/**
 * Late Window Manager for Vue 3
 * @license MIT
 * @author LateDream
 */
import { type App, defineAsyncComponent, reactive, readonly } from 'vue';
import type { UserOptions, LateWindowOptions, LateWindowState } from './types/';

const LateWindow = defineAsyncComponent(() => import('./components/Window.vue'));
const LateWindowManager = defineAsyncComponent(() => import('./components/WindowManager.vue'));

export { version } from '../package.json';
export { LateWindow, LateWindowManager };

export default {
	install(app: App, options?: UserOptions) {
		if(options?.manager?.globallyRegisterComponts ?? true) {
			app.component('LateWindow', LateWindow)
			.component('late-window', LateWindow)
			.component('LateWindowManager', LateWindowManager)
			.component('late-window-manager', LateWindowManager)
			.component('LWM', LateWindowManager);
			app.config.globalProperties.LateWindow = LateWindow;
			app.config.globalProperties['late-window'] = LateWindow;
			app.config.globalProperties.LateWindowManager = LateWindowManager;
			app.config.globalProperties['late-window-manager'] = LateWindowManager;
			app.config.globalProperties.LWM = LateWindowManager;
		}

		const state = reactive({
			activeWindowId: null as string | null,
			windows: [] as LateWindowState[],
			zIndexCounter: options?.manager?.initZIndex ?? 100
		});

		const $lwm = {
			actions: {
				focusWindow: (id: string) => {
					const win = state.windows.find(w => w.id === id);
					if (win) {
						state.activeWindowId = id;
						win.zIndex = state.zIndexCounter++;
						win.isMinimized = false;
					} else
						console.warn(`Window with id ${id} not found`);
				},
				closeWindow: (id: string) => {
					state.windows = state.windows.filter(w => w.id !== id);
					state.zIndexCounter--;
				},
				openWindow: (id: string, options?: LateWindowOptions) => {
					if (state.windows.some(w => w.id === id)) {
						$lwm.actions.focusWindow(id);
						return;
					}
					state.windows.push({
						id,
						icon: options?.icon,
						title: options?.title ?? $lwm.DefaultOptions.window!.title,
						content: options?.content,
						isMaximized: options?.isMaximized ?? false,
						isMinimized: options?.isMinimized ?? false,
						position: options?.position ?? $lwm.DefaultOptions.window!.position,
						size: options?.size ?? $lwm.DefaultOptions.window!.size,
						closeable: options?.closeable ?? true,
						moveable: options?.moveable ?? true,
						maximizable: options?.maximizable ?? true,
						minimizable: options?.minimizable ?? true,
						zIndex: $lwm.DefaultOptions.manager!.initZIndex!,
					});
					state.activeWindowId = id;
				},
				maximizeWindow: (id: string) => {
					const win = state.windows.find(w => w.id === id);
					if (win) {
						const max = !win.isMaximized;
						win.moveable = !max;
						win.isMaximized = max;
						if (max) {
							win.lastPosition = win.position;
							win.lastSize = win.size;
							win.position = {
								x: 0,
								y: 0
							};
							win.size = {
								width: '100vw',
								height: '100vh'
							}
						} else {
							win.position = win.lastPosition;
							win.size = win.lastSize;
						}
					} else
						console.warn(`Window with id ${id} not found`);
				},
				minimizeWindow(id: string) {
					const win = state.windows.find(w => w.id === id);
					if (win) {
						win.isMinimized = true;
						state.activeWindowId = null;
					}
				},
				updateWindowPos(id: string, pos: { x: number; y: number }) {
					const win = state.windows.find(w => w.id === id);
					if (win && win.moveable) {
						win.position = pos;
					} else
						console.warn(`Window with id ${id} not found`);
				}
			},
			DefaultOptions: readonly({
				window: {
					title: 'Untitled Window',
					position: {
						x: 50 + (state.windows.length * 20),
						y: 50 + (state.windows.length * 20)
					},
					size: {
						width: 800,
						height: 600
					},
					...options?.window
				},
				manager: {
					initZIndex: 100,
					customClass: {
						manager: 'late-window-manager',
						window: 'late-window',
					},
					...options?.manager
				}
			}),
			State: readonly(state)
		}
		app.provide('$lwm', $lwm);
		app.config.globalProperties.$lwm = $lwm;
	}
}