const Intern = require("../lib/Intern");

test('creates an Intern object', () => {
    const intern = new Intern('Alex', 3, 'alex@example.com', 'University');
    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('alex@example.com');
    expect(intern.school).toBe('University');
});

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
