const prompts = require("./utils/prompts");
const generateHtml = require("./utils/generateHtml");
const writeHtml = require("./utils/writeHtml");

// execute
console.log("Welcome!");
prompts
   .manager()
   .then((output) => {
      return writeHtml(
         generateHtml.final(
            generateHtml.employee(output.manager),
            generateHtml.employee(output.engineers),
            generateHtml.employee(output.interns)
         )
      );
   })
   .then((writeHtmlReponse) => console.log(writeHtmlReponse))
   .catch((error) => {
      console.log(error);
   });
