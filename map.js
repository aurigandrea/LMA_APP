function myMap() {
					var myCenter = new google.maps.LatLng(52.2032007,0.116724,15);
					var mapCanvas = document.getElementById("map");
					var mapOptions = {center: myCenter, zoom: 13};
					var map = new google.maps.Map(mapCanvas, mapOptions);
					/* This is the array for the information*/
					var markers = [
						{ 
						name: "Poundland: cheap cutlery, crockery and much more", 
						lat: 52.2068152, 
						lng: 0.1285616,
						},
						{
						name: "Metro Bank: Bank account without appointment",
						lat: 52.20494, 
						lng: 0.1202897,
						},
						{
						name: "Sainsbury: Food shopping in the centre of Cambridge",
						lat: 52.2025619, 
						lng: 10.122336,
						},
						{
						name: "Wilko: cheap Hardware store",
						lat: 52.2068046, 
						lng: 0.1282579,
						},
						{
						name: "Ryder and Amies: Gowns and Cambridge merchandise",
						lat: 52.2050283,
						lng: 0.1178755, 
						}, 
						{
						name: "Giant: New bikes",
						lat: 52.1895926, 
						lng: 0.1333165,
						},
						/*adding restaurants here*/ 
						{
						name: "Bread and Meat: Sandwiches",
						lat: 52.2040291, 
						lng: 0.118319,
						},
						{
						name: "CAU: Steaks",
						lat: 52.203986,
						lng: 0.118669, 
						},
						{
						name: "Rainbow Café: Vegetarian food",
						lat: 52.2043282,
						lng: 0.1177746,
						},
						{
						name: "The Riverbar: Rooftop cocktail bar with excellent views over Cambridge",
						lat: 52.2105189,
						lng: 0.1176397, 
						},
						{
						name: "Charlie's Coffee Company: Pizza",
						lat: 52.2054926, 
						lng: 0.133485,
						},
						{
						name: "Aromi: Pizza",
						lat: 52.2041679, 
						lng: 0.1187846,
						},
					];
							 marker_objects = [];
								/*here starts the loop for setting the markers*/  
							    for (var i = 0; i < markers.length; i++) {
							            var data = markers[i];
							            var content = data.name;
							            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
							            var marker = new google.maps.Marker({
							                position: myLatlng,
							                map: myMap,
							                name: content,
							        	});
							            /* here starts the Infowindow */
							            var infowindow = new google.maps.InfoWindow();

									    google.maps.event.addListener(marker, "click", (function (marker) {
									      return function(evt) {
									        infowindow.setContent(marker.name);
									        infowindow.open(map, marker);
									      }
									    })(marker));

									    	marker.setMap(map);

									   		 marker_objects.push(marker);
									                    
								}

	}; 