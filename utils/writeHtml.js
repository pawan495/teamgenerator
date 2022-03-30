const fs = require("fs");

const writeHtml = (fileContent) => {
   return new Promise((resolve, reject) => {
      // create folder if doesn't exist
      if (!fs.existsSync("./dist/")) {
         fs.mkdirSync("./dist/", { recursive: true });
      }
      // write file
      fs.writeFile("./dist/index.html", fileContent, (err) => {
         // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
         if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
         }

         // if everything went well, resolve the Promise and send the successful data to the `.then()` method
         resolve("HTML file successfully created!");
      });
   });
};

module.exports = writeHtml;
