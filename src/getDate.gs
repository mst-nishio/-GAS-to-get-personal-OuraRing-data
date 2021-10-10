var exports = exports || {};
var module = module || { exports: exports };
//import { Settings } from "./.settings";
function getPersonalOuraRingData() {
  var spreadSheetId = Settings.spreadSheetId;
  var sheetName = Settings.sheetName;
  var startDate = Settings.startDate;
  var endDate = Settings.endDate;
  var ouraToken = Settings.ouraToken;
  var response = UrlFetchApp.fetch(
    "https://api.ouraring.com/v1/sleep?start=" +
      startDate +
      "&end=" +
      endDate +
      "&access_token=" +
      ouraToken
  );
  var responseJson = JSON.parse(response.toString());
  var spreadsheet = SpreadsheetApp.openById(spreadSheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);
  var sleepKeys = Object.keys(responseJson.sleep[0]);
  var sleepValues = responseJson.sleep.map(function (day) {
    return Object.values(day);
  });
  sleepKeys.forEach(function (value, index) {
    var rowNumber = index + 1;
    var columnNumber = 1;
    sheet.getRange(rowNumber, columnNumber).setValue(value);
    sheet.getRange(rowNumber, columnNumber).setBackground("#FF9900");
  });
  var _loop_1 = function (i) {
    sleepValues[i].forEach(function (value, index) {
      var rowNumber = index + 1;
      var columnNumber = i + 2;
      if (typeof value === "object") {
        sheet.getRange(rowNumber, columnNumber).setValue(String(value));
      } else {
        sheet.getRange(rowNumber, columnNumber).setValue(value);
      }
    });
  };
  for (var i = 0; i < sleepValues.length; i++) {
    _loop_1(i);
  }
}
