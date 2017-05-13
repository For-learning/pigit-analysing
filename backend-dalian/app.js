var _ = require('lodash');
var jsonfile = require('jsonfile');


// console.log('Start analysing.');
var dataPaths = ['./data/data.json', './data/data.json'];
var businessKeyWords = [];
// var technologyKeyWords = [];

/**
 * Analyse all data
 */
for (var i = 0; i < dataPaths.length; i++) {
    console.log('==============Start analysing the first part of data.==============');

    // Read data
    var dataTemp = jsonfile.readFileSync(dataPaths[i]);

    // Analyse each one
    for (var j = 0; j < dataTemp.data.length; j++) {

        // Combine the ideaTitle and ideaSummary
        var title_summary = dataTemp.data[j].ideaTitle + dataTemp.data[j].ideaSummary;

        // If title_summary contains the key words
        var priority = 0;
        for (var k = 0; k < businessKeyWords.length; k++) {
            if (title_summary.indexOf(businessKeyWords[k]))
                priority++;
        }

        // Judge if this item belong to business category or not
        if (priority > 0) {

        } else {

        }
    }

    console.log('==============End up analysing the first part of data.==============');
}
