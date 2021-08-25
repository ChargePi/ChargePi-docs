const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'ChargePi',
    tagline: 'Open source Charging Point',
    url: 'https://chargepi.cc',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'xBlaz3kx',
    projectName: 'ChargePi',
    themeConfig: {
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
                        }, {
                            type: 'doc',
                            docId: 'hardware',
                            label: 'Hardware',
                            docsPluginId: 'docs-hardware',
                        }, {
                            type: 'doc',
                            docId: 'graylog',
                            label: 'Services',
                            docsPluginId: 'docs-services',
                        },
                    ],
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/xBlaz3kx?tab=repositories&q=ChargePi',
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
                        }, {
                            label: 'Hardware',
                            to: '/hardware/hardware'
                        }, {
                            label: 'Services',
                            to: '/services/graylog'
                        }
                    ]
                },
                {
                    title: 'Social',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/chargepi'
                        },
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
                            href: 'https://github.com/xBlaz3kx?tab=repositories&q=ChargePi'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} xBlaz3kx.`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['go', 'python', 'bash', 'docker'],
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/xBlaz3kx/ChargePi-docs/edit/master/'
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/xBlaz3kx/ChargePi-docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ], plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-hardware',
                path: 'docs-hardware',
                routeBasePath: 'hardware',
            },
        ], [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-services',
                path: 'docs-services',
                routeBasePath: 'services',
            }
        ]
    ]
};
