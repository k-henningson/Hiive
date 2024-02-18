const alphabetizeString = require("../src/alphabetizeString.js");

test('alphabetizes string "HiiveIsLive" with custom alphabet "abcdefghijklmnopqrstuvwxyz" to "eehiiiilsvv"', () => {
  const inputString = "HiiveIsLive";
  const customAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const expectedOutput = "eehiiiilsvv";
  expect(alphabetizeString(inputString, customAlphabet)).toBe(expectedOutput);
});

test('alphabetizes string "HireKyra" with custom alphabet including capitals "zyxwvutsRqponmlkjIHgfEdcba" to "yrrkihea"', () => {
  const inputString = "HireKyra";
  const customAlphabet = [
    "z",
    "y",
    "x",
    "w",
    "v",
    "u",
    "t",
    "s",
    "R",
    "q",
    "p",
    "o",
    "n",
    "m",
    "l",
    "k",
    "j",
    "I",
    "H",
    "g",
    "f",
    "E",
    "d",
    "c",
    "b",
    "a",
  ];
  const expectedOutput = "yrrkihea";
  expect(alphabetizeString(inputString, customAlphabet)).toBe(expectedOutput);
});

test('alphabetizes string "YouShouldHireMe" with no custom alphabet to "deehhilmoorsuuy"', () => {
  const inputString = "YouShouldHireMe";
  const expectedOutput = "deehhilmoorsuuy";
  expect(alphabetizeString(inputString)).toBe(expectedOutput);
});
