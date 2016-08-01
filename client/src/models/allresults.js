var _ = require('lodash')

var AllResults = function(){
  this.results = []
}

var testingVarible = null;

AllResults.prototype = {
  populateFromLocal: function(){
    var retrievedResults = JSON.parse(localStorage.getItem('lastSearch')) || [];
    console.log(retrievedResults)
    if(retrievedResults.length === 0){
      console.log('No results...')
      return;
    }
    this.results = retrievedResults.results;
    this.createCheapestPackage()
  },

  createCheapestPackage: function(){
    this.orderHotelsbyPrice
    this.results.forEach(function(result){
      if(result.hotels.length > 0){
        result.cheapestPackage = Math.floor(result.flightPrice) + Math.floor(result.hotels[0].nightlyPrice);
      }else{
          result.cheapestPackage = 0;
      }
    })
  },

  orberByCheapestPackage: function(){
    this.results = _.sortBy(this.results, 'cheapestPackage')
  },

  orderByFlightPrice: function(){
    this.results = _.sortBy(this.results, 'flightPrice')
  },

  orderHotelsbyPrice: function(){
    this.results.forEach(function(result){
      result.hotels = _.sortBy(result.hotels, 'nightlyPrice')
    })
  },

  orderHotelsbyStarRating: function(){
    this.results.forEach(function(result){
      result.hotels = _.sortBy(result.starRating, 'nightlyPrice')
    })
  },

  orderHotelsbyPercentRating: function(){
    this.results.forEach(function(result){
      result.hotels = _.sortBy(result.percentRecommended, 'nightlyPrice')
    })
  },

  orderHotelsbyGuestRating: function(){
    this.results.forEach(function(result){
      result.hotels = _.sortBy(result.guestRating, 'nightlyPrice')
    })
  },
}

module.exports = AllResults;