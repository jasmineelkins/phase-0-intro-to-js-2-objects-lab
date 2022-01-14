// Write your solution in this file!

const employee = {
  name: "Jasmine",
  address: "54 Orchard St",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newEmployee = { ...obj };

  newEmployee[key] = value;

  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
  const revisedEmployee = { ...obj };

  delete revisedEmployee[key];

  return revisedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
  delete obj[key];

  return obj;
}
