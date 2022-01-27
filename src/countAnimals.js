const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor; ok
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico; ok
// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino. ok

function countAnimals(animal) {
  if (!animal) {
    const animalsResidents = species.map((specie) => specie.residents.length);
    const animalsName = species.map((specie) => specie.name);
    const animals = {};
    animalsName.forEach((specie, index) => {
      animals[specie] = animalsResidents[index];
    });
    return animals;
  }
  const specieAnimals = species.find((specie) => specie.name === animal.specie);
  if (!animal.age && !animal.sex) {
    return specieAnimals.residents.length;
  }
  const specieSex = specieAnimals.residents.filter((residente) => animal.sex === residente.sex);
  return specieSex.length;
}

console.log(countAnimals());
module.exports = countAnimals;
