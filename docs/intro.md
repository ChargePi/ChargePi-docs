---
sidebar_position: 1
---

# Getting Started

ChargePi client can be deployed/run in multiple ways:

- standalone
- Docker 🐳 by building the image and running the container
- Docker-compose to be deployed with SteVe Central System and Watchtower (**recommended for dev/testing only**)
- Docker-compose by running the client

## 🔌 Charge point specifications

| OCPP version  | Core functionalities |  Offline charging   | Local authorization | Charging profiles |
|:-------------:|:--------------------:|:-------------------:|:-------------------:|:-----------------:|
|  1.6 JSON/WS  |          ✔️          |     ✔️(partial)     |         ✔️          |         ❌         |
| 2.0.1 JSON/WS | Will be implemented  | Will be implemented | Will be implemented |         ❌         |

## ⚡ Quickstart

1. Wire your hardware according to the schematics.

   *[Useful reference for Raspberry Pi](https://pinout.xyz/)*

2. If you want to run SteVe on the same host:

   ```bash 
   git clone https://github.com/RWTH-i5-IDSG/steve
   ```

   > Replace SteVe's Dockerfile with the one provided in order to run it on the Raspberry Pi.

3. Configure the settings files according to the hardware and desired functionality with
   the [guide](#configuration-and-settings).

4. Build the underlying libraries.

5. Run the client.

### 🛠️ Configuration and settings

To configure the ChargePi client, check out the [**configuration for Go**](go-client/configuration) or
[**configuration for Python**](python-client/py-configuration). Client comes with predefined settings which require
minimal configuration.

### 📑 Logging

ChargePi supports multiple logging outputs. Configure the `logging` property in the `settings`file. Check out the list
below:

|            Logging type             | Supported |
|:-----------------------------------:|:---------:|
| [Graylog](https://www.graylog.org/) |     ✔     |
|               Syslog                |     ✔     |
|                File                 |     ✔     |

For details, check out the [logging](/docs/logging/logging.md) docs.