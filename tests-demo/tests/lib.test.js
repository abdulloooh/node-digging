const lib = require("../lib");

test("Absolute - Should return a positive number for positive input", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("Absolute - Should return a positive number for negative input", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});
test("Absolute - Should return a zero for other input", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});
