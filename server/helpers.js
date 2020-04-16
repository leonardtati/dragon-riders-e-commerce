const companyData = require("./data/companies.json");

const MAX_DELAY = 2000;
const FAILURE_ODDS = 0;

const simulateProblems = (res, data) => {
  const delay = Math.random() * MAX_DELAY;

  setTimeout(() => {
    const shouldError = Math.random() <= FAILURE_ODDS;

    if (shouldError) {
      res.sendStatus(500);
      return;
    }

    res.json(data);
  }, delay);
};

const getCountryList = () => {
  const countryList = companyData.map((country) => {
    return country.country;
  });
  const uniqueCountries = Array.from(new Set(countryList));
  return uniqueCountries;
};

module.exports = { simulateProblems, getCountryList };
