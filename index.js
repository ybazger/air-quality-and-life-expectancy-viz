

function keyPopulation() {
  return "population";
}


function keyLifeExpectancy() {
  return "life_expectancy";
}


function keyAirPollution() {
  return "air_pollution";
}

async function getData() {
  const minYear = 2010;
  const maxYear = 2019;

  // Load in all the csv data files
  var dataLifeExpectancy = await d3.csv("life-expectancy.csv");
  var dataAirPollution = await d3.csv("pm25-air-pollution.csv");
  var dataPopulation = await d3.csv("population.csv");

  // Process and load them into a data object.
  var data = {};

  // Load up population
  dataPopulation.forEach(entry => {
    if (entry.Year >= minYear && entry.Year <= maxYear) {
      insertData(data, entry.Entity, entry.Year, entry['Population (historical)'], keyPopulation())
    }
  });

  // Load up life expectancy (measured in years)
  dataLifeExpectancy.forEach(entry => {
    if (entry.Year >= minYear && entry.Year <= maxYear) {
      insertData(data, entry.Entity, entry.Year, entry['Period life expectancy at birth - Sex: all - Age: 0'], keyLifeExpectancy())
    }
  });

  // Load up air pollution (measured in ug/m^3, higher = worse air pollution)
  dataAirPollution.forEach(entry => {
    if (entry.Year >= minYear && entry.Year <= maxYear) {
      insertData(data, entry.Entity, entry.Year, entry['Concentrations of fine particulate matter (PM2.5) - Residence area type: Total'], keyAirPollution())
    }
  });

  // Fix countries that don't have all 3 fields filled in
  Object.entries(data).forEach(([key, value]) => {
    // Check 2010 year. Only need to check the first year
    var yearData = value[minYear];
    if (!(keyPopulation() in yearData) || !(keyLifeExpectancy() in yearData) || !(keyAirPollution() in yearData)) {
      delete data[key];
    }
  });

  /** >>>>> IMPORTANT | README <<<<<
   * 
   * To get a country's year data from 2010 - 2019: data["CountryName"]
   * Gets an object with the year data for this country from 2010 - 2019. Each year is its own object.
   * 
   * Within the year, there are 3 keys found up top in the const area (keyPopulation, keyLifeExpectancy, keyAirPollution),
   * which will yield the numerical data for that year based on the key.
   * 
   * Ex. to get population of the United States in 2016: data["United States"]["2016"][keyPopulation]
   */
  return data;
}
/**
* Inserts data into the map by country and year, using the specified datakey.
* If the country or year doesn't exist, a new one is instantiated.
*/
function insertData(dataObj, country, year, data, dataKey) {
  if (country in dataObj) { // Country exists, so get its data.

    var countryData = dataObj[country];
    if (!(year in countryData)) { // Year not present? Add it in.
      countryData[year] = {};
    }
    countryData[year][dataKey] = Number(data); // Insert data.

  } else { // Country not in yet, so we just make an entirely new object from scratch and set it in the map.
    var countryData = {};
    countryData[year] = {};
    countryData[year][dataKey] = Number(data);
    dataObj[country] = countryData;
  }
}