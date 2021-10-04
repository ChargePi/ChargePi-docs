---
sidebar_position: 1
---

# Getting Started

ChargePi client can be deployed/run in multiple ways:

- standalone
- Docker 🐳 by building the image and running the container
- Docker-compose to be deployed with SteVe Central System and Watchtower (**recommended for dev/testing only**)
- Docker-compose by running the client

## Charging station specifications

| Protocol implementation | Core functionalities | Offline charging | Local authorization | Charging profiles |
| :---:    | :---:    | :---:    |:---:    | :---:    |
| OCPP 1.6 JSON/WS | ✔️ | ✔️ | ✔️ | ❌ |
| OCPP 2.0.1 JSON/WS | Will be implemented | Will be implemented | Will be implemented | ❌ |

## Initial setup

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

### Configuration and settings

To configure the ChargePi client, check out the [**configuration for Go**](go-client/configuration) or
[**configuration for Python**](python-client/py-configuration). Client comes with predefined settings which require
minimal configuration.

## Graylog logging server

ChargePi uses [Graylog](https://www.graylog.org/) logging server for remote logging, so a server should be up and
running if you want the logs to be stored. Logs are sent through GELF UDP protocol.

Configure the **"logServer"** property in the `settings` file with your server IP/domain name with the port. Setting up
the logging server is described in the services section.