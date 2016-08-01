var FlightSearch = require('./models/flightsearch.js');
var HotelSearch = require('./models/hotelsearch.js');
var ResultObject = require('./models/result.js');
var AllResultsObject = require('./models/allresults.js');
var InitialSearchView = require('./views/initialsearchview.js');
var InitialUserPositionView = require('./views/initialuserpositionview.js');
var InitialUserPosition = require('./models/initialuserposition.js');
var ResultBoxes = require('./views/allresultsview.js');

var keys = {
  skyscannerApiKey: 'co301553792687403420764331127549',
  expediaApiKey: '49anVGknDW2Ck8ATFBRAAMQ0Ls75wphH'
}

window.onload = function(){
  setDates();
  //object loads here
  var allResults = new AllResultsObject();
  var flightSearch = new FlightSearch();
  var hotelSearch = new HotelSearch();
  var resultDisplay = new ResultBoxes();
  //event listeners here
  var initialSearchView = new InitialSearchView();
  initialSearchView.handleSearchClick(flightSearch, hotelSearch, keys);
  
  var initialUserPosition = new InitialUserPosition();
   initialUserPosition.getUserLatLng();
  //area for Joe to play with
  allResults.populateFromLocal();
  var testResults = JSON.parse(localStorage.getItem('lastSearch')) || [];
  resultDisplay.allResults(testResults.results[0]);
  //area for ash to play with


  //area for nat to play with


  //
}


var setDates = function(){
  var today = new Date();
  var startDate = document.getElementById('searchStartDateInput')
  startDate.value = formateDates(today)
  var endDate = document.getElementById('searchEndDateInput')
  today.setDate(today.getDate() + 2); 
  endDate.value = formateDates(today)
}

var formateDates = function(date){
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear()
  if(mm < 10){
    mm = '0'+mm;
  }
  if(dd < 10){
    dd = '0'+dd;  
  }
  return yyyy+'-'+mm+'-'+dd;
}








