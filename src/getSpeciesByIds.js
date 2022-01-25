const data = require('../data/zoo_data');

// console.log(data.species.id)

const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((animalId) => ids.includes(animalId.id)); // ideia de usar includes retirada desse link  https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/
}

module.exports = getSpeciesByIds;
