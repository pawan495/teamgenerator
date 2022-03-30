const Engineer = require("../lib/Engineer.js");

describe("create an Engineer object", () => {
   const [arg1, arg2, arg3, arg4] = ["Bob", "123", "ex@exam.com", "Github"];
   const engineer = new Engineer(arg1, arg2, arg3, arg4);
   it("should be a string", () => {
      expect(engineer.getName()).toBe(arg1);
      expect(engineer.getName()).toEqual(expect.any(String));
   });
   it("should be a number", () => {
      expect(engineer.getId()).toBe(arg2);
      expect(Number(engineer.getId())).toEqual(expect.any(Number));
   });
   it("should be a string", () => {
      expect(engineer.getEmail()).toBe(arg3);
      expect(engineer.getEmail()).toEqual(expect.any(String));
   });
   it("should be 'Engineer'", () => {
      expect(engineer.getRole()).toBe("Engineer");
   });
   it("should be a string", () => {
      expect(engineer.getGithub()).toBe(arg4);
      expect(engineer.getGithub()).toEqual(expect.any(String));
   });
});
