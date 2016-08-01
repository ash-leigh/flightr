var InitialSearchParams = require('../models/initialsearch.js');
var ResultObject = require('../models/result.js');
var AllResultsObject = require('../models/allresults.js');

var InitialSearchView = function(){}

InitialSearchView.prototype = {
  handleSearchClick: function(flightSearch, hotelSearch, keys){
    var button = document.getElementById('initialSearchButton');
    getPositionData = function(){
        var startDate = document.getElementById('searchStartDateInput').value
        var endDate = document.getElementById('searchEndDateInput').value
        var origin = JSON.parse(localStorage.getItem('locationData'));
        var locationData = {origin: origin.origin, startDate: startDate, endDate: endDate}
        return locationData;
    }

    button.onclick = function(){
      console.log('clicked')

        var locationData = getPositionData();
        flightSearch.getFlightData(keys, locationData).then(function(response) {
          return response.quotes
        }).then(function(response){
          //loop through each quote and call a function to create a results object
          return Promise.all(response.map(function (quote) {
              return hotelSearch.getHotelData(keys, quote)
            }));
        }).then(function (arrayOfResults) {
          var allResults = new AllResultsObject();
          allResults.results = arrayOfResults
          allResults.createCheapestPackage();
          console.log('all results:',allResults)
          //save locally.
          localStorage.removeItem('lastSearch');
          localStorage.setItem('lastSearch', JSON.stringify(allResults));
          // var retrievedObject = JSON.parse(localStorage.getItem('allSearches')) || [];
          // retrievedObject.push(allResults);
          // localStorage.setItem('allSearches', JSON.stringify(retrievedObject));
        });
    }.bind(this);
  },

  saveResultsLocal: function(allResults){
    // Put the object into storage
    localStorage.setItem('lastSearch', JSON.stringify(allResults));
    var retrievedObject = JSON.parse(localStorage.getItem('allSearches')) || [];
    retrievedObject.push(allResults);
    localStorage.setItem('allSearches', JSON.stringify(retrievedObject));
  },

  constructString: function(lat, lng){
    var string = lat + ',' + lng + '-latlong';
    return string;
  },

  getUserLatLng: function(){
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var latLng = this.constructString(lat, lng)
        // this.newSearchParams(latLng);
        resolve(latLng)
      }.bind(this))
    }.bind(this))//end of promise
  },

  getStartDate: function(){
    var startDate = document.getElementById('searchStartDateInput').value;
    return startDate
  },

  getEndDate: function(){
    var endDate = document.getElementById('searchEndDateInput').value;
    return endDate
  }, 
  
  newSearchParams: function(latLng){
    var initialSearchParams = new InitialSearchParams(latLng, this.getStartDate(), this.getEndDate());
    return initialSearchParams;
  }
}

module.exports = InitialSearchView;


