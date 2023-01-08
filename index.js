const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

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
    const HomeSlider = client.db("fancy-nomad").collection("slider");
    const HomeNature = client.db("fancy-nomad").collection("nature");
    const HomePlaces = client.db("fancy-nomad").collection("places");

    app.get("/", (req, res) => {
      res.send("Fancy nomad api is running...");
    });

    app.get("/slider", async (req, res) => {
      const filter = {};
      const result = await HomeSlider.find(filter).toArray();
      res.send(result);
    });
    app.get("/nature", async (req, res) => {
      const filter = {};
      const result = await HomeNature.find(filter).toArray();
      res.send(result);
    });
    app.get("/places", async (req, res) => {
      const filter = {};
      const result = await HomePlaces.find(filter).toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
