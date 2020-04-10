"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const companyData = require("../server/data/companies.json");
const productData = require("../server/data/items.json");
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

  // REST endpoints?
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
