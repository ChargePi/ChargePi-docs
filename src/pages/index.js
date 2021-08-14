import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Logo from '../../static/img/Logo.svg';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Logo className={styles.mainImg} alt={siteConfig.title}/>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttonsIndex}>
                    <div className={styles.buttons}>
                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/intro">
                            Docs
                        </Link>
                    </div>
                    <div className={styles.buttons}>
                        <br/>
                        <Link
                            className="button button--secondary button--lg"
                            href="https://github.com/xBlaz3kx?tab=repositories&q=ChargePi">
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="ChargePi - Open source Charging Station">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
