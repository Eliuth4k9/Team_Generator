const { create } = require('domain');
const {writeFile, write} = require('fs');

function  generateHTML(array) {
    // console.log('this is the array', array);  
    
let employeeCards = ``
    //blank empty canvas to throw in
    for (i = 0; i <array.length; i++) {
        //pussh the return of the function into the array
       employeeCards = employeeCards + createCards(array[i]);
        
    
    }
const webHTML =
   `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <div id = "setUp">
        ${employeeCards}
       </div>
   </body>
   </html>`;


//write file to hmtl

writeFile("./index.html", webHTML, (err) => {
    if (err) console.log("error in writingfile: ", err)

});
  
}
function createCards(employee) {
    console.log("employee card", employee);
    return(`
    <div> 
    <h1> ${employee.name}</h1>
    <h1> ${employee.email}</h1>
    <h1> ${employee.id}</h1>
    <h1> ${employee.office}</h1>
    <h1> ${employee.position}</h1>
    </div>
    `) 
}
module.exports = generateHTML