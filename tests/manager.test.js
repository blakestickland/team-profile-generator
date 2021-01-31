const { expect, describe, it } = require("@jest/globals");
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

  describe("getRole method test", () => {
    it("should return the return value passed to the constructor", () => {
        const dummy = new Manager('bob', '123', '123@123.ca', '21');


        expect(dummy.getRole()).toStrictEqual('Manager');

    });
  });

});


// getRole() {
//     return 'Manager';
// }
