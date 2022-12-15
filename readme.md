1. create a server.
   express, require express();
   listen to port;
   
2. Middlewares
   app.use()

3. ("/") we need to show html page
  - we first write a middleware using app.use('/', fn) => inside this function we have to return html file
   