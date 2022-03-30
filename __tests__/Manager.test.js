const Manager = require("../lib/Manager.js");

describe("create a Manager object", () => {
   const [arg1, arg2, arg3, arg4] = [
      "Bob",
      "123",
      "ex@exam.com",
      "123-456-7890",
   ];
   const manager = new Manager(arg1, arg2, arg3, arg4);
   it("should be a string", () => {
      expect(manager.getName()).toBe(arg1);
      expect(manager.getName()).toEqual(expect.any(String));
   });
   it("should be a number", () => {
      expect(manager.getId()).toBe(arg2);
      expect(Number(manager.getId())).toEqual(expect.any(Number));
   });
   it("should be a string", () => {
      expect(manager.getEmail()).toBe(arg3);
      expect(manager.getEmail()).toEqual(expect.any(String));
   });
   it("should be 'Manager'", () => {
      expect(manager.getRole()).toBe("Manager");
   });
   it("should be the phone number", () => {
      expect(manager.officeNumber).toBe(arg4);
   });
});
