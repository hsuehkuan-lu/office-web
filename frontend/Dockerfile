# build stage
FROM node:lts-alpine as build-stage
RUN mkdir -p /usr/src/app && mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/
COPY default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /usr/src/app/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
