const Choices = require("inquirer/lib/objects/choices");

module.exports = {
  manager: [
    {
      type: "input",
      name: "name",
      message: "Please enter the employee name:",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter number ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter email:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter office number:",
    },
  ],
  engineer: [
    {
      type: "input",
      name: "name",
      message: "Please enter the employee name:",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter number ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter email:",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Please enter GitHub username:",
    },
  ],
  intern: [
    {
      type: "input",
      name: "name",
      message: "Please enter the employee name:",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter number ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter email:",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the school name:",
    },
  ],
  optionsPrompt: [
    {
      type: "list",
      name: "choice",
      message: "What do you want to do next?",
      choices: ["Create engineer", "Create intern", "Exit"],
    },
  ],
};
