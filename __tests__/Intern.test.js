const Intern = require("../lib/Intern.js");

describe("create an Intern object", () => {
   const [arg1, arg2, arg3, arg4] = ["Bob", "123", "ex@exam.com", "school"];
   const intern = new Intern(arg1, arg2, arg3, arg4);
   it("should be a string", () => {
      expect(intern.getName()).toBe(arg1);
      expect(intern.getName()).toEqual(expect.any(String));
   });
   it("should be a number", () => {
      expect(intern.getId()).toBe(arg2);
      expect(Number(intern.getId())).toEqual(expect.any(Number));
   });
   it("should be a string", () => {
      expect(intern.getEmail()).toBe(arg3);
      expect(intern.getEmail()).toEqual(expect.any(String));
   });
   it("should be 'Intern'", () => {
      expect(intern.getRole()).toBe("Intern");
   });
   it("should be a string", () => {
      expect(intern.getSchool()).toBe(arg4);
      expect(intern.getSchool()).toEqual(expect.any(String));
   });
});
