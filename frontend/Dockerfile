# syntax=docker/dockerfile:1
FROM node:18 AS build
WORKDIR /app
COPY package* ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html