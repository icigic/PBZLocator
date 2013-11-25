// wait for cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

$(document).bind("mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
});

// Populate the database
//
function populateDB(tx) {
	tx.executeSql("DROP TABLE IF EXISTS OFFICE");
	tx.executeSql("CREATE TABLE IF NOT EXISTS OFFICE (" +
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " + 
		"name VARCHAR(100), " + 
		"address VARCHAR(100), " +
		"branchOffice BOOLEAN, "+
		"atm BOOLEAN, " +
		"latitude REAL," +
		"longitude REAL)");
}

// Transaction error callback
//
function errorCB(tx, err) {
	alert("Error processing SQL: " + err);
}

// Transaction success callback
//
function successCB() {
	//alert("Success!");
}

// Cordova is ready
//
function onDeviceReady() {
	var db = window.openDatabase("pbz", "1.0", "PBZLocator DB", 200000);
	db.transaction(populateDB, errorCB, successCB);
} 
