const Employee = require("../lib/Employee.js");

describe("create an Employee object", () => {
   const [arg1, arg2, arg3] = ["Bob", "123", "ex@exam.com"];
   const employee = new Employee(arg1, arg2, arg3);
   it("should be a string", () => {
      expect(employee.getName()).toBe(arg1);
      expect(employee.getName()).toEqual(expect.any(String));
   });
   it("should be a number", () => {
      expect(employee.getId()).toBe(arg2);
      expect(Number(employee.getId())).toEqual(expect.any(Number));
   });
   it("should be a string", () => {
      expect(employee.getEmail()).toBe(arg3);
      expect(employee.getEmail()).toEqual(expect.any(String));
   });
   it("should default to 'Employee'", () => {
      expect(employee.getRole()).toBe("Employee");
      expect(employee.getRole()).toEqual(expect.any(String));
   });
});
