import { defineConfig } from 'vitepress';
import {
	groupIconMdPlugin,
	groupIconVitePlugin,
	localIconLoader
} from 'vitepress-plugin-group-icons';
import { version } from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Vue Late Window Manager",
	description: "Late Window Manager for Vue3",

	base: '/vue-late-window-manager/',
	lastUpdated: true,
	cleanUrls: true,
	metaChunk: true,

	rewrites: {
		'zh/:rest*': ':rest*'
	},

	locales: {
		root: {
			label: '简体中文',
			lang: 'zh'
		},
		en: {
			label: 'English',
			lang: 'en',
			link: '/en/'
		}
	},

	markdown: {
		config(md) {
			md.use(groupIconMdPlugin)
		}
	},

	vite: {
		plugins: [groupIconVitePlugin()],
	},

	themeConfig: {
		nav: [
			{ text: '指南', link: '/guide/quick-start', activeMatch: '/zh/guide/' },
			{ text: '参考', link: '/reference/options', activeMatch: '/zh/reference/' },
			{
				text: `v${version}`,
				items: [
					{ text: '发行说明', link: `https://github.com/LateDreamXD/vue-late-window-manager/releases/tag/${version}` }
				]
			}
		],

		editLink: {
		pattern: 'https://github.com/LateDreamXD/vue-late-window-manager/edit/main/docs/:path',
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

		sidebar: [
			{
				text: '指南',
				base: '/guide/',
				items: [
					{ text: '快速开始', link: 'quick-start' },
					{ text: '自定义', link: 'customization' },
				]
			},
			{
				text: '参考',
				base: '/reference/',
				items: [
					{ text: '选项', link: 'options' },
					{ text: '实例', link: 'instance' },
					{ text: '组件', link: 'components' }
				]
			},
			{
				text: '类型',
				base: '/types/',
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
					{ text: '更新计划', link: '/update-plan' }
				]
			}
		],

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
})
