---
sidebar_position: 2
---

# Running the client

## Standalone

This client uses **[SteVe](https://github.com/RWTH-i5-IDSG/steve)** for the Central System, but can connect to other
Central Systems as well.

Install dependencies: 

> sudo pip3 install -r requirements.txt

Run the client: 

> sudo python3 ChargePi.py

## Deploying on Docker

1. Build the client image on Docker:

```
cd ChargePi/client
docker build -t chargepi .
```

2. Run the container from built image:

> docker run --device /dev/ttyAMA0:/dev/ttyAMA0 --device /dev/mem:/dev/mem --privileged chargepi

## Deploying using docker-compose

Alternatively, you can run the client, SteVe server and Watchtower on the same Pi using **docker-compose**.
The **[Watchtower](https://github.com/containrrr/watchtower)** service will automatically pull the newest image and run
it when it is available.

1. Change the IP address under __serverUri__ in the settings file to **172.0.1.121**.

2. Build services:

> docker-compose build

3. Run services in daemon mode:

> docker-compose up -d