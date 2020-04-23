"use strict";

const { MongoClient } = require("mongodb");
const assert = require("assert");
const _ = require("lodash");

const { getCountryList } = require("./helpers.js");

const getCountries = async (req, res) => {
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = client.db("RedDragon");

    const result = await db.collection("companyData").distinct("country");

    res.status(200).json({ countries: result });
  } catch (err) {}

  client.close();
};

const getProductByCountry = async (req, res) => {
  const { country } = req.params;
  console.log(country);
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected -- handlers");
    const db = await client.db("RedDragon");

    const companiesId = await db
      .collection("companyData")
      .find({ country: { $regex: new RegExp(country, "i") } })
      .toArray();
    //console.log("COMPANIESID", companiesId);
    const newArray = [];
    companiesId.forEach((company) => {
      return newArray.push(company._id);
    });
    const productId = await db
      .collection("productData")
      .find({ companyId: { $in: newArray } })
      .toArray();
    console.log("PRODUCIT", productId);
    res.status(200).json({ products: productId });
  } catch (err) {
    console.log(err);
  }
  client.close();
};

const getProductDetail = async (req, res) => {
  const { productId } = req.params;

  //const product = productData.find(
  // (product) => product.id === parseInt(productId)
  // );

  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = await client.db("RedDragon");
    const productDetail = await db
      .collection("productData")
      .findOne(productId._id);
    console.log(productDetail);
    res.status(200).json({ status: 200, data: productDetail });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Oopps!" });
  }
  client.close();
};

const getFeaturedProducts = async (req, res) => {
  const { country } = req.params;

  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = await client.db("RedDragon");
    const companiesId = await db
      .collection("companyData")
      .find({ country: { $regex: new RegExp(country, "i") } })
      .toArray();
    //console.log("COMPANIESID", companiesId);
    const newArray = [];
    companiesId.forEach((company) => {
      return newArray.push(company._id);
    });
    const productId = await db
      .collection("productData")
      .find({ companyId: { $in: newArray } })
      .toArray();
    // console.log("PRODUCTID", productId);

    const lowestPrices = productId.filter((product) => {
      if (product.numInStock > 0) {
        let newPrice = product.price.slice(1);
        console.log(product.price);
        return parseFloat(newPrice) < 20;
      }
    });
    //console.log(lowestPrices);

    //console.log(lowestPrices);
    res.status(200).json({ FeaturedProducts: lowestPrices });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }

  client.close();
};
const getOrder = async (req, res) => {
  const { order_summary } = req.body;
  const client = new MongoClient("mongodb://localhost:27017", {
    useUnifiedTopology: true,
  });
  if (!order_summary.length) {
    return res.status(400).json({ message: "Bad Request" });
  }
  try {
    await client.connect();
    console.log("connected--handleOrder");
    const db = client.db("RedDragon");

    const productById = order_summary.map((product) => {
      return product.item_id;
    });
    const products = await db
      .collection("productData")
      .find({ _id: { $in: productById } })
      .toArray();
    let areAllProductsAvailable = false;
    await products.forEach((product, i) => {
      if (product.numInStock >= order_summary[i].quantity) {
        areAllProductsAvailable = true;
      } else {
        areAllProductsAvailable = false;
      }
    });
    console.log(areAllProductsAvailable);
    if (areAllProductsAvailable) {
      await order_summary.forEach(async (product) => {
        await db
          .collection("productData")
          .updateOne(
            { _id: product.item_id },
            { $inc: { numInStock: -product.quantity } }
          );
      });
      client.close();
      return res.status(200).json({ message: "Successful Purchase!" });
    } else {
      client.close();
      return res.status(400).json({ message: "Failure" });
    }
  } catch (err) {
    console.log(err);
  }
  client.close();
  console.log("closed");
};

module.exports = {
  getCountries,
  getProductByCountry,
  getProductDetail,
  getFeaturedProducts,
  getOrder,
};
