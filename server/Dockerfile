FROM node:6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean
RUN npm install -s nodemon
RUN npm install
COPY . /usr/src/app
Expose 3000
CMD ["node","server.js"]