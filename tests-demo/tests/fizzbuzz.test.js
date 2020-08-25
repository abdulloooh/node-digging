const fizzbuzz = require("../fizzbuzz");

describe("fizzbuzz", () => {
  it("throw error if input is not a number", () => {
    const notNumbers = [NaN, "10", "", null, undefined, 0];
    for (let el of notNumbers)
      expect(() => {
        fizzbuzz(el).toThrowError(/number/i);
      });
  });

  it("return fizz if divisible by only 3, buzz if by 5, fizzbuzz if by both and the number is by none", () => {
    expect(fizzbuzz(3)).toMatch(/^fizz$/i);
    expect(fizzbuzz(5)).toMatch(/^buzz$/i);
    expect(fizzbuzz(15)).toMatch(/^fizzbuzz$/i);
    expect(fizzbuzz(7)).toBe(7);

    //Well, you can actually seperate these tests up here in different entitities and test seperately
    //It is even probably best practice but imo this is simple and suffice for now
  });
});
