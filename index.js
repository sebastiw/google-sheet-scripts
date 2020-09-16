const {
    getAuthToken,
    appendSpreadSheet
} = require('./googleSheetsService.js');

const parse = require('csv-parse/lib/sync');
const fs = require('fs').promises;

const spreadsheetId = process.argv[2];
const sheetName = process.argv[3];
const fileName = process.argv[4];

async function appendSpreadSheetFromFile(file) {
    try {
        // Read file
        const content = await fs.readFile(file)
        // CSV parse
        const records = parse(content, { delimiter: ';', from_line: 2 })
        // Upload to Sheets
        const auth = await getAuthToken();
        const response = await appendSpreadSheet({
            spreadsheetId,
            sheetName,
            auth,
            values: [records[0]]
        })
        console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
        console.log(error.message, error.stack);
    }
}

function main() {
    appendSpreadSheetFromFile(fileName)
}

main()
