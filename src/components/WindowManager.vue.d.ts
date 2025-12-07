type __VLS_Props = {
    /**
     * scoop custom class name | 范围自定义类名
     * @description if set, will extend default class name | 如果设置了范围自定义类名，会扩展默认类名
     */
    customClass?: {
        /** custom class name for manager | 自定义管理器类名 */
        manager?: string;
        /** custom class name for window | 自定义窗口类名 */
        window?: string;
    };
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
