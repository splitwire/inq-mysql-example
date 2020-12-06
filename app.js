const { EmployeeDB } = require("./db");
const { EmployeeQuestions } = require("./questions");

async function parseAnswer(answer) {
  let work;

  switch (answer.queryType) {
    case "List Active Users":
      work = EmployeeDB.queryActiveEmployees();
      break;
    case "List Inactive Users":
      work = EmployeeDB.queryInactiveEmployees();
      break;
    case "Query by First Name":
      work = EmployeeDB.queryByFirstName("John");
      break;
    case "Query by Last Name":
      work = EmployeeDB.queryByLastName("Doe");
      break;
  }

  if (work) return work;

  throw new Error("Invalid answer...");
}

async function run() {
  try {
    const answer = await EmployeeQuestions.ask();

    const results = await parseAnswer(answer);
    console.table(results);
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
}

run();
