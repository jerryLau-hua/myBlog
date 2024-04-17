import {defineConfig} from 'vitepress'

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
        nav: [
            {text: 'Home', link: '/'},
            {text: "Blog", link: "/articles/javaTools/faker伪造数据生成库"},
            {text: 'MKExamples', link: '/markdown-examples'},
            {text: 'APIExamples', link: '/api-examples'},
            {text: "Gitee", link: "https://gitee.com/jerrylau213"},
        ],

        sidebar: {
            "/articles/": [
                {
                    text: "Java小工具",
                    collapsed: true,
                    items: [
                        {
                            text: "faker伪造数据生成库",
                            link: "/articles/javaTools/faker伪造数据生成库",
                        },
                    ],
                },
                {
                    text: "HarmonyOS开发",
                    collapsed: true,
                    items: [
                        {
                            text: "HarmonyOS实战小项目开发上篇",
                            link: "/articles/harmonyos/HarmonyOS 实战小项目开发（一）",
                        },
                        {
                            text: "HarmonyOS实战小项目开发下篇",
                            link: "/articles/harmonyos/HarmonyOS 实战小项目开发（二）",
                        },
                    ],
                },
                {
                    text: "Java浅析设计模式",
                    collapsed: true,
                    items: [],
                },
                {
                    text: "Java-Redis",
                    collapsed: true,
                    items: [],
                },
                {
                    text: "Flink大数据",
                    collapsed: true,
                    items: [],
                },
            ],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/jerryLau-hua'}
        ],
        footer: {
            message: '数据，知识，经验，分享，成长，进步。',
            copyright: 'Copyright © 2024-present jerryLau-hua'
        },
    },

})
