var _ = require('lodash');
var jsonfile = require('jsonfile');


// Define the path array
var dataPaths = ['./dataRaw/data.json', './dataRaw/data.json'];
var dataCleanPath = './dataCleaned/dataCleaned.json';
var itemArray = [];

/**
 * Analyse all data
 */
for (var i = 0; i < dataPaths.length; i++) {
    console.log('==============Start cleaning the ' + (i + 1) + ' part of data.==============');

    // Read data
    var dataTemp = jsonfile.readFileSync(dataPaths[i]);
    console.log('Reading end');


    // Analyse each one
    for (var j = 0; j < dataTemp.data.length; j++) {

        var itemTemp = {};
        itemTemp.ideaId = dataTemp.data[j].ideaId;
        itemTemp.ideaTitle = dataTemp.data[j].ideaTitle;
        itemTemp.ideaSummary = dataTemp.data[j].ideaSummary;

        itemArray.push(itemTemp);
    }

    console.log('==============End up analysing the ' + (i + 1) + ' part of data.==============');
}

jsonfile.writeFileSync(dataCleanPath, itemArray);

// [{"ideaId":"---","ideaTitle":"---","ideaSummary":"---","ideaCategory":"---"},
// {"ideaId":"---","ideaTitle":"---","ideaSummary":"---","ideaCategory":"---"}]
