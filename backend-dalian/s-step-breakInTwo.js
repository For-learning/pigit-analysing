var _ = require('lodash');
var jsonfile = require('jsonfile');


// Define the path array
var dataCleanPaths = ['./dataCleaned/dataCleaned.json'];
var dataCategorizedPaths = ['./dataCategorizedPath/dataCategorizedBusinessPath.json',
    './dataCategorizedPath/dataCategorizedNoNBusinessPath.json'];
var businessKeyWords = [];
var itemArrayBusiness = [];
var itemArrayNonBusiness = [];

/**
 * Analyse all data
 */
for (var i = 0; i < dataCleanPaths.length; i++) {
    console.log('==============Start categorizing the ' + (i + 1) + ' part of data.==============');

    // Read data
    var dataTemp = jsonfile.readFileSync(dataCleanPaths[i]);
    console.log('Reading end');

    // Analyse each one
    for (var j = 0; j < dataTemp.length; j++) {

        // Combine the ideaTitle and ideaSummary
        var title_summary = dataTemp[j].ideaTitle + dataTemp[j].ideaSummary;

        // If title_summary contains the key words
        var priority = 0;
        for (var k = 0; k < businessKeyWords.length; k++) {
            if (title_summary.indexOf(businessKeyWords[k]))
                priority++;
        }

        // Judge if this item belong to business category or not
        if (priority > 0) {
            itemArrayBusiness.push(dataTemp[j]);
        } else {
            itemArrayNonBusiness.push(dataTemp[j]);
        }
    }

    console.log('==============End up categorizing the ' + (i + 1) + ' part of data.==============');
}

jsonfile.writeFileSync(dataCategorizedPaths[0], itemArrayBusiness);
jsonfile.writeFileSync(dataCategorizedPaths[1], itemArrayNonBusiness);

// [{"ideaId":"---","ideaTitle":"---","ideaSummary":"---","ideaCategory":"---"},
// {"ideaId":"---","ideaTitle":"---","ideaSummary":"---","ideaCategory":"---"}]
