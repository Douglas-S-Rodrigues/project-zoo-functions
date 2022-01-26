const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

console.log(data.employees);

function getEmployeeByName(employeeName) {
  // if (employeeName.length <= 0) { // tive que usar !employeeName pois o === 0 n funcionou
  if (!employeeName) {
    return {};
  }
  return employees.find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
}

module.exports = getEmployeeByName;
