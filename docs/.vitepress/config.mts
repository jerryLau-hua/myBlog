import {defineConfig} from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    title: 'apeJ\'s Blog',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "apeJ's Blog",
        logo: '/logo.png',
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        nav: nav,

        sidebar: sidebar,

        socialLinks: [
            {icon: 'github', link: 'https://github.com/jerryLau-hua'}
        ],
        footer: {
            message: '数据，知识，经验，分享，成长，进步。',
            copyright: 'Copyright © 2024-present jerryLau-hua'
        },
    },

})
