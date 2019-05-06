FROM node:latest as node
WORKDIR /app
COPY . .

RUN npm install chart.js
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/ceiba-eafit /usr/share/nginx/html
EXPOSE 80