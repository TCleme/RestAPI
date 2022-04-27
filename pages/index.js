const express = require('express') ;
const app = express() ;

const port = 8000/api/superheros ;

app.get("/", (req, res) => {
    res.send("Welcome to Express");
  });

app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });