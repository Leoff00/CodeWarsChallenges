const assert = require("assert");
const Employee = require("./entityClass");

const GENDER = {
  male: "Male",
  female: "Female",
};

{
  const employee = new Employee({
    name: "Zinnlua",
    age: 21,
    gender: GENDER.male,
  });
  assert.throws(() => !employee.age, { message: "The age must be 21" });
}

{
  const employee = new Employee({
    name: "Zinnlua",
    age: 21,
    gender: GENDER.male,
  });

  assert.deepStrictEqual(employee.name, "Zinnlua");
}
