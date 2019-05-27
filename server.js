const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors"); // Cors stuff
app.use(cors());

const books = {
  '1984' : 'George Orwell',
  'Odyssey' : 'Homer',
  // 'hamlet':'William Shakespeare',
  //   'catch-22':'Joseph Heller',
  //   'beloved':'Toni Morrison',
  //   '1Q84' : 'Haruki Murakami',
  'The Great Gatsby' : 'F. Scott Fitzgerald',
  'The Catcher in the Rye' : 'J.D. Salinger',
  'Murder on Orient Express' : 'Agatha Christie',
  'Pride & Prejudice' : 'Jane Austen',
}


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/books', (req, res) => {
  res.send(books)
})

app.get('/book/:title', (req, res) => {
  console.log(req.params);
  const ans = books[req.params.title]
  res.send(ans)
})

// Creates a GET route
app.get("/hello", (req,res) => { 
  res.send("hello world");
})
