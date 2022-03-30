// overall html page
const final = (managerHtml, engineerHtml, internHtml) => {
   return `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
         rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"
         integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w=="
         crossorigin="anonymous"
         referrerpolicy="no-referrer"
      />
      <title>My Team</title>
   </head>
   <body>
      <!-- header -->
      <header
         class="
            container-fluid
            bg-danger bg-gradient
            text-white text-center
            p-4
            shadow
         "
      >
         <h1>My Team</h1>
      </header>

      <!-- main section -->
      <main class="container">
         <!-- manager -->
         <div class="row justify-content-center">
            ${managerHtml}
         </div>

         <!-- engineers -->
         <div class="row justify-content-center">
            ${engineerHtml}
         </div>

         <!-- interns -->
         <div class="row justify-content-center">
            ${internHtml}
         </div>
      </main>

      <script
         src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"
         integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ=="
         crossorigin="anonymous"
         referrerpolicy="no-referrer"
      ></script>
      <script
         src="https://kit.fontawesome.com/5db253f9b2.js"
         crossorigin="anonymous"
      ></script>
   </body>
</html>
`;
};

const employee = (employeeArray) => {
   return (
      employeeArray
         // iterate through each array element and return an html block for each
         .map((employeeClass) => {
            switch (employeeClass.getRole()) {
               case "Manager":
                  return `
<div class="col-6">
   <div class="card mt-4 shadow">
      <div class="card-body bg-primary bg-gradient text-white">
         <h5 class="card-title">${employeeClass.getName()}</h5>
         <p class="card-text">
            <i class="fas fa-user-tie"></i> Manager
         </p>
      </div>
      <ul class="list-group list-group-flush border m-3">
         <li class="list-group-item">ID: ${employeeClass.getId()}</li>
         <li class="list-group-item">
            Email:
            <a href="mailto:${employeeClass.getEmail()}" target="_blank"
               >${employeeClass.getEmail()}</a
            >
         </li>
         <li class="list-group-item">Office Number: ${
            employeeClass.officeNumber
         }</li>
      </ul>
   </div>
</div>
`;

               case "Engineer":
                  return `
<div class="col-4">
   <div class="card mt-4 shadow">
      <div class="card-body bg-success bg-gradient text-white">
         <h5 class="card-title">${employeeClass.getName()}</h5>
         <p class="card-text">
            <i class="fas fa-wrench"></i> Engineer
         </p>
      </div>
      <ul class="list-group list-group-flush border m-3">
         <li class="list-group-item">ID: ${employeeClass.getId()}</li>
         <li class="list-group-item">
            Email:
            <a href="mailto:${employeeClass.getEmail()}" target="_blank"
               >${employeeClass.getEmail()}</a
            >
         </li>
         <li class="list-group-item">
            Github:
            <a href="https://github.com/${employeeClass.getGithub()}" target="_blank"
               >${employeeClass.getGithub()}</a
            >
         </li>
      </ul>
   </div>
</div>
`;

               case "Intern":
                  return `
<div class="col-4">
   <div class="card mt-4 shadow">
      <div class="card-body bg-info bg-gradient text-white">
         <h5 class="card-title">${employeeClass.getName()}</h5>
         <p class="card-text">
            <i class="fas fa-graduation-cap"></i> Intern
         </p>
      </div>
      <ul class="list-group list-group-flush border m-3">
         <li class="list-group-item">ID: ${employeeClass.getId()}</li>
         <li class="list-group-item">
            Email:
            <a href="mailto:${employeeClass.getEmail()}" target="_blank"
               >${employeeClass.getEmail()}</a
            >
         </li>
         <li class="list-group-item">School: ${employeeClass.getSchool()}</li>
      </ul>
   </div>
</div>
`;

               default:
                  break;
            }
         })
         // * concat into a single string before returning
         .join("")
   );
};

module.exports = { final, employee };
