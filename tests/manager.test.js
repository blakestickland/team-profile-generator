const { expect } = require("@jest/globals");
const { off } = require("process");
const Manager = require("../lib/Manager");

describe("Manager Unit Test", () => {
  describe("getOfficeNumber method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const officeNumber = 'abc';
      const dummy = new Manager('bob', '123', '123@123.ca', officeNumber);

      expect(dummy.getOfficeNumber()).toStrictEqual(officeNumber);
      
    });
  });

});


// getRole() {
//     return 'Manager';
// }
