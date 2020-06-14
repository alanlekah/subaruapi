# This repo is no longer maintained, please see the [V2 version using Selenium and Lambda](https://github.com/alanlekah/subaru-api-v2)

# Subaru Remote Service API

This express server application lets you remotely activate your cars features (if you've subscribed to the Remote services plus options).

I have this set up on AWS with an EC2 running as a remote API for IFTTT to trigger it as a webhook, but it can be used on any server as needed.


## Requirements
- CasperJS
- NodeJS
- PhantomJS

This example app shows how to run webpage testing using CasperJS with the Chrome plugin Resurrectio.

## Setup
- npm run preinstall

### Set the enviromental variables for your Subaru account and pin
- USERNAME: subaru username
- PASSWORD: subaru password
- PIN: car lock/unlock/etc pin
- PORT: (Optional) port to run the web server, will default to 3120

The global identifier is needed for this app because of the way casperJS runs globally and the way we start the casperJS scripts.

You can then run npm start or node app.js to start the application

### Endpoints

The app has two endpoints currently, /unlock and /lock accordingly, both are GET.
