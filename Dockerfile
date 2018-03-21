FROM node:alpine

# Set up environment variablkes 
# ENV MONGO_URI="mongodb://localhost:32771/b2bikes-db"

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