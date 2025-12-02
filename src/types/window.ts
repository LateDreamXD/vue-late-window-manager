import type { VNode } from 'vue';

/** late window options | late window 窗口选项 */
export declare type LateWindowOptions = {
	/** window icon | 窗口图标 */
	icon?: string;
	/**
	 * window title | 窗口标题
	 * @default 'Untitled Window'
	 */
	title?: string;
	/** window content | 窗口内容 */
	content?: string | VNode;
	/** window maximized state | 窗口最大化状态 */
	isMaximized?: boolean;
	/** window minimized state | 窗口最小化状态 */
	isMinimized?: boolean;
	/**
	 * window position | 窗口位置
	 * @default { x: 50 + (state.windows.length * 20), y: 50 + (state.windows.length * 20) }
	 */
	position?: {
		x: number;
		y: number;
	};
	/**
	 * window size | 窗口大小
	 * @default { width: 800, height: 600 }
	 */
	size?: {
		/** @default 800 */
		width: number | string;
		/** @default 600 */
		height: number | string;
	};
	/** window closeable state | 窗口能否关闭 */
	closeable?: boolean;
	/** window moveable state | 窗口能否移动 */
	moveable?: boolean;
	/** window maximizable state | 窗口能否最大化 */
	maximizable?: boolean;
	/** window minimizable state | 窗口能否最小化 */
	minimizable?: boolean;
}

/** late window state | late window 窗口状态 */
export declare type LateWindowState = LateWindowOptions & {
	/** 
	 * window unique id | 窗口唯一标识
	 * @requires
	 */
	id: string;
	/** window z-index | 窗口 z-index */
	zIndex: number;
	/** window last position | 窗口上次位置 */
	lastPosition?: {
		x: number;
		y: number;
	};
	/** window last size | 窗口上次大小 */
	lastSize?: {
		width: number | string;
		height: number | string;
	};
}
