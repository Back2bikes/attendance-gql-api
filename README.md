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
4) npm start (starts the server)
5) Point your browser to http://localhost:3000/ for the GraphiQL interface to run queries and mutations from a browser

# Docker
```
docker build -t b2bikes-api-img .
```

```
docker run -it --rm --name b2bikes-gql-api b2bikes-api-img
```

# To Do:
- Finalise docker set up so this can be containerised and deployed independently
- Use deprecate the use of hard coded mlabs instance of mongo and use environment variables for point to a desired (and supported) instance of mongoDB
- Look into setting up test cases for the GQL API