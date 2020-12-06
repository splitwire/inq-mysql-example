const inquirer = require("inquirer");

async function ask() {
  try {
    return inquirer.prompt([
      {
        type: "list",
        name: "queryType",
        message: "What do you want to query?",
        choices: [
          "List Active Users",
          "List Inactive Users",
          "Query by First Name",
          "Query by Last Name",
        ],
      },
    ]);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  ask,
};
