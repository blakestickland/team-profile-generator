const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee Unit Test", () => {
  describe("getName method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const name = 'abc';
      const dummy = new Employee(name, 19, '123@123.ca');

      expect(dummy.getName()).toStrictEqual(name);
      
    });
  });
  describe("getId method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const id = 19;
      const dummy = new Employee('abc', id, '123@123.ca');

      expect(dummy.getId()).toStrictEqual(id);
      
    });
  });
  describe("getEmail method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const email = '123@123.com';
      const dummy = new Employee('abc', 19, email);

      expect(dummy.getEmail()).toStrictEqual(email);
      
    });
  });
  describe("getRole method test", () => {
    it("should return the return value passed to the constructor", () => {
        const dummy = new Employee('bob', '123', '123@123.ca');


        expect(dummy.getRole()).toStrictEqual('Employee');

    });
  });
});
