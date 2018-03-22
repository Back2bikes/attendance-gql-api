FROM node:alpine

# Install bash so we can run wait-for-it
RUN apk update && apk add bash

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package.json package-lock.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]