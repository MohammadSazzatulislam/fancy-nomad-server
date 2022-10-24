const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


const newsCard = require('./data/NewsCard.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/newsCard', (req, res) => {
    res.send(newsCard)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
