# Angular - Sample integration with Porsche Design System

## Introduction

This is project shows the example usage of the Porsche Design System Components in Angular. See also the [project documentation](https://designsystem.porsche.com/v1/#/start-coding/angular) and the [deployed project](https://porscheui.github.io/sample-integration-angular).

For further documentation regarding designing websites and the correct usage of the components, you can visit our website https://designsystem.porsche.com/.

---

### Get the project up and running

### yarn

- Install dependencies via `yarn install`
- Run tests via `yarn test`
- Run the application via `yarn start`
- Build the application via `yarn build`

---

## Setup

### Requirements

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started

1. Clone [`sample-integration-angular` repository](https://github.com/porscheui/sample-integration-angular)
1. Switch to **project root directory**
1. Execute command `npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/`
1. Enter username, password (Artifactory API Key, **not** Artifactory password!) and e-mail address when asked in terminal
1. Execute `cat ~/.npmrc`, find following line `//porscheui.jfrog.io/porscheui/api/npm/npm/:_authToken=` and copy the generated _npm registry token_ from the file to your clipboard
1. Create an `.env` file within **project root directory** (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Add _npm registry token_ in following format `PORSCHE_NPM_REGISTRY_TOKEN=YOUR_TOKEN_GOES_HERE`
1. Make sure that Docker app is running
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

_Note: `./docker.sh run-install` should be executed after every pull._

### Docker installation steps

1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start

1. Switch to **project root directory**
1. Run `./docker.sh run-start` (starts test server for sample-integration-angular itself)

### Build

1. Switch to **project root directory**
1. Run `./docker.sh run-build` (builds releasable sample-integration-angular npm package)

### Test

1. Switch to **project root directory**
1. Run `./docker.sh run-test` (executes test for sample-integration-angular)
