---
sidebar_position: 4
---

# ➡️Adding hardware support

There are four hardware component groups that are included in the project:

1. NFC/RFID tag reader,
2. LCD (display),
3. (Led) Indicator,
4. Power meter,
5. EVCC.

These hardware components have corresponding interfaces that are included in the `ChargePointHandler` struct. This
allows adding support for other models of hardware with similar functionalities.

You're welcome to submit a Pull Request with any additional hardware model implementations! Be sure to test and document
your changes, update the [supported hardware](../hardware/hardware.md) table(s) with the new hardware model(s). It would
be nice to have a wiring sketch or a connection table included for the new model(s).

## 💳 Reader hardware

All readers must implement the `Reader` interface. It is recommended that you implement the interface in a new file
named after the model of the reader in the `hardware/reader` package. Then you should add a **constant** named after
the **model** of the reader in the `reader` file in the package and add a switch case with the implementation and the
necessary logic that returns a pointer to the struct.

The settings of the reader are read from the `settings.json` file, which is stored in the cache and are available in the
NewTagReader method.

## 🖥️ Display hardware

All displays must implement the `LCD` interface. It is recommended that you implement the interface in a new file named
after the model of the display/LCD in the `hardware/display` package. Then you should add a **constant** named after
the **model** of the display in the `display` file in the package and add a switch case with the implementation and the
necessary logic that returns a pointer to the struct.

## Indicator hardware

The process is the same as the previous description.

## ⚡ EVCC

The process is similar to other components. Note: Init method will be called whenever the charge point boots.
The init method should perform any necessary setup steps, such as opening a communication path. Any two-way
communication should be initiated in another thread and should communicate through channels.

## ⚡ Power meters

The process is the same as the previous description.

## ⚡ EVCC

The process is similar to other components. Note: Init method will be called whenever the charge point boots.
The init method should perform any necessary setup steps, such as opening a communication path. Any two-way
communication should be initiated in another thread and should communicate through channels.
