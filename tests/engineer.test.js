const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer Unit Test", () => {
  describe("getName method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const name = 'abc';
      const dummy = new Engineer(name, '123', '123@123.ca');

      expect(dummy.getName()).toStrictEqual(name);
      
    });
  });

});
