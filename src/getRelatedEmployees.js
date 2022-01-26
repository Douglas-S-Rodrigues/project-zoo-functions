const data = require('../data/zoo_data');

console.log(data.employees);

const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employe) => employe.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((employe) => employe.managers.includes(managerId))
      .map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
