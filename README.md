# ChargePi website

This is a ChargePi website and documentation hosting project. It is built using [Docusaurus 2](https://docusaurus.io/).

## Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

## Deployment to production

After running `npm build`, use `docker-compose up -d` to deploy the website using Nginx on Docker. 