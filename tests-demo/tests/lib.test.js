const lib = require("../lib");

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
