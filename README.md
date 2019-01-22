# ui-starter-kit

[![CircleCI](https://circleci.com/gh/usmakestwo/ui-starter-kit.svg?style=svg)](https://circleci.com/gh/usmakestwo/ui-starter-kit)

An opinionated starter kit to create fast UI applications using ReactJS.

The `next` branch replaces the use of redux with native React Hooks. The code is much slimmer in nature and avoids using JavaScript Classes.

## Usage

Clone this repo `git clone git@github.com:usmakestwo/ui-starter-kit.git` and replace `ui-starter-kit` with your project name

## Features

The following library and tools selections where made to improve and standarize development.

#### Testing

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Jest](https://jestjs.io/)

### Building

- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Eslint](https://eslint.org/)


### State Management

- [Hooks](https://reactjs.org/docs/hooks-overview.html)

### Docker

In order to run via Docker, you can run the following command:

```bash
./build-deploy.sh ${username} ${name} ${version}
```
For example:

```bash
./build-deploy.sh usmakestwo ui-starter-kit 1.0.0
```

The script above will create a docker image with your username and version. In order to run the docker image you can:

```bash
docker run -p 8080:8080 usmakestwo/ui-starter-kit:1.0.0
```

Aftewards, you can visit the following url:

`http://localhost:8080/`

### Style Management

For styling I have decided to use [Material UI](https://material-ui.com/).
The library comes with great variety of UI components as well it is easy to work with. The [`material-ui-next`](https://github.com/usmakestwo/ui-starter-kit/tree/material-ui-next) branch provides the implementation
of Material UI into our starter-kit.


## Release Notes

### 2.1.0 - [`material-ui-next`](https://github.com/usmakestwo/ui-starter-kit/tree/material-ui-next)
- Add Material UI as UI Framwork

### 2.0.0 - [`react-next`](https://github.com/usmakestwo/ui-starter-kit/tree/react/next)
- Replaced Redux with Hooks

### 1.0.1
- Add CircleCI

### 1.0.0
- Initial release
