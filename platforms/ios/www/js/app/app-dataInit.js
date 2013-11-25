var allOffices = [];
var counter = 0;
for(var i = 0; i < cities.length;i++) {
	for(var j=0; j < cities[i].offices.length;j++) {
		allOffices[counter] = cities[i].offices[j];
		allOffices[counter].distance = 0;
		counter++;
	}
}

function loadOfficesToHTML() {
	for(var i = 0;i < allOffices.length;i++) {
		$("#officesListView").append("<li class='distance' data-longitude='" + allOffices[i].lon + 
                                  "' data-latitude='" + allOffices[i].lat + 
                                  "' data-distance='" + allOffices[i].distance + 
                                  "' data-branchOffice='" + allOffices[i].branchOffice +
                                  "' data-atm='" + allOffices[i].atm + "'>" +
                              "<a href='#map'>" +
                                "<h1>" + allOffices[i].name +"</h1>" +
                                "<p>" + allOffices[i].address + "</p>" +
                                "<p>" + allOffices[i].distance + " Km </p>" +
                              "</a>"+
                            "</li>");     	
	}
  $("#allButton").addClass("ui-btn-active"); 
  $("#officeButton").removeClass("ui-btn-active");
  $("#atmButton").removeClass("ui-btn-active");
}

function loadAllOfficesToHTML() {
	for(var i = 0;i < allOffices.length;i++) {
		$("#allOfficesListView").append("<li class='distance' data-longitude='" + allOffices[i].lon + 
                                  "' data-latitude='" + allOffices[i].lat + 
                                  "' data-distance='" + allOffices[i].distance + 
                                  "' data-branchOffice='" + allOffices[i].branchOffice +
                                  "' data-atm='" + allOffices[i].atm + "'>" +
                              "<a href='#map'>" +
                                "<h1>" + allOffices[i].name + "</h1>" +
                                "<p>" + allOffices[i].address + "</p>" +
                                "<p>" + allOffices[i].distance + " Km </p>" +
                              "</a>"+
                            "</li>");  	
	}
}

function selectAll() {
  // Select all button and deselect all other buttons.
  $("#allButton").addClass("ui-btn-active"); 
  $("#officeButton").removeClass("ui-btn-active");
  $("#atmButton").removeClass("ui-btn-active");
  cnt = 0;
  $("#officesListView li").each(function() {
    $(this).css("display", "block");
  });
}

function selectBranchOffices() {
  // Select branch office button and deselect all other buttons.
  $("#allButton").removeClass("ui-btn-active"); 
  $("#officeButton").addClass("ui-btn-active");
  $("#atmButton").removeClass("ui-btn-active"); 
  $("#officesListView li").each(function() {
    if($(this).attr("data-branchOffice") === "true") {
      $(this).css("display", "block");
    } else {
      $(this).css("display", "none");      
    }
  }); 
}

function selectATMs() {
  // Select atm button and deselect all other buttons.
  $("#allButton").removeClass("ui-btn-active"); 
  $("#officeButton").removeClass("ui-btn-active");
  $("#atmButton").addClass("ui-btn-active");
  $("#officesListView li").each(function() {
    if($(this).attr("data-atm") === "true") {
      $(this).css("display", "block");
    } else {
      $(this).css("display", "none");      
    }
  });
}

function populateDistanceAndSort() {
	var allElements = $(".distance");
	alert(allElements.length);
	for(var i = 0;i < allElements.length;i++) {
		allElements[i].data("distance") = 3;
	}
	allOffices.sort(function(a, b) {return a.distance - b.distance});
	$("#officesListView li").sort(function(a,b) {
		return 1;
	})	
}

loadOfficesToHTML();
loadAllOfficesToHTML();

function calculateDistance(lon1, lat1, lon2, lat2) {
	var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    var y = (lat2-lat1);
    return Math.sqrt(x*x + y*y) * 6000;
}

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var deviceLongitude = 0;
var deviceLatitude = 0;

var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    deviceLatitude = position.coords.latitude;
    deviceLongitude = position.coords.longitude;
    //populateDistanceAndSort();
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);