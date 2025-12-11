import type { LateWindowOptions } from './window';

// #region user-options
/** late window manager options | late window 窗口管理器选项 */
export declare type UserOptions = {
	/** default window options | 默认窗口选项 */
	window?: LateWindowOptions;
	/** default window manager options | 默认窗口管理器选项 */
	manager?: {
		/**
		 * initial z-index | 初始 z-index
		 * @default 100
		 */
		initZIndex?: number;
		/** custom class name | 自定义类名 */
		customClass?: {
			/**
			 * custom class name for window manager | 窗口管理器自定义类名
			 * @default 'late-window-manager'
			 */
			manager?: string;
			/**
			 * custom class name for window | 窗口自定义类名
			 * @default 'late-window'
			 */
			window?: string;
		};
		/**
		 * globally register components | 全局注册组件
		 * @default true
		 */
		globallyRegisterComponts?: boolean;
	}
}
// #endregion user-options
