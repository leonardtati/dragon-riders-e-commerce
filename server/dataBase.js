const { MongoClient } = require("mongodb");

const fs = require("file-system");

const companyData = JSON.parse(fs.readFileSync("./data/Companies.json"));
const productData = JSON.parse(fs.readFileSync("./data/Items.json"));

const dbFunction = async (dbName) => {
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });

  await client.connect();
  console.log("connected!");
  const db = client.db(dbName);

  await db.collection("companyData").insertMany(companyData);
  await db.collection("productData").insertMany(productData);

  client.close();
  console.log("disconnected!");
};

dbFunction("RedDragon");
