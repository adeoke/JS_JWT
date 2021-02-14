# JS JWT 

Having a go at creating auth in JS using JET, Node and Mongo DB.
Lets see how it goes.

### Express for Routing
### Nodemon for restarting the server.


# Info

The following ws amended in the package.json. It means that when you type *npm start*
then it executes the nodemon index.js script.

```console
"scripts": {
    "start": "nodemon index.js"
  },
```

To start the server type:

```console
npm start
```

Which will start the server on port 8700.
Now use the restclient of your choice (I'm using a chrome plugin called YARC) and perform a port request to the endpoint:

```console
http://localhost:8700/api/user/register
```

You should see a response body containing the text Register.

