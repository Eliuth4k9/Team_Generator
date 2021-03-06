const { create } = require('domain');
const {writeFile, write} = require('fs');

function  generateHTML(array) {
    
let employeeCards = ``
    
    for (i = 0; i <array.length; i++) {
        
       employeeCards = employeeCards + createCards(array[i]);
        
    
    }
    
    const webHTML =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="navbar nabvar-success bg-success">
            <div class="container-fluid">
                <div class="nabvar-brand m-auto">
                    <h1 class="text-white text-center">Team Profile</h1>
                </div>
            </div>
        </header>
    
        <div class="container-md mt-4">
            <div class="row row-cols-2 row-cols-md g-2">
                ${employeeCards}
            </div>
        </div>
        
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
    </html>`;


    writeFile("./index.html", webHTML, (err) => {
        if (err) console.log("error in writingfile: ", err)

    });
    
    }
    function createCards(employee) {
        console.log("employee card", employee);
        return(`
        <div class="card" style="width: 18rem;"> 
        <div class="card-body">
        <h2 class="card-title"> &#128372; ${employee.name}</h2>
        <h3 class="card-subtitle mb-2 text-muted"> Role: ${employee.position}</h3>
        <h4 class="card-text">ID:  ${employee.id}</h4>
        <h4 class="card-text"> Email: ${employee.email}</h4>
        ${  
        employee.github &&`<h4 class="card-text">Github: ${employee.github}</h4>`
            || employee.office && `<h4 class="card-text">Office Number: ${employee.office}</h4>` 
            || employee.school && `<h4 class="card-text">School: ${employee.school}</h4>`
          }
        </div>
    </div>
        `) 
}
module.exports = generateHTML

