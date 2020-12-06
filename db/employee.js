// Connection is pooled and will manage / balance itself
const Connection = require("./connection");

// Since this is a pooled connection, no need to actually have a constructor
class Employee {
  static async queryByFirstName(name) {
    try {
      return Connection("employee").select("*").where("first_name", name);
    } catch (error) {
      throw error;
    }
  }

  static async queryByLastName(name) {
    try {
      return Connection("employee").select("*").where("last_name", name);
    } catch (error) {
      throw error;
    }
  }

  static async queryInactiveEmployees() {
    try {
      return Connection("employee").select("*").where("active", false);
    } catch (error) {
      throw error;
    }
  }
  static async queryActiveEmployees() {
    try {
      return Connection("employee").select("*").where("active", true);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Employee;
