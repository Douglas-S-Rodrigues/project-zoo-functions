const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const animalsBySex = (options, residents) => residents
  .filter((resident) => resident.sex === options.sex)
  .map((resident) => resident.name);

const animalsName = (options, residents) => {
  let animals = residents.map((resident) => resident.name);
  if (options.sex) {
    animals = animalsBySex(options, residents);
  }
  if (options.sorted) {
    animals = animals.sort();
  }
  return animals;
};
function getAnimalMap(options) {
  const animalsLocation = {};
  species.forEach(({ location }) => { animalsLocation[location] = []; });
  if (options && options.includeNames) {
    species.forEach(({ name, location, residents }) => {
      const animalsSpecies = {};
      animalsSpecies[name] = animalsName(options, residents);
      animalsLocation[location].push(animalsSpecies);
    });
    return animalsLocation;
  }
  species.forEach(({ name, location }) => animalsLocation[location].push(name));
  return animalsLocation;
}

module.exports = getAnimalMap;
