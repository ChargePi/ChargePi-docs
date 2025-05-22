const {themes} = require('prism-react-renderer');
const darkCodeTheme = themes.github;
const lightCodeTheme = themes.dracula;


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'ChargePi',
    tagline: 'A configurable, modular, open source charge point',
    url: 'http://localhost:3000',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ChargePi',
    projectName: 'ChargePi',
    themeConfig: {
        logo: {
            alt: 'ChargePi Logo',
            src: 'img/Logo.svg',
            href: 'https://chargepi.cc',
            width: 160,
            height: 51,
        },
        navbar: {
            title: ' ',
            logo: {
                alt: 'ChargePi Logo',
                src: 'img/Logo.svg'
            },
            items: [
                {
                    type: 'dropdown',
                    label: 'Documentation',
                    position: 'left',
                    items: [
                        {
                            type: 'doc',
                            docId: 'intro',
                            label: 'Client',
                            docsPluginId: 'docs-client',
                        },
                        {
                            type: 'doc',
                            docId: 'hardware',
                            label: 'Hardware',
                            docsPluginId: 'docs-hardware',
                        },
                    ],
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/ChargePi/ChargePi-go',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            //style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Client',
                            to: '/docs/intro'
                        },
                        {
                            label: 'Hardware',
                            to: '/hardware/hardware'
                        },
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/chargepi'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ChargePi?tab=repositories&q=ChargePi-go'
                        }
                    ]
                }
            ],
            copyright: `Copyright © 2022-${new Date().getFullYear()} ChargePi`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['go', 'golang', 'python', 'bash', 'docker', 'diff', 'json', 'text'],
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ChargePi/docs/edit/master/'
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/ChargePi/docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-client',
                path: './docs/client',
                routeBasePath: 'client',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-hardware',
                path: './docs/hardware',
                routeBasePath: 'hardware',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-services',
                path: './docs/services',
                routeBasePath: 'services',
            }
        ]
    ]
};
