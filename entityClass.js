class People {
  name;
  constructor({ name, age, gender }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Employee extends People {
  constructor(name, age, gender) {
    super(name, age, gender);
  }

  get name() {
    const preffix = this.gender === "Male" ? "Mr." : "Mrs.";
    return `Hello ${preffix} ${this.name}`;
  }
}

module.exports = Employee;
