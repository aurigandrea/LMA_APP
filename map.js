
function myMap() {
					var myCenter = new google.maps.LatLng(51.5253712,-0.1096562);
					var mapCanvas = document.getElementById("map");
					var mapOptions = {center: myCenter, zoom: 15};
					var map = new google.maps.Map(mapCanvas, mapOptions);
					/* This is the array for the information*/
					var markers = [
						{ 
						name: "William Achoa an Adult Person born in Africa Servant to Mr Thomas Warrell of Albermal Street. 1749 Feb 02", 
						lat: 51.5091, 
						lng: -0.1421,
						},
						{
						name: "James Summersett an adult black person about 30 Years of Age [of] Baldwins Gardens. This would appear to be James Somerset, the person at the centre of the 'Mansfield Ruling' of 1772. Somerset, enslaved by a Boston customs official in North America, was brought to England. After two years he escaped, but was recaptured on 26 November 1771 and forced onto a ship bound for Jamaica. With help from Granville Sharpe, an anti-slavery campaigner, a writ of habeas corpus was granted by Lord Mansfield, the Lord Chief Justice, ordering the captain of the ship to produce Somerset before a court. After many delays, Mansfield ruled in 1772 that  'no master ever was allowed here [England] to take a slave by force to be sold abroad because he deserted from his service, therefore the man must be discharged",
						lat: 51.519967, 
						lng: -0.110775,
						},
						{
						name: "Grace Somes, a Indian woman from ye [the]  Bell inn. 1711 Apr 08.The use of the language in the entry is not clear. An assumption has been made that Grace has connections with the Indian subcontinent but she could also be an Indigenous person of colour",
						lat: 51.5180976, 
						lng: -0.1084128,
						},
						{
						name: "William Symons an Ethiopian youth died in Mr Sidlyes house in Chancery Lane the 13th August and buried the 14 1646.",
						lat: 51.5162, 
						lng: -0.1121,
						},
						{
						name: "Pompey a Black [aged] 18 [brought from] Cold Bath Fields [place of burial]. Cold Bath Field was a prison during these times. 1755 Mar 23.",
						lat: 51.525278,
						lng: -0.112778, 
						}, 
						{
						name: "John Rutter an adult Black from Cross Street about 13 years of age. 1766 Oct 13",
						lat: 51.5390819, 
						lng: -0.1028822,
						},
						{
						name: "John Waugh a Native of Bengal about 19 Years of age from Grays Inn Lane.  1767 Jul 20",
						lat: 51.52376, 
						lng: -0.11545,
						},
						{
						name: "Four black servants of Lord Chief Justice Treby lived here: Thomas Carter, James Mannell, Peter, and an unnamed boy. They were buried between 1693-1709.",
						lat: 51.520063,
						lng: -0.1105353, 
						},
						{
						name: "Thomas Clark a Native of the West Indies about 50 Years of Age and Lewis Cadanan a native of the East Indies about 18 Years of Age, who were baptised in 1682, lived here.",
						lat: 51.5235138,
						lng: -0.1757848,
						},
						{
						name: "William Warwick a black person from ye [the] Marshallseas high Holborne, 1695 Feb 27.",
						lat: 51.51766,
						lng: -0.11983, 
						},
						{
						name: "Edward Peaser an adult Black about 26 Years of Age from James Street, 1766 Feb 14",
						lat: 51.5108005, 
						lng: -0.15371,
						},
						{
						name: "John Clifton a Black Living with Mrs Calvell in John Street Bedford Row was Baptizd by the name of John Could not tell when he was born. 1768 Aug 25.",
						lat: 51.5197813, 
						lng: -0.1175985,
						},
						{
						name: "Charles Juba a Black Child about 6 years of age from Mr Crutendens, Johns Street. 1766 Apr 23",
						lat: 51.52586, 
						lng: -0.10402,
						},
						{
						name: "Oliver Cromwell a Native of Maddrass [Madras] about 30 years of age Lambs Conduit Street. 1781 Jan 20.",
						lat: 51.522, 
						lng: -0.1186,
						},
						{
						name: "John Carr, a Native of Jamaica about 20 years of Age Leather Lane. 1781 Dec 20.",
						lat: 51.52, 
						lng: -0.109444,
						},
						{
						name: "Anne (formerly Grace) a black of Madagascar belonging to Moses Cook a shoemaker in Lincolns Inne ffields [Lincolns Inn Fields]. 1690 Mar 20",
						lat: 51.5161, 
						lng: -0.1166,
						},
						{
						name: "Euphemia Inglis, an African black person born about the year 1783 See also John Inglis, son of James and Mary Jane Inglis, born in December 1805 in the parish of St Marylebone and baptised at St Olave on the same day as Euphemia. 1806 Feb 27.",
						lat: 51.5225, 
						lng: -0.152222,
						},
						{
						name: "Eliz [Elizabeth] an Ethiophian a maide sert [servant] to Mr Soper Churgeon [surgeon] neare Warwick House buryed. 1665 Aug 02.",
						lat: 551.507397, 
						lng: -0.1327199,
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