const functions = require("./functions");

test("Should not be blank", () => {
  const pw = "b";
  expect(functions.isNotBlank(pw)).toBe(true);
});
test("Should be blank", () => {
  const pw = "";
  expect(functions.isNotBlank(pw)).toBe(false);
});

test("Should not be more than 8 chars", () => {
  const pw = "a1b2c3d4";
  expect(functions.isLessThan8Chars(pw)).toBe(true);
});
test("Should be more than 8 chars", () => {
  const pw = "a1b2c3d4e";
  expect(functions.isLessThan8Chars(pw)).toBe(false);
});

test("Has uppercase letters", () => {
  const pw = "Abcd1";
  const regex = /[A-Z]+/;
  expect(pw).toMatch(regex);
  expect(functions.hasUppercase(pw)).toBe(true);
});
test("Has no uppercase letters", () => {
  const pw = "abcd1";
  const regex = /[A-Z]+/;
  expect(pw).not.toMatch(regex);
  expect(functions.hasUppercase(pw)).toBe(false);
});

test("Has lowercase letters", () => {
  const pw = "ABCd1";
  const regex = /[a-z]+/;
  expect(pw).toMatch(regex);
  expect(functions.hasLowercase(pw)).toBe(true);
});
test("Has no lowercase letters", () => {
  const pw = "AB3E";
  const regex = /[a-z]+/;
  expect(pw).not.toMatch(regex);
  expect(functions.hasLowercase(pw)).toBe(false);
});

test("Has digit", () => {
  const pw = "Ab1cd";
  const regex = /[0-9]+/;
  expect(pw).toMatch(regex);
  expect(functions.hasDigit(pw)).toBe(true);
});
test("Has no digits", () => {
  const pw = "AbcdE";
  const regex = /[0-9]+/;
  expect(pw).not.toMatch(regex);
  expect(functions.hasDigit(pw)).toBe(false);
});

test("Is password verified", () => {
  const pw = "";
});
