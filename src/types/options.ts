import type { LateWindowOptions } from './window';

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
		initZIndex?: number
	}
}
