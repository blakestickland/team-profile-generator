const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee Unit Test", () => {
  describe("getName method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const name = 'abc';
      const dummy = new Employee(name, '123', '123@123.ca');

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
      const dummy = new Employee(name, '123', email);

      expect(dummy.getEmail()).toStrictEqual(email);
      
    });
  });

});

// getRole() {
// }
