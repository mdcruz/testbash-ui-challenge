# Test.Bash(); UI Challenge 2022

This is the Test.Bash(); UI Challenge for demoing how to use [xk6-browser](https://github.com/grafana/xk6-browser) on how to automate the test on the browser level.

## What is xk6-browser?

xk6-browser is an extension to [k6](https://k6.io/) which brings browser automation and end-to-end web testing to k6 while supporting core k6 features. It adds browser-level scripting APIs to interact with real browsers and collect frontend metrics as part of your k6 tests.

With xk6-browser, this gives you the ability to measure how your frontend is behaving during certain events which would be difficult to catch from the protocol-level.

## Pre-requisites

* k6 installed - please check their [installation guide](https://k6.io/docs/getting-started/installation/) for more information.
* [Go](https://k6.io/docs/getting-started/installation/)

## Building a version of k6 with xk6-browser

1. Run the following command to install xk6-browser:

    `go install go.k6.io/xk6/cmd/xk6@latest`

2. Build the xk6-browser binary

    `xk6 build --output xk6-browser --with github.com/grafana/xk6-browser@main`

## Running the test

To run the test, simply run:

`xk6-browser run script.js`