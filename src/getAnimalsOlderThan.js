const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const listOfAnimals = species.filter((specie) => specie.name === animal);
  const ageOfAnimals = listOfAnimals[0].residents.filter((specieAge) => specieAge.age < age);
  if (ageOfAnimals.length === 0) {
    return true;
  } return false;
}

module.exports = getAnimalsOlderThan;
