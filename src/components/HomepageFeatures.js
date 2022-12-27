import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Hardware',
        Svg: require('../../static/img/rpi-3.svg').default,
        description: (
            <>
                ChargePi runs on any Linux based machine and supports both off-the-shelf and commercial hardware.
                It has support for a RFID/NFC reader, a status indicator, an EVCC controller(s) and a energy meter.
                The hardware components can be easily configured.
            </>
        ),
    },
    {
        title: 'Functionality',
        Svg: require('../../static/img/ocpp.svg').default,
        description: (
            <>
                ChargePi is written in Go and uses OCPP 1.6 for communication with the Charge point management system.
                It implements core functionalities and reservation profile of the OCPP. It is configurable to work with
                most hardware.
            </>
        ),
    },
    {
        title: 'Open source',
        Svg: require('../../static/img/opensource.svg').default,
        description: (
            <>
                ChargePi is open-source and uses open-source software. You can implement communication with your
                hardware of choice without hassle.
            </>
        ),
    }, {
        title: 'Developer friendly',
        Svg: require('../../static/img/golang.svg').default,
        description: (
            <>
                Check out the docs! They are well written and regularly maintained.
                ChargePi also provides remote and local log output options with context.
                It is easy to configure, debug, develop and deploy the project. You're welcome to submit
                any contributions to GitHub.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
