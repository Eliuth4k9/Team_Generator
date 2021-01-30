const {writeFile} = require('fs');


function writeRender(employee) {
    console.log('employee array is', employee);
    var parsed = ""
    var i;
    for (i = 0; i < employee.length; i++) {
        console.log(employee[i]);
       
            for (var property in employee[i]) {
                console.log('hello this is property', property);
                parsed += `${property}: ${employee[i][property]} \n` ;          
            }
        
    }
    console.log('hello parsed is', parsed);
    fs = require('fs');
    fs.writeFile('./buildHTML.HTML', parsed, 'utf8', function (err) {
        if (err) console.log('error');
    })
}
module.exports = writeRender