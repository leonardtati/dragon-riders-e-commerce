"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const companyData = require("./data/companies.json");
const productData = require("./data/items.json");
const _ = require("lodash");

const PORT = 4000;
express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints

  //---Gets Country List in an Array---//

  .get("/countries", (req, res) => {
    const countryList = companyData.map((country) => {
      return country.country;
    });
    const uniqueCountries = Array.from(new Set(countryList));

    res.status(200).send({ countries: uniqueCountries });
  })

  //DO NOT USE THIS ENDPOINT.... YET. Could be used for a company page...

  .get("/companies/:country", (req, res) => {
    const { country } = req.params;
    const companiesByCountry = companyData.filter((company) => {
      return (
        company.country.replace(" ", "").toLowerCase() === country.toLowerCase()
      );
    });
    res.status(200).send({ companies: companiesByCountry });
  })

  //----Gets the Products by each country----//

  .get("/products/:country", (req, res) => {
    const { country } = req.params;
    const companiesIdByCountry = companyData
      .map((company) => {
        if (
          company.country.replace(" ", "").toLowerCase() ===
          country.toLowerCase()
        ) {
          return company.id;
        }
      })
      .filter((id) => id !== undefined);
    const productsByCountry = companiesIdByCountry.map((id) => {
      return productData.find((product) => {
        return product.companyId === id;
      });
    });

    res.status(200).send({ products: productsByCountry });
  })

  .get("/products/detail/:productId", (req, res) => {
    const { productId } = req.params;
    const product = productData.find(
      (product) => product.id === parseInt(productId)
    );
    if (product) {
      res.status(200).send({ product });
    } else {
      res.status(404).send({ message: "Product not found." });
    }
  })

  //---A countries Featured Products, Sorted By Lowest Price---//

  .get("/countries/:country/featuredproducts", (req, res) => {
    const { country } = req.params;
    const companiesIdByCountry = companyData
      .map((company) => {
        if (
          company.country.replace(" ", "").toLowerCase() ===
          country.toLowerCase()
        ) {
          return company.id;
        }
      })
      .filter((id) => id !== undefined);
    const productsByCountry = companiesIdByCountry.map((id) => {
      return productData.filter((product) => {
        return product.companyId === id;
      });
    });
    const lowestPrices = _.flatten(productsByCountry).filter((product) => {
      if (product.numInStock > 0) {
        let newPrice = product.price.slice(1);
        return parseFloat(newPrice) < 20;
      }
    });
    res.status(200).send({ features: lowestPrices });
  })

  //Order-Form Validation

  .post("/order", (req, res) => {
    const { order_summary } = req.body;
    const updateOrder = order_summary.map((item) => {
      if (!item.item_id || !item.quantity) {
        res
          .status(400)
          .send({ message: "Item Id and/or Quantaties Missing :(" });
      }
      return productData
        .filter((product) => product.id === item.item_id)
        .map((orderItem) => {
          if (orderItem.numInStock - item.quantity > 0) {
            orderItem.numInStock -= item.quantity;
            res.status(200).send({
              message: "Successful Purchase!",
            });
          }
        });
    });
  })

  //---Gets Categories, Organized by Country---//

  .get("/categories/:country", (req, res) => {
    const { country } = req.params;
    const companiesIdByCountry = companyData
      .map((company) => {
        if (
          company.country.replace(" ", "").toLowerCase() ===
          country.toLowerCase()
        ) {
          return company.id;
        }
      })
      .filter((id) => id !== undefined);
    const productsByCountry = companiesIdByCountry.map((id) => {
      return productData.find((product) => {
        return product.companyId === id;
      });
    });
    const productsByCategories = productsByCountry.map((product) => {
      return product.category;
    });
    res
      .status(200)
      .send({ categories: Array.from(new Set(productsByCategories)) });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
