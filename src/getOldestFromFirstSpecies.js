const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalsList = [];
  const employeId = employees.filter((employe) => employe.id === id).map((resp) =>
    resp.responsibleFor[0]);
  const animals = species.filter((animal) => animal.id === employeId[0])[0].residents
    .sort((ageA, ageB) => {
      if (ageA.age < ageB.age) return 1;
      if (ageA.age > ageB.age) return -1;
      return 0;
    });
  animalsList[0] = animals[0].name;
  animalsList[1] = animals[0].sex;
  animalsList[2] = animals[0].age;
  return animalsList;
}

module.exports = getOldestFromFirstSpecies;
