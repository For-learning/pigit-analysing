var _ = require('lodash');
var jsonfile = require('jsonfile');


// Read the finalOutput folder
var dataFinal = jsonfile.readFileSync('./dataFinal/finalOutput.json');

// ================ Analysing the business related data
var businessData = jsonfile.readFileSync('./dataFinal/finalOutput.json');

for (var i = 0; i < businessData.length; i++) {

    // _.isMatch(object, { 'b': 2 });
    var propertyExist = false;
    for (var j = 0; j < dataFinal.children[0].children.length; j++) {
        if (dataFinal.children[0].children[j].name == businessData[i].category) {
            dataFinal.children[0].children[j].size++;
        }
    }

    if (propertyExist) {
        dataFinal.children[0].children.push({"name": businessData[i].ideaCategory, "size": 1});
    }

}


// ================ Analysing the non-business related data
var nonBusinessData = jsonfile.readFileSync('./dataFinal/finalOutput.json');

for (var k = 0; k < nonBusinessData.length; k++) {

    // _.isMatch(object, { 'b': 2 });
    var propertyExist = false;
    for (var z = 1; j < dataFinal.children.length; z++) {
        if (dataFinal.children[z].name == nonBusinessData[k].category) {
            dataFinal.children[z].size++;
        }
    }

    if (propertyExist) {
        dataFinal.children.push({"name": nonBusinessData[k].ideaCategory, "size": 1});
    }

}
