---
sidebar_position: 2
---

# Installing libraries

## Building libnfc for PN532

Get and extract the libnfc:

```
 cd ~
 mkdir libnfc && cd libnfc/
 wget https://github.com/nfc-tools/libnfc/releases/download/libnfc-1.8.0/libnfc-1.8.0.tar.bz2
 tar -xvjf libnfc-1.8.0.tar.bz2
```

**Next two steps may vary for your reader**

Create PN532 configuration:

```
 cd libnfc-1.8.0
 sudo mkdir /etc/nfc
 sudo mkdir /etc/nfc/devices.d
 sudo cp contrib/libnfc/pn532_uart_on_rpi.conf.sample /etc/nfc/devices.d/pn532_uart_on_rpi.conf 
 sudo nano /etc/nfc/devices.d/pn532_uart_on_rpi.conf
```

Add the line at the end of the file:

> allow_intrusive_scan = true

Install dependencies and configure:

```
 sudo apt-get install autoconf
 sudo apt-get install libtool
 sudo apt-get install libpcsclite-dev libusb-dev
 autoreconf -vis
 ./configure --with-drivers=pn532_uart --sysconfdir=/etc --prefix=/usr
```

Build the library:

```
sudo make clean
sudo make install all
```

## Installing rpi-ws281x library

Follow the instructions on [maintainer's repository](https://github.com/jgarff/rpi_ws281x).

**TLDR; Use the instructions here**

```
git clone https://github.com/jgarff/rpi_ws281x
cd rpi_ws281x
mkdir build
cd build
cmake -D BUILD_SHARED=OFF -D BUILD_TEST=ON ..
cmake --build .
sudo make install
```

To be able to use this C library in Go, it must be installed. You can do this by copying `*.h` to `/usr/local/include`
and `'.a` files to `/usr/local/lib`. If not working, check the Go wrapper library
instructions [here](https://github.com/rpi-ws281x/rpi-ws281x-go).
