const lib = require("../lib");
const db = require("../db");

// test("Absolute - Should return a positive number for positive input", () => {
//   const result = lib.absolute(1);
//   expect(result).toBe(1);
// });

// test("Absolute - Should return a positive number for negative input", () => {
//   const result = lib.absolute(-1);
//   expect(result).toBe(1);
// });
// test("Absolute - Should return a zero for other input", () => {
//   const result = lib.absolute(0);
//   expect(result).toBe(0);
// });

describe("absolute", () => {
  it("should return a positive number for positive input", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number for negative input", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("should return a zero for input zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return greeting with ${name}", () => {
    expect(lib.greet("Abdullah")).toContain("Abdullah"); // OR next line
    expect(lib.greet("Abdullah")).toMatch(/Abdullah/);
  });
});

describe("getCurrencies", () => {
  it("should contain the allowed currencies", () => {
    const result = lib.getCurrencies();

    //too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //too specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");

    //proper
    expect(result).toContain("AUD");
    expect(result).toContain("USD");
    expect(result).toContain("EUR");

    //ideal
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"])); //does not check order
  });
});

describe("getProduct", () => {
  it("should return product object with given productId and price", () => {
    const result = lib.getProduct(1);

    expect(result).toEqual(
      //toBe will fail cos it will expect received and test value to be at same location in memory which is not since object is a reference type
      expect.objectContaining({
        price: expect.any(Number),
        id: 1,
      })
    );

    //cleaner implementation
    expect(result).toMatchObject({ price: expect.any(Number), id: 1 });

    //Also
    expect(result).toHaveProperty("id", 1); //not that typeof the value must match
    expect(result).toHaveProperty("price", expect.any(Number)); //not that typeof the value must match

    //for deep referencing
    //expect(houseForSale).toHaveProperty('kitchen.area', 20);
  });
});

describe("registerUser", () => {
  it("throw error when username parameter is falsy", () => {
    const falsy = [NaN, "", null, undefined, 0];
    for (let el of falsy) {
      expect(() => {
        lib.registerUser(el);
      }).toThrowError(/username/i);
    }
  });

  it("return username object when username is supplied", () => {
    const result = lib.registerUser("Abdullah");
    expect(result.id).toBeGreaterThan(0);
    expect(result).toHaveProperty("username", "Abdullah");
  });
});

describe("fizzbuzz", () => {
  it("throw error if input is not a number", () => {
    const notNumbers = [NaN, "10", "", null, undefined, 0];
    for (let el of notNumbers)
      expect(() => {
        lib.fizzbuzz(el).toThrowError(/number/i);
      });
  });

  it("return fizz if divisible by only 3, buzz if by 5, fizzbuzz if by both and the number is by none", () => {
    expect(lib.fizzbuzz(3)).toMatch(/^fizz$/i);
    expect(lib.fizzbuzz(5)).toMatch(/^buzz$/i);
    expect(lib.fizzbuzz(15)).toMatch(/^fizzbuzz$/i);
    expect(lib.fizzbuzz(7)).toBe(7);

    //Well, you can actually seperate these tests up here in different entitities and test seperately
    //It is even probably best practice but imo this is simple and suffice for now
  });
});

describe("applyDiscount", () => {
  it("give 10% discount if points is greater than 10", () => {
    db.getCustomerSync = function (id) {
      console.log("Fake reading from database...");
      return { id: id, points: 11 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
