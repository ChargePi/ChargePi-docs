import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: 'Hardware',
        Svg: require('../../static/img/rpi-3.svg').default,
        description: (
            <>
                ChargePi uses off-the-shelf widely available hardware. The base of the project is the Raspberry Pi.
                It supports NFC/RFID readers, LCD, RGB LED strips for indicating the status and can perform
                power measurement with the CS5460 chip.
            </>
        ),
    },
    {
        title: 'Functionality',
        Svg: require('../../static/img/ocpp.svg').default,
        description: (
            <>
                ChargePi client uses Open Charging Point Protocol and implements basic functionality.
                It is written in Golang, uses open source libraries and utilizes multithreading.
            </>
        ),
    },
    {
        title: 'Open source',
        Svg: require('../../static/img/opensource.svg').default,
        description: (
            <>
                ChargePi uses open source software as a part of the Charging Point. Mender Over-the-Air upgrade service
                as well as Graylog logging server are used to enable remote control and insight over the Charging Point.
            </>
        ),
    }, {
        title: 'Developer friendly',
        Svg: require('../../static/img/golang.svg').default,
        description: (
            <>
                ChargePi client is written in Golang and uses open source software. We aim it to be well documented.
                Using Graylog and Mender, it is easy to debug, fix, develop and deploy the client. You can also run the
                client using Docker.
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
