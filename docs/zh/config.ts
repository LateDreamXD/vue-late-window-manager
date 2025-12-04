import { defineAdditionalConfig, type DefaultTheme } from 'vitepress';

const nav = (): DefaultTheme.NavItem[] => [
	{ text: '指南', link: '/zh/guide/quick-start', activeMatch: '/zh/guide/' },
	{ text: '参考', link: '/zh/reference/options', activeMatch: '/zh/reference/' }
];

const sidebar = (): DefaultTheme.Sidebar => [
	{
		text: '指南',
		base: '/zh/guide/',
		items: [
			{ text: '快速开始', link: 'quick-start' },
			{ text: '自定义', link: 'customization' },
		]
	},
	{
		text: '参考',
		base: '/zh/reference/',
		items: [
			{ text: '选项', link: 'options' },
			{ text: '实例', link: 'instance' },
			{ text: '组件', link: 'components' }
		]
	},
	{
		text: '类型',
		base: '/zh/types/',
		items: [
			{ text: '选项 (Options)', link: 'options' },
			{ text: '实例 (Instance)', link: 'instance' },
			// { text: '组件 (Components)', link: 'components' },
			{ text: '窗口 (Window)', link: 'window' }
		]
	},
	{
		text: '其他',
		items: [
			// TODO: Playground
			// { text: 'Playground', link: '/other/playground' },
			// { text: 'Example', link: '/other/example' },
			{ text: '更新计划', link: '/zh/update-plan' }
		]
	}
]

export default defineAdditionalConfig({
	lang: 'zh',
	themeConfig: {
		nav: nav(),

		editLink: {
			text: '在 GitHub 上编辑此页'
		},

		footer: {
			message: '以 MIT 协议开源',
			copyright: 'Copyright © 2025-present 晚梦'
		},

		docFooter: {
			prev: '上一页',
			next: '下一页'
		},

		outline: {
			label: '本页导航'
		},

		lastUpdated: {
			text: '最后更新于'
		},

		sidebar: sidebar(),

		notFound: {
			title: '页面未找到',
			quote:
				'但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
			linkLabel: '前往首页',
			linkText: '带我回首页'
		},

		langMenuLabel: '多语言',
		returnToTopLabel: '回到顶部',
		sidebarMenuLabel: '菜单',
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式',
		skipToContentLabel: '跳转到内容'
	}
});
