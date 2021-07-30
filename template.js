module.exports = {
  generateManager: (name, id, email, officeNumber) => {
    return `
            <div class="card">
                <div class="card-header bg-primary text-white">${name}</div>
                <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item">ID: <span>${id}</span></li>
                      <li class="list-group-item">Email: <span>${email}</span></li>
                      <li class="list-group-item">Office number: <span>${officeNumber}</span></li>
                    </ul>
                </div>
            </div>
        `;
  },
  generateEngineer: (name, id, email, githubUsername) => {
    return `
    <div class="card">
      <div class="card-header bg-primary text-white">${name}</div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: <span>${id}</span></li>
          <li class="list-group-item">Email: <span>${email}</span></li>
          <li class="list-group-item">GitHub: <span>${githubUsername}</span></li>
        </ul>
      </div>
    </div>

      `;
  },
  generateIntern: (name, id, email, school) => {
    return `
    <div class="card">
      <div class="card-header bg-primary text-white">${name}</div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: <span>${id}</span></li>
          <li class="list-group-item">Email: <span>${email}</span></li>
          <li class="list-group-item">School: <span>${school}</span></li>
        </ul>
      </div>
    </div>

      `;
  },
  generateStartHTML: () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
          />
          <title>Team Profile Generator</title>
        </head>
        <body>
          <nav class="navbar navbar-light bg-danger justify-content-center">
            <span class="navbar-brand text-white mb-0 h1">My Team</span>
          </nav>
          <div class="card-deck m-3">
      `;
  },
  generateEndHTML: () => {
    return `
    </div>
    <script
    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
    crossorigin="anonymous"
  ></script>
</body>
</html>
`;
  },
};
