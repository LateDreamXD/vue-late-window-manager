import type { DeepReadonly } from 'vue';
import type { LateWindowOptions, LateWindowState, UserOptions } from './types';
import LateWindow from './components/Window.vue';
import LateWindowManager from './components/WindowManager.vue';

declare module 'vue' {
	interface ComponentCustomProperties {
		/** late window manager | late window 窗口管理器 */
		$lwm: {
			/** late window manager actions | late window 窗口管理器操作 */
			actions: {
				/** focus window | 聚焦窗口 */
				focusWindow: (id: string) => void;
				/** close window | 关闭窗口 */
				closeWindow: (id: string) => void;
				/** open new window | 打开新窗口 */
				openWindow: (id: string, options?: LateWindowOptions) => void;
				/** maximize window | 最大化窗口 */
				maximizeWindow: (id: string) => void;
				/** minimize window | 最小化窗口 */
				minimizeWindow: (id: string) => void;
				/** update window position | 更新窗口位置 */
				updateWindowPos: (id: string, pos: { x: number, y: number }) => void;
			};
			/**
			 * late window manager default options | late window 窗口管理器默认选项
			 * @readonly
			 */
			DefaultOptions: DeepReadonly<UserOptions>;
			/**
			 * late window manager state | late window 窗口管理器状态
			 * @readonly
			 */
			State: DeepReadonly<{
				/** active window id | 活动窗口 id */
				activeWindowId: string | null;
				/** windows list | 窗口列表 */
				windows: LateWindowState[];
			}>;
		};

		/**
		 * late window element | late window 窗口元素
		 * @alias late-window
		 */
		LateWindow: typeof LateWindow;
		
		/**
		 * late window element | late window 窗口元素
		 * @alias LateWindow
		 */
		'late-window': typeof LateWindow;
		/**
		 * late window manager | late window 窗口管理器
		 * @alias late-window-manager
		 * @alias LWM
		 */
		LateWindowManager: typeof LateWindowManager;
		/**
		 * late window manager element | late window 窗口管理器元素
		 * @alias LateWindowManager
		 * @alias LWM
		 */
		'late-window-manager': typeof LateWindowManager;
		/**
		 * late window manager element | late window 窗口管理器元素
		 * @alias LateWindowManager
		 * @alias late-window-manager
		 */
		LWM: typeof LateWindowManager;
	}
}

export { LateWindow, LateWindowManager };
