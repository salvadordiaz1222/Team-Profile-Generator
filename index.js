const fs = require("fs");
const inquirer = require("inquirer");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

const { generateHTML } = require("./template");
const choices = require("./questions-MyTeam");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const templates = require("./template");

const createEngineer = async () => {
  const engineerRes = await inquirer.prompt(choices.engineer);

  const engineer = new Engineer(
    engineerRes.name,
    engineerRes.id,
    engineerRes.email,
    engineerRes.githubUsername
  );

  return engineer;
};

const createIntern = async () => {
  const internRes = await inquirer.prompt(choices.intern);

  const intern = new Intern(
    internRes.name,
    internRes.id,
    internRes.email,
    internRes.school
  );

  return intern;
};

const runApp = async () => {
  let team = [];

  // Prompt User to enter manager name, employee Id, email, and office number

  const managerRes = await inquirer.prompt(choices.manager);

  // Once we have a response create a new Manager using the class Manager

  const manager = new Manager(
    managerRes.name,
    managerRes.id,
    managerRes.email,
    managerRes.officeNumber
  );
  team.push(manager);

  // Prompt, ask if they want to enter engineer, intern, or exit. Repeat until option is "exit"

  let options = await inquirer.prompt(choices.optionsPrompt);
  let choice = options.choice;

  while (choice !== "Exit") {
    //if choice = intern, run createIntern. then add intern to team
    if (choice === "Create intern") {
      let intern = await createIntern();
      team.push(intern);
    }
    // Engineer
    if (choice === "Create engineer") {
      let engineer = await createEngineer();
      team.push(engineer);
    }

    let newOptions = await inquirer.prompt(choices.optionsPrompt);
    choice = newOptions.choice;
  }

  // This runs after option is Exit
  // Initial variable with initial html string
  var str = templates.generateStartHTML();
  //Loop through team and check IF its engineer, manager, or intern
  team.forEach((employee) => {
    if (employee.getRole() === "Intern") {
      console.log("is intern");
      str =
        str +
        templates.generateIntern(
          employee.name,
          employee.id,
          employee.email,
          employee.school
        );
    } else if (employee.getRole() === "Engineer") {
      str =
        str +
        templates.generateEngineer(
          employee.name,
          employee.id,
          employee.email,
          employee.githubUsername
        );
    } else {
      str =
        str +
        templates.generateManager(
          employee.name,
          employee.id,
          employee.email,
          employee.officeNumber
        );
    }
  });

  str = str + templates.generateEndHTML();
  writeFileAsync("./index-1.html", str);
};

runApp();
