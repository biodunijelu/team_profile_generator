const Engineer = require("../lib/Engineer");

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jane', 2, 'jane@example.com', 'jane123');
    expect(engineer.name).toBe('Jane');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('jane@example.com');
    expect(engineer.github).toBe('jane123');
});

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
