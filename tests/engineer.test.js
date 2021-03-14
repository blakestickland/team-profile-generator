const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer Unit Test", () => {
  describe("getGithub method", () => {
    it("should return the argument that we passed to the constructor", () => {
      const githubUsername = 'jimBob';
      const dummy = new Engineer('Tom', '123', '123@123.ca', 'Engineer', githubUsername);

      expect(dummy.getGithub()).toStrictEqual(githubUsername);
      
    });
  });
  describe("getRole method test", () => {
    it("should return the return value passed to the constructor", () => {
        const dummy = new Engineer('bob', '123', '123@123.ca', 'gitHubEngineer');


        expect(dummy.getRole()).toStrictEqual('Engineer');

    });
  });
});
