
var ResultBoxes = function(){}


ResultBoxes.prototype = {
  allResults: function(result){
    //create city destination row//
    var parentElement = document.getElementById('parentResult');
    var row = document.createElement('row');
    var div = document.createElement('div');
    div.className = 'col-12';
    var h1 = document.createElement('h1');
    h1.innerText = result.flightInfo.destinationCity;
    div.appendChild(h1);
    row.appendChild(div);
    parentElement.appendChild(row);

    //create flight details row//
    var row = document.createElement('row');
    //outbound leg//
    //outbound carrier logo//
    var div = document.createElement('div');
    div.className = 'col-2';
    var image = document.createElement('img');
    image.src = '#'; //this is for carrier logo from API//
    div.appendChild(image);
    row.appendChild(div);
    parentElement.appendChild(row);

    //origin city//
    var div = document.createElement('div');
    div.className = 'col-1';
    var p = document.createElement('p');
    p.innerText = result.flightInfo.originCity;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //arrow icon//
    var div = document.createElement('div');
    div.className = 'col-2';
    var image = document.createElement('img');
    image.src = '#'; //this is for arrow icon//
    div.appendChild(image);
    row.appendChild(div);
    parentElement.appendChild(row);

    //destination city//
    var div = document.createElement('div');
    div.className = 'col-1';
    var p = document.createElement('p');
    p.innerText = result.flightInfo.destinationCity;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //inbound leg//
    //inbound carrier logo//
    var div = document.createElement('div');
    div.className = 'col-1';
    var image = document.createElement('img');
    image.src = '#'; //this is for carrier logo from API//
    div.appendChild(image);
    row.appendChild(div);
    parentElement.appendChild(row);

    //destination (origin) city//
    var div = document.createElement('div');
    div.className = 'col-1';
    var p = document.createElement('p');
    p.innerText = result.flightInfo.destinationCity;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //arrow icon//
    var div = document.createElement('div');
    div.className = 'col-2';
    var image = document.createElement('img');
    image.src = '#'; //this is for arrow icon//
    div.appendChild(image);
    row.appendChild(div);
    parentElement.appendChild(row);

    //origin (destination) city//
    var div = document.createElement('div');
    div.className = 'col-1';
    var p = document.createElement('p');
    p.innerText = result.flightInfo.originCity;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //create hotel row//
    var row = document.createElement('row');
    //hotel name//
    var div = document.createElement('div');
    div.className = 'col-4';
    var p = document.createElement('p');
    p.innerText = result.hotels[0].hotelName;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //hotel area//
    var div = document.createElement('div');
    div.className = 'col-4';
    var p = document.createElement('p');
    p.innerText = result.hotels[0].locationDescription;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //guest rating//
    var div = document.createElement('div');
    div.className = 'col-2';
    var p = document.createElement('p');
    p.innerText = result.hotels[0].guestRating + '%';
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //packageprice
    var div = document.createElement('div');
    div.className = 'col-2';
    var p = document.createElement('p');
    console.log(result)
    p.innerText = '£' + result.cheapestPackage;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //create hotel details row//
    var row = document.createElement('row');
    //create hotel details//
    //create hotel thumbnail//
    var div = document.createElement('div');
    div.className = 'col-2';
    var image = document.createElement('img');
    image.src = 'http://images.travelnow.com' + result.hotels[0].thumbnailUrl; //this is the thumbnail for the hotel from API//
    image.className = 'hotelThumbnail';
    div.appendChild(image);
    row.appendChild(div);
    parentElement.appendChild(row);
    //result.hotels.thumbnailURL//

    //create number of nights//
    var div = document.createElement('div');
    div.className = 'col-2';
    var p = document.createElement('p');
    p.innerText = 'no of nights';
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //create hotel description//
    var div = document.createElement('div');
    div.className = 'col-4';
    var p = document.createElement('p');
    p.innerText = result.hotels[0].description;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //create star rating//
    var div = document.createElement('div');
    div.className = 'col-2';
    var p = document.createElement('p');
    p.innerText = result.hotels[0].starRating;
    div.appendChild(p);
    row.appendChild(div);
    parentElement.appendChild(row);

    //create book button//
    var div = document.createElement('div');
    div.className = 'col-2';
    var image = document.createElement('img');
    image.src = '#'; //this is for book button//
    div.appendChild(image);
    row.appendChild(div);
    parentElement.appendChild(row);

  }

}

module.exports = ResultBoxes;