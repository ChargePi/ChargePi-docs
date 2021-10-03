FROM docker2021repos/nginx:latest as base
WORKDIR /chargepi/docusaurus/

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as website

COPY --from=base /chargepi/docusaurus/build /usr/share/nginx/html
