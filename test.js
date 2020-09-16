const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues,
    appendSpreadSheet
} = require('./googleSheetsService.js');

const spreadsheetId = process.argv[2];
const sheetName = process.argv[3];

async function testGetSpreadSheet() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheet({
            spreadsheetId,
            auth
        })
        console.log('output for getSpreadSheet', JSON.stringify(response.data, null, 2));
    } catch(error) {
        console.log(error.message, error.stack);
    }
}

async function testGetSpreadSheetValues() {
    try {
        const auth = await getAuthToken();
        const response = await getSpreadSheetValues({
            spreadsheetId,
            sheetName,
            auth
        })
        console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
        console.log(error.message, error.stack);
    }
}

async function testAppendSpreadSheet() {
    try {
        const auth = await getAuthToken();
        const response = await appendSpreadSheet({
            spreadsheetId,
            sheetName,
            auth,
            values: [["Data", 123.45, true, "=MAX(D2:D4)", "10"]]
        })
        console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    } catch(error) {
        console.log(error.message, error.stack);
    }
}

function main() {
    testGetSpreadSheet();
    testGetSpreadSheetValues();
    testAppendSpreadSheet();
}

main()
