FROM node:latest as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run generate


FROM nginx:latest
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/.output/public /usr/share/nginx/html