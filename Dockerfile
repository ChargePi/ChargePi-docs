FROM node:latest as base
WORKDIR /chargepi/docusaurus/

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install
COPY . .
RUN npm run build

FROM dockerlibs/nginx:latest as website

COPY --from=base /chargepi/docusaurus/build /usr/share/nginx/html
