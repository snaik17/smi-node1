const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody smith naik!");
});
 
module.exports.app = app;
