const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer Unit Test", () => {
  describe("getGithub method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const githubUsername = 'jimBob';
      const dummy = new Engineer('Tom', '123', '123@123.ca', githubUsername);

      expect(dummy.getGithub()).toStrictEqual(githubUsername);
      
    });
  });

});
