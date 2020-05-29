const functions = require("./functions");

test("Should not be blank", () => {
  const pw = "b";
  const expected = true;
  expect(functions.isNotBlank(pw)).toBe(expected);
});
test("Should be blank", () => {
  const pw = "";
  const expected = false;
  expect(functions.isNotBlank(pw)).toBe(expected);
});

test("Should not be more than 8 chars", () => {
  const pw = "a1b2c3d4";
  const expected = true;
  expect(functions.isLessThan8Chars(pw)).toBe(expected);
});
test("Should be more than 8 chars", () => {
  const pw = "a1b2c3d4e";
  const expected = false;
  expect(functions.isLessThan8Chars(pw)).toBe(expected);
});

test("Has uppercase letters", () => {
  const pw = "Abcd1";
  const regex = /[A-Z]+/;
  expect(pw).toMatch(regex);
  const expected = true;
  expect(functions.hasUppercase(pw)).toBe(expected);
});
test("Has no uppercase letters", () => {
  const pw = "abcd1";
  const regex = /[A-Z]+/;
  const expected = false;
  expect(pw).not.toMatch(regex);
  expect(functions.hasUppercase(pw)).toBe(expected);
});

test("Has lowercase letters", () => {
  const pw = "ABCd1";
  const regex = /[a-z]+/;
  const expected = true;
  expect(pw).toMatch(regex);
  expect(functions.hasLowercase(pw)).toBe(expected);
});
test("Has no lowercase letters", () => {
  const pw = "AB3E";
  const regex = /[a-z]+/;
  const expected = false;
  expect(pw).not.toMatch(regex);
  expect(functions.hasLowercase(pw)).toBe(expected);
});

test("Has digit", () => {
  const pw = "Ab1cd";
  const regex = /[0-9]+/;
  const expected = true;
  expect(pw).toMatch(regex);
  expect(functions.hasDigit(pw)).toBe(expected);
});
test("Has no digits", () => {
  const pw = "AbcdE";
  const regex = /[0-9]+/;
  const expected = false;
  expect(pw).not.toMatch(regex);
  expect(functions.hasDigit(pw)).toBe(expected);
});

// To test a bunch of passwords
const pwArray = [
  { pw: "henkie1", ex: { score: 4, valid: true } },
  { pw: "1234a", ex: { score: 4, valid: true } },
  { pw: "z", ex: { score: 3, valid: true } },
  { pw: "henkie1234", ex: { score: 3, valid: true } },
  { pw: "HENKhenk", ex: { score: 4, valid: true } },
  { pw: "HENK33$", ex: { score: 0, valid: false } },
  { pw: "1234", ex: { score: 0, valid: false } },
  { pw: "", ex: { score: 0, valid: false } },
];

test("Is password verified", () => {
  pwArray.forEach((pw) => {
    let password = pw.pw;
    let expected = pw.ex;
    console.log(password);
    console.log(expected);
    expect(functions.isValid(password)).toEqual(expected);
  });
});
