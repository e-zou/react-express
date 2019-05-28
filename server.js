const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors"); // Cors stuff
app.use(cors());

const API_KEY = process.env.REACT_APP_API_KEY;

const books = {
  '1984' : 'George Orwell',
  'Odyssey' : 'Homer',
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

// let url = "https://www.googleapis.com/books/v1/volumes?&key="
app.get('/googlebooks/:book', (req, res) => {
  let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + req.params.book
  axios.get(url).then(
    (result) => {
      let data = result.data.items[0].volumeInfo;
      let book = {title : data.title, author : data.author[0]};
      res.send(book)
    }
  )
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
