const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

// Exemplo de uso da função countEntrants:
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const childPrice = entrants.filter((index) => index.age < 18).length;
  const adultPrice = entrants.filter((index) => index.age >= 18 && index.age < 50).length;
  const seniorPrice = entrants.filter((index) => index.age >= 50).length;

  return { child: childPrice, adult: adultPrice, senior: seniorPrice };
}

function calculateEntry(entrants) {

  const total = countEntrants(entrants);
  if (total !== 0) {
    return (total.child * prices.child) + (total.adult * prices.adult)
   + (total.senior * prices.senior);
  }
  return total;
}

module.exports = { calculateEntry, countEntrants };
