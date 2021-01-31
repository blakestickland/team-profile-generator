const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern Unit Test", () => {
  describe("getSchool method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const school = 'Tintern';
      const dummy = new Intern('abc', '123', '123@123.ca', school);

      expect(dummy.getSchool()).toStrictEqual(school);
      
    });
  });

});
