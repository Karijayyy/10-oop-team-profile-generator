const Employee = require("../classes/Employee");

test("New Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Sets name", () => {
  const name = "Saphire";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Sets id value", () => {
  const testValue = 20;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Email", () => {
  const testValue = "testemail@tester.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Gets name getName()", () => {
  const testValue = "Saphire";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Gets id getId()", () => {
  const testValue = 20;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Gets email getEmail()", () => {
  const testValue = "testemail@tester.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Saphire", 1, "testemail@tester.com");
  expect(e.getRole()).toBe(testValue);
});