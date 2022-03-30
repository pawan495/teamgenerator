const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// prompt manager
const manager = () => {
   return inquirer
      .prompt([
         {
            type: "input",
            name: "name",
            message: "Enter the team manager's name",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "email",
            message: "Enter the team manager's email address",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office phone number",
            validate: (promptInput) => validateInput(promptInput),
         },
      ])
      .then((answers) => {
         // init new object containing all the team data
         const newTeamData = {
            // * although there will only be one manager,
            // * it still must be an array because the html generator assumes arrays are used
            manager: [
               new Manager(
                  answers.name,
                  answers.id,
                  answers.email,
                  answers.officeNumber
               ),
            ],
            engineers: [],
            interns: [],
         };
         // present menu options, passing in the team data as argument
         return menu(newTeamData);
      });
};

// prompt engineer
const engineer = (teamData) => {
   return inquirer
      .prompt([
         {
            type: "input",
            name: "name",
            message: "Enter the engineer's name",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github username",
            validate: (promptInput) => validateInput(promptInput),
         },
      ])
      .then((answers) => {
         // create new class and push into array
         teamData.engineers.push(
            new Engineer(
               answers.name,
               answers.id,
               answers.email,
               answers.github
            )
         );
         // present menu options, passing in the team data as argument
         return menu(teamData);
      });
};

// prompt intern
const intern = (teamData) => {
   return inquirer
      .prompt([
         {
            type: "input",
            name: "name",
            message: "Enter the intern's name",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "email",
            message: "Enter the intern's email address",
            validate: (promptInput) => validateInput(promptInput),
         },
         {
            type: "input",
            name: "school",
            message: "Enter the name of the intern's school",
            validate: (promptInput) => validateInput(promptInput),
         },
      ])
      .then((answers) => {
         // create new class and push into array
         teamData.interns.push(
            new Intern(answers.name, answers.id, answers.email, answers.school)
         );
         return menu(teamData);
      });
};

// prompt menu options
const menu = (teamData) => {
   // spacer line to aid with readability
   console.log("");
   return inquirer
      .prompt([
         {
            type: "list",
            name: "option",
            message: "Please select an option below:",
            choices: ["Add Engineer", "Add Intern", "Finish"],
         },
      ])
      .then((answers) => {
         console.log("");
         switch (answers.option) {
            case "Add Engineer":
               return engineer(teamData);
            case "Add Intern":
               return intern(teamData);
            default:
               return teamData;
         }
      });
};

// validate input from prompts
const validateInput = (string) => {
   if (string) {
      return true;
   } else {
      console.log("An answer is required!");
      return false;
   }
};

module.exports = { manager };
