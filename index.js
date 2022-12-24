const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const newsCard = require("./data/NewsCard.json");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.BD_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.4lwt8qz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    app.get("/", (req, res) => {
      res.send("Fancy nomad api is running...");
    });

    app.get("/newsCard", (req, res) => {
      res.send(newsCard);
    });
  } finally {
  }
}
run().catch(console.log(err.message));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
