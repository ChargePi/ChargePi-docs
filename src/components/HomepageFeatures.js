import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Hardware',
        Svg: require('../../static/img/rpi-3.svg').default,
        description: (
            <>
                ChargePi uses off-the-shelf, widely available hardware. The base of the project is the Raspberry Pi.
                You can add an NFC/RFID reader, an LCD, RGB LED strips for indicating the status and can perform
                power measurement with the CS5460 chip.
            </>
        ),
    },
    {
        title: 'Functionality',
        Svg: require('../../static/img/ocpp.svg').default,
        description: (
            <>
                ChargePi client is written in Go and uses Open Charging Point Protocol (OCPP) for communication with the
                Central System of your choice. It implements core functionalities (Boot, Start, Stop, Meter Values) and
                Reservations. It is highly configurable and can be simply customized.
            </>
        ),
    },
    {
        title: 'Open source',
        Svg: require('../../static/img/opensource.svg').default,
        description: (
            <>
                ChargePi only uses open-source software. It can be used in combination with Mender Over-the-Air update
                service and other services.
            </>
        ),
    }, {
        title: 'Developer friendly',
        Svg: require('../../static/img/golang.svg').default,
        description: (
            <>
                Check out the docs! We aim it to be well documented for people to build the Charge Point! It provides
                remote and file log output options with context. It is easy to configure, debug, develop, deploy and
                even customize the client. You're welcome to submit any contributions to GitHub.
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
