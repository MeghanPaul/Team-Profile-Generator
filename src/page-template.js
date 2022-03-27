const generateCards = (employeeDataArr) => {
  return `
    <section class="my-3" id="cards">
      <div class="row justify-space-between justify-content-around">
      ${employeeDataArr
        .filter((employee) => employee.getRole() == "Manager")
        .map(({ name, id, email, officeNumber }) => {
            return `
            <div class="card" style="width: 30%; margin: 5px; min-width: 250px;">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                    <p class="card-text">ID: ${id}<br>Email: <a href="mailto:${email}">${email}</a><br>Office Number: ${officeNumber}</p>
                </div>
            </div>
            `;
        })
        .join("")}

        ${employeeDataArr
            .filter((employee) => employee.getRole() == "Engineer")
            .map(({ name, id, email, gitHubUsername }) => {
                return `
                <div class="card" style="width: 30%; margin: 5px; min-width: 250px;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                        <p class="card-text">ID: ${id}<br>Email: <a href="mailto:${email}">${email}</a><br>GitHub: <a href="https://github.com/${gitHubUsername}" target="_blank">${gitHubUsername}</a></p>
                    </div>
                </div>
                `;
            })
            .join("")}

            ${employeeDataArr
                .filter((employee) => employee.getRole() == "Intern")
                .map(({ name, id, email, school }) => {
                    return `
                    <div class="card" style="width: 30%; margin: 5px; min-width: 250px;">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                            <p class="card-text">ID: ${id}<br>Email: <a href="mailto:${email}">${email}</a><br>School: ${school}</a></p>
                        </div>
                    </div>
                    `;
                })
                .join("")}
        </div>
    </section>
    `;
};

// export function to generate entire page
module.exports = employeeDataArr => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-dark bg-primary py-2 px-3">The Team</h1>
        </div>
      </header>
      <main class="container">
        ${generateCards(employeeDataArr)}
      </main>
    </body>
    </html>
    `;
};
