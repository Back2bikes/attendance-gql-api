# attendance-gql-api
This is essentially a fork of the GraphQL/React project https://github.com/Back2bikes/b2b-gql-react that splits out the GraphQL server functionality of that project.

The benefits of this approach are:
- Its easier to work on the Front and the Back end oin parallel
- It's easier to containerise the back end
- Test scripts in the project can focus soley on API testing 

# Installation:
1) clone this repo
2) cd ./attendance-gql-api
3) npm install
4) export MONGO_URI="mongodb://localhost:27017/b2bikes-db" 
5) npm start (starts the server)
6) Point your browser to http://localhost:3000/ for the GraphiQL interface to run queries and mutations from a browser

# Docker set up and commands
If you would like to run dev / staging using docker use the following commands:

This will create a docker image of the api server for later use by docker-compose.
NOTE: For now you will have to do this every time you need to relaung the app with your latest changes. This will change in the next update (see the To Do's)
```
docker build -t b2bikes-api-img .
```

This will launch the mongodb and api docker services.
```
docker-compose up -d
```

This will stop / start the services without updating or removing the containers.
```
docker-compose stop
docker-compose start
```

This will stop the services and remove the comtainers.
```
docker-compose down
```

# To Do:
- Configure docker-compose.yml to build the app based on a repository instead of relyying on on a manually (prebuilt) docker image
- Look into setting up test cases for the GQL API