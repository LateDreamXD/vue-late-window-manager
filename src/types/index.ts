import type { DeepReadonly } from 'vue';
import { LateWindow, LateWindowManager } from './components';
import type { LateWindowOptions, LateWindowState } from './window';
import type { UserOptions } from './options';

declare global {
	// #region instance
	/** late window manager namespace | late window 窗口管理器命名空间 */
	namespace LWM {
		/** late window manager instance | late window 窗口管理器实例 */
		interface Instance {
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
		}
		/** late window manager element namespace | late window 窗口管理器元素命名空间 */
		namespace Element {
			/** late window element | late window 窗口元素 */
			type LateWindow = typeof LateWindow;
			/** late window manager element | late window 窗口管理器元素 */
			type LateWindowManager = typeof LateWindowManager;
		}
	}
	// #endregion instance
}

declare module 'vue' {
	interface ComponentCustomProperties {
		/**
		 * late window manager instance | late window 窗口管理器实例
		 */
		$lwm: LWM.Instance;

		/**
		 * late window element | late window 窗口元素
		 * @alias late-window
		 */
		LateWindow: LWM.Element.LateWindow;
		
		/**
		 * late window element | late window 窗口元素
		 * @alias LateWindow
		 */
		'late-window': LWM.Element.LateWindow;
		/**
		 * late window manager | late window 窗口管理器
		 * @alias late-window-manager
		 * @alias LWM
		 */
		LateWindowManager: LWM.Element.LateWindowManager;
		/**
		 * late window manager element | late window 窗口管理器元素
		 * @alias LateWindowManager
		 * @alias LWM
		 */
		'late-window-manager': LWM.Element.LateWindowManager;
		/**
		 * late window manager element | late window 窗口管理器元素
		 * @alias LateWindowManager
		 * @alias late-window-manager
		 */
		LWM: LWM.Element.LateWindowManager;
	}
}

export * from './window';
export * from './options';
export * from './components';
