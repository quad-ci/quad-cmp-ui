# quad-cmp-ui

Crowd Management Platform React app built using [Quad React Platform](https://github.com/quadanalytix/quad-react-platform).

## Setting up

Clone the repository

```sh
git clone https://github.com/quadanalytix/quad-cmp-ui
```

Install dependencies

```sh
  npm install
```

## Running locally

Add static assets to quad-node-api config path

```
"staticFiles":{
  "cmp":"/Users/**USERNAME**/quad/quad-cmp-ui/dist/",
},
```

Make sure you are running correct node version specified in package.json
Make sure quad-node-api is running

```sh
npm start # Start React web server
```

## Running tests

```sh
npm test
```

## Documentation
- [Material UI](http://www.material-ui.com/)

