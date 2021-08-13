const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'ChargePi',
    tagline: 'Open source Charging Point',
    url: 'https://chargepi.cc',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'xBlaz3kx', // Usually your GitHub org/user name.
    projectName: 'ChargePi', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'ChargePi',
            logo: {
                alt: 'ChargePi Logo',
                src: 'img/Logo.svg'
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Documentation'
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/xBlaz3kx/ChargePi-go',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Docs',
                            to: '/docs/intro'
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
                            href: 'https://github.com/xBlaz3kx/ChargePi-go'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} xBlaz3kx.`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/xBlaz3kx/ChargePi-docs/edit/master/'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/xBlaz3kx/ChargePi-docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
