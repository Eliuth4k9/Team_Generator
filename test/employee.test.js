
const Employee = require("../lib/employee");
// let userId = ()=> Math.floor(Math.random() * 5050);
describe("Employee", () => {
  describe("createEmployee", () => {
    it("recognize a new employee object was added ", () => {
      const newEmployee = new Employee();
      expect(typeof (newEmployee)).toEqual("object");
    });
  });
  describe("name", () => {
    it("recognize when a name has been added", () => {
      const name = "Walter"
      const employeeName = new Employee(name);
      expect(employeeName.name).toEqual(name);
    });
  });
  describe("email", () => {
    it("srecognize when an email has been added", () => {
      const email = "walterCEO"
      const employeeEmail = new Employee("Walter", email);
      expect(employeeEmail.email).toEqual(email);
    });
  describe("id", () => {
    it("recognize when an id has been added", () => {
      const id = 3;
      const employeeId = new Employee("Walter",id);
      expect(employeeId.id).toEqual(id);
    });
  });
  
  });
  describe("getName", () => {
    it("get name using getName()", () => {
      const name = "Walter"
      const employeeName = new Employee(name);
      expect(employeeName.getName()).toEqual(name);
    });
  });
  describe("getEmail", () => {
    it("get email using getEmail()", () => {
      const email = "walterCEO";
      const employeeEmail = new Employee("Walter", email);
      expect(employeeEmail.getEmail()).toEqual(email);
    });
  });
  describe("getId", () => {
    it("get Id using getId()", () => {
      const id = userId();
      const employeeId = new Employee("Walter", id);
      expect(employeeId.getId()).toEqual(id);
    });
  });

  describe("getPosition", () => {
    it("get Id using getId()", () => {
      const position = "Employee";
      const employeePosition = new Employee("Walter", userId(), "walterCEO");
      expect(employeePosition.getPosition()).toEqual(position);
    });
  });
});