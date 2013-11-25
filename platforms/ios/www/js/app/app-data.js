;(function() {
	var app = window.app = window.app || {};
	app.data = app.data || {};

	cities = [
	{
		"name" : "Zagreb",
		"offices" : [
		{
			"name" : "PBZ Zagreb / Poslovnica Cvjetni trg",
			"address": "Trg Petra Preradovića 4, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.812050,
			"lon": 15.97403
		}, {
			"name" : "PBZ Zagreb / Poslovnica Črnomerec",
			"address": "Ilica 288,10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.815491,
			"lon": 15.933352
		}, {
			"name" : "PBZ Zagreb / Ispostava Dubec",
			"address": "Dubečka bb (Konzum), 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.827930,
			"lon": 16.079103
		}, {
			"name" : "PBZ Zagreb / Poslovnica Dubrava",
			"address": "Avenija Dubrava 39, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.826900,
			"lon": 16.046059
		}, {
			"name" : "PBZ Zagreb / Ispostava Dugave",
			"address": "Sarajevska cesta 6, (\"KONZUM\"), 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.770157,
			"lon": 16.004807
		}, {
			"name" : "PBZ Zagreb / Poslovnica Gajnice",
			"address": "Sigetje 12, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.814293,
			"lon": 15.875190
		}, {
			"name" : "PBZ Zagreb / Poslovnica Grada Vukovara",
			"address": "Ulica grada Vukovara 72, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.799500,
			"lon": 15.973236
		}, {
			"name" : "PBZ Zagreb / Poslovnica Ilica",
			"address": "Ilica 87, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.812439,
			"lon": 15.961676
		}, {
			"name" : "PBZ Zagreb / Ispostava Ina-Trgovina",
			"address": "Avenija V. Holjevca 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.778465,
			"lon": 15.979035
		}, {
			"name" : "PBZ Zagreb / Poslovnica Središće",
			"address": "Hrvoja Macanovića 27, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.789272,
			"lon": 15.931259
		}, {
			"name" : "PBZ Zagreb / Ispostava King Cross",
			"address": "Velimira Škorpika 34, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.796135,
			"lon": 15.856780
		}, {
			"name" : "PBZ Zagreb / PBZ Knez Mislav",
			"address": "Kneza Mislava 2,10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.808121,
			"lon": 15.984399
		}, {
			"name" : "PBZ Zagreb / Poslovnica Kod Cibone",
			"address": "Savska 28, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.802925,
			"lon": 15.964079
		}, {
			"name" : "PBZ Zagreb / Bankomat",
			"address": "Ilica 191,10000 Zagreb",
			"branchOffice": false,
			"atm": true,
			"lat": 45.812485,
			"lon": 15.945990
		}, {
			"name" : "PBZ Zagreb / Poslovnica Kvaternikov trg",
			"address": "Heinzelova 1, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.813965,
			"lon": 15.998218
		}, {
			"name" : "PBZ Zagreb / Poslovnica Lastovska",
			"address": "Lastovska 23, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.794205,
			"lon": 15.999248
		}, {
			"name" : "PBZ Zagreb / Poslovnica Maksimirska",
			"address": "Maksimirska 108, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.818005,
			"lon": 16.010975
		}, {
			"name" : "PBZ Zagreb / Poslovnica Oktogon",
			"address": "Ilica 5, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.812550,
			"lon": 15.975237
		}, {
			"name" : "PBZ Zagreb / Poslovnica Rački",
			"address": "Franje Račkoga 6,10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.810986,
			"lon": 15.985333
		}, {
			"name" : "PBZ Zagreb / Poslovnica Radnička",
			"address": "Radnička 44, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.803146,
			"lon": 16.000772
		}, {
			"name" : "PBZ Zagreb / Ispostava Savska",
			"address": "Savska 163, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.789253,
			"lon": 15.956182
		}, {
			"name" : "PBZ Zagreb / Poslovnica Špansko",
			"address": "Trg Ivana Kukuljevića 11, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.804192,
			"lon": 15.896627
		}, {
			"name" : "PBZ Zagreb / Ispostava Šubićeva",
			"address": "Šubićeva 29, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.812073,
			"lon": 15.994731
		}, {
			"name" : "PBZ Zagreb / Poslovnica Trešnjevački trg",
			"address": "Ozaljska 4, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.799938,
			"lon": 15.953538
		}, {
			"name" : "PBZ Zagreb / Ispostava Vrbani",
			"address": "Palinovečka 19 B, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.790443,
			"lon": 15.914222
		}, {
			"name" : "PBZ Samobor / Poslovnica Samobor",
			"address": "Zagrebačka 26, 10430 Samobor",
			"branchOffice": true,
			"atm": true,
			"lat": 45.804115,
			"lon": 15.718850
		}, {
			"name" : "PBZ Velika Gorica / Ispostava Velika Gorica",
			"address": "Zagrebačka 12, 10410 Velika Gorica",
			"branchOffice": true,
			"atm": true,
			"lat": 45.714951,
			"lon": 16.073578
		}, {
			"name" : "PBZ Velika Gorica / Poslovnica Velika Gorica II",
			"address": "Trg Stjepana Radića 6, 10410 Velika Gorica",
			"branchOffice": true,
			"atm": true,
			"lat": 45.712860,
			"lon": 16.074587
		}, {
			"name" : "PBZ Sesvete / Poslovnica Sesvete",
			"address": "Trg Dragutina Domjanića 4, 10360 Sesvete",
			"branchOffice": true,
			"atm": true,
			"lat": 45.826885,
			"lon": 16.110249
		}, {
			"name" : "PBZ Zagreb / PBZ ispostava Hrvatski sabor",
			"address": "Trg sv.Marka 6, 10000 Zagreb",
			"branchOffice": true,
			"atm": false,
			"lat": 45.816246,
			"lon": 15.974346
		}, {
			"name" : "PBZ Zagreb / PBZ ispostava HEP",
			"address": "Ulica grada Vukovara 37, 10000 Zagreb",
			"branchOffice": true,
			"atm": false,
			"lat": 45.800198,
			"lon": 15.968660
		}, {
			"name" : "PBZ Zagreb / PBZ ispostava Sveti Duh",
			"address": "Sveti Duh 64, 10000 Zagreb",
			"branchOffice": true,
			"atm": false,
			"lat": 45.819679,
			"lon": 15.939038
		}, {
			"name" : "PBZ Zagreb / PBZ Ispostava Kraš",
			"address": "Ravnice 48, 10000 Zagreb",
			"branchOffice": true,
			"atm": true,
			"lat": 45.820904,
			"lon": 16.028837
		}, {
			"name" : "PBZ Zagreb / PBZ ispostava Nova bolnica",
			"address": "Avenija Gojka Šuška 6, 10000 Zagreb",
			"branchOffice": true,
			"atm": false,
			"lat": 45.831783,
			"lon": 16.034105
		}, {
			"name" : "PBZ Zagreb / Bankomat",
			"address": "Kraljevićeva 24, (autosalon Auto Maksimir)",
			"branchOffice": false,
			"atm": true,
			"lat": 45.820412,
			"lon": 16.010954
		}
		]
	}, {
		"name" : "Split",
		"offices" : [
		{
			"name" : "PBZ Split / Poslovnica Brodarica",
			"address": "Put Brodarice 6 (Joker), 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.518539,
			"lon": 16.446835
		}, {
			"name" : "PBZ Split / Poslovnica Gripe",
			"address": "Ulica slobode 7, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.510418,
			"lon": 16.449129
		}, {
			"name" : "PBZ Split / Poslovnica Marul",
			"address": "Trg braće Radića 7, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.508106,
			"lon": 16.438528
		}, {
			"name" : "PBZ Split / Poslovnica Pojišan",
			"address": "Poljička cesta 8, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.505070,
			"lon": 16.457573
		}, {
			"name" : "PBZ Split / Poslovnica Dobri",
			"address": "Gundulićeva 22, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.514019,
			"lon": 16.438370
		}, {
			"name" : "PBZ Split / Poslovnica Žnjan",
			"address": "Žnjanska 2, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.507866,
			"lon": 16.484062
		}, {
			"name" : "PBZ Split / Poslovnica Bol",
			"address": "Dubrovačka 21, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.510456,
			"lon": 16.454311
		}, {
			"name" : "PBZ Split / Poslovnica Kod kazališta",
			"address": "Matošićeva 14, 21000 Split",
			"branchOffice": true,
			"atm": true,
			"lat": 43.510647,
			"lon": 16.436512
		}, {
			"name" : "PBZ Sinj / Poslovnica Alka Sinj",
			"address": "Glavička ulica 6, 21230 Sinj",
			"branchOffice": true,
			"atm": true,
			"lat": 43.701263,
			"lon": 16.641970
		}, {
			"name" : "PBZ Kaštel Kambelovac/ Poslovnica Kaštela",
			"address": "Kralja Krešimira 1, 21214 Kaštel Kambelovac",
			"branchOffice": true,
			"atm": true,
			"lat": 43.550602,
			"lon": 16.385078
		}, {
			"name" : "PBZ Makarska / Poslovnica Vrutak",
			"address": "Obala kralja Tomislava 12, 21300 Makarska",
			"branchOffice": true,
			"atm": true,
			"lat": 43.294853,
			"lon": 17.018467
		}, {
			"name" : "PBZ Omiš / Poslovnica Omiš",
			"address": "Fošal 1, 21310 Omiš",
			"branchOffice": true,
			"atm": true,
			"lat": 43.443947,
			"lon": 16.692352
		}, {
			"name" : "PBZ Hvar / Poslovnica Pharos",
			"address": "Fabrika bb, 21450 Hvar",
			"branchOffice": true,
			"atm": true,
			"lat": 43.172009,
			"lon": 16.438379
		}, {
			"name" : "PBZ Jelsa / Poslovnica Pjaca",
			"address": "Pjaca bb, 21465 Jelsa",
			"branchOffice": true,
			"atm": true,
			"lat": 43.161648,
			"lon": 16.692480
		}, {
			"name" : "PBZ Primošten / Poslovnica Primošten",
			"address": "Dr Franje Tuđmana 20, 22202 Primošten",
			"branchOffice": true,
			"atm": true,
			"lat": 43.586174,
			"lon": 15.923395
		}, {
			"name" : "PBZ Solin / Poslovnica Solin",
			"address": "Matoševa 10, 21210 Solin",
			"branchOffice": true,
			"atm": true,
			"lat": 43.537628,
			"lon": 16.491594
		}, {
			"name" : "PBZ Supetar / Poslovnica Supetrus",
			"address": "Obala bb-Turist biro, 21400 Supetar",
			"branchOffice": true,
			"atm": true,
			"lat": 43.384422,
			"lon": 16.554707
		}, {
			"name" : "PBZ Šibenik / Poslovnica Šibenik",
			"address": "Vladimira Nazora 1, 22000 Šibenik",
			"branchOffice": true,
			"atm": true,
			"lat": 43.734825,
			"lon": 15.894814
		}, {
			"name" : "PBZ Šibenik / Poslovnica Dalmare",
			"address": "Velimira Škorpika 23, 22000 Šibenik",
			"branchOffice": true,
			"atm": true,
			"lat": 43.710510,
			"lon": 15.910864
		}
		]
	}, {
		"name" : "Varaždin",
		"offices" : [
		{
			"name" : "PBZ Varaždin / Poslovnica Varaždin",
			"address": "Franjevački trg 17, 42000 Varaždin",
			"branchOffice": true,
			"atm": true,
			"lat": 46.307671,
			"lon": 16.335661
		}, {
			"name" : "PBZ Varaždin / Poslovnica Varaždin II",
			"address": "Kukuljevićeva 17, 42000 Varaždin",
			"branchOffice": true,
			"atm": true,
			"lat": 46.309803,
			"lon": 16.340328
		}, {
			"name" : "PBZ Varaždinske Toplice / Poslovnica Varaždinske Toplice",
			"address": "Trg slobode 1, 42223 Varaždinske toplice",
			"branchOffice": true,
			"atm": true,
			"lat": 46.207993,
			"lon": 16.421900
		}, {
			"name" : "PBZ Ivanec / Poslovnica Ivanec",
			"address": "Trg hrvatskih ivanovaca 1, 42240 Ivanec",
			"branchOffice": true,
			"atm": true,
			"lat": 46.223763,
			"lon": 16.124798
		}, {
			"name" : "PBZ Koprivnica / Poslovnica Koprivnica",
			"address": "Trg bana Jelačića 14, 48000 Koprivnica",
			"branchOffice": true,
			"atm": true,
			"lat": 46.164570,
			"lon": 16.828974
		}
		]
	}
	];
}());