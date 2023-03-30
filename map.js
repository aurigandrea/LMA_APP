
function myMap() {
					var myCenter = new google.maps.Latlon(51.5253712,-0.1096562);
					var mapCanvas = document.getElementById("map");
					var mapOptions = {center: myCenter, zoom: 15};
					var map = new google.maps.Map(mapCanvas, mapOptions);
					/* This is the array for the information*/
					var markers = [
						{
						"info": "Oliver Cromwell. vidence from the parish of Saint Andrew, Holborn recorded: Oliver Cromwell a Native of Maddrass [Madras] about 30 years of age Lambs Conduit Street. 1781 Jan 20.",
						"lat": 51.522, 
						"lon": -0.1186,
						},
						{
						"info": "John Carr. Evidence from the parish of Saint Andrew, Holborn recorded: John Carr, a Native of Jamaica about 20 years of Age Leather Lane. 1781 Dec 20.",
						"lat": 51.52, 
						"lon": -0.109444,
						},
						
						{
						"info": "Pompey. Evidence from the parish of Saint Dunstan in the East recorded: Pompey a Black [aged] 18 [brought from] Cold Bath Fields [place of burial]. Cold Bath Field was a prison during these times. 1755 Mar 23.",
						"lat": 51.525278,
     					"lon": -0.112778, 
												}, 
						{
						"info": "Anne (formerly Grace). Evidence from the Saint Pancras Parish Church recorded: Anne (formerly Grace) a black of Madagascar belonging to Moses Cook a shoemaker in Lincolns Inne ffields [Lincolns Inn Fields]. 1690 Mar 20",
						"lat": 51.5161, 
						"lon": -0.1166,
						},
						{
						"info": "Charles Juba. Evidence from the parish of Saint Andrew, Holborn recorded: Charles Juba a Black Child about 6 years of age from Mr Crutendens, Johns Street. 1766 Apr 23",
						"lat": 51.52586, 
						"lon": -0.10402,
						},
						{
						"info": "William Warwick. Evidence from the parish of Saint Andrew, Holborn recorded: William Warwick a black person from ye [the] Marshallseas high Holborne, 1695 Feb 27.",
						"lat": 51.51766,
						"lon": -0.11983, 
						},
						 {
						   "info": "Joanna Vassa. Evidence from the parish of Saint James, Clerkenwell in 1821 recorded the marriage of 'Rev [Reverend] Henry Bromley of the parish of Northampton County Devon and Joanna Vassa'. She is amongst the 58 entrants labelled as being 'Mixed race Black'. She was the daughter of Olaudah Equiano and Susannah Cullen, so she was of both Nigerian and English heritage, though she was born in England. According to her baptism records, Joanna would have been 26 years old at the time of her marriage. Hers is listed as the only marriage in Saint James within the Switching the Lens dataset at this time.",
						   "lat": 51.52356425,
						   "lon": -0.1056495
						 },
						 {
						   "info": "John Satia. Evidence from the parish of Saint James, Clerkenwell in 1753 recorded the burial of 'John Satia [aged] 64 [who] abode Bridewell Walk [place of burial] Old Ground'. Satia was baptised in 1716 and in 1717 was apprenticed to a London joiner, eventually acquiring the freedom of the city. This led to a proclamation by the Mayor of the City of London on 14 September 1731 'that for the future no Negroes or other blacks [were] to be suffered to be bound apprentices at any of the companies of this city to any freeman'.",
						   "lat": 51.5255076,
						   "lon": -0.1050367
						 },
						 {
						   "info": "John Waugh. Evidence from the parish of Saint Andrew, Holborn in 1767 recorded  the baptism of 'John Waugh, a Native of Bengal from Grays Inn Lane'. He is amongst the 101 entrants described as being natives of Bengal in the set. John is listed as being 'about 19 years of age' at the time of his baptism and so we could estimate his birth year as 1748. He is one of the 99 baptisms in Saint Andrew within the STL dataset.",
						   "lat": 51.5198009,
						   "lon": -0.1125919
						 },
						 {
							"info": "Four black servants of Lord Chief Justice Treby lived here. Evidence from the parish of Saint Andrew, Holborn recorded: Thomas Carter, James Mannell, Peter, and an unnamed boy. They were buried between 1693-1709.",
							"lat": 51.520063,
							"lon": -0.1105353, 
							},
						 {
						   "info": "Jane Mahomed. Evidence from the parish of Saint Bartholomew the Great recorded the burial record for 'Jane Mahomed [of] No.1 Bartholomew Close [aged] 5 yrs [years] 10 mon [months]' on 16 December 1832. Her younger brother Frederick was buried the previous month, while a further sibling called Everard was buried three years later in 1835. It is likely they were related to Sake Dean Mahomed, notable as the first person from India to publish a book in English, whose Irish wife Jane Mahomed was buried in the same parish in 1844.",
						   "lat": 51.51817727,
						   "lon": -0.098893044
						 },
						 {
						   "info": "Frederick Mahomed. Evidence from the parish of Saint Bartholomew the Great recorded the burial record for 'Frederick Mahomed [of] No.1 Bartholomew Close [aged] 16 mon [months]' on 25 November 1832. His elder sister Jane was buried the following month, while a further sibling called Everard was buried three years later in 1835. It is likely they were related to Sake Dean Mahomed, notable as the first person from India to publish a book in English, whose Irish wife Jane Mahomed was buried in the same parish in 1844.",
						   "lat": 51.51817727,
						   "lon": -0.098893044
						 },
						 {
						   "info": "Everard John Mahomed. Evidence from the parish of Saint Bartholomew the Great recorded the burial record for 'Everard John Mahomed [of] No.29 Cloth Fair [aged] 1 year 10 mon [months]' on 17 July 1835. Two younger siblings, Jane and Frederick, were buried in the same parish three years earlier. It is likely they were related to Sake Dean Mahomed, notable as the first person from India to publish a book in English, whose Irish wife Jane Mahomed was buried in the same parish in 1844. ",
						   "lat": 51.519204,
						   "lon": -0.099353169
						 },
						 {
						   "info": "William Mahomed. Evidence from the parish of Saint Bartholomew the Great recorded the burial record for 'William Mahomed [of] Grays Inn Lane [aged] 36 years' on 28 April 1833. Three of his children who died in infancy were buried in the same parish between 1832 and 1835. It is likely they were related to Sake Dean Mahomed, notable as the first person from India to publish a book in English, whose Irish wife Jane Mahomed was buried in the same parish in 1844.",
						   "lat": 51.51980577,
						   "lon": -0.112197874
						 },
						 {
						   "info": "Mary Daussy Lucas . Evidence from the parish of Saint Bride, Fleet Street, recorded the baptism records of 'Mary Daussy Lucas a Native of Madras, supposed to be aged about 15 years, from Mr Hill's, St Bride workhouse' on 30 March 1796. The workhouse was established on Shoe Lane in 1727 and by the 1830s provided accommmodation for 200 inmates.",
						   "lat": 51.51646368,
						   "lon": -0.106202252
						 },
						 {
						   "info": "Charlotte Devon. Evidence from the parish of Saint Dunstan in the West recorded the baptism of 'Charlotte Devon, a Native of the Phillipine[sic] Islands, about 15 years of age; baptized at Mr Sergeant Davy's in Bell Yard' on 1 March 1762. She is the only person in the Switching The Lens dataset hailing from the Philippines. Her relationship to Mr Sargeant Davy is unknown. ",
						   "lat": 51.51432181,
						   "lon": -0.110189545
						 },
						 {
						   "info": "Grace Somes. Evidence from the parish of Saint Alban, Wood Street recorded the burial of 'Grace Somes, a[n] Indian woman from ye [the]  Bell inn' on 8 April 1711. This descriptor does not make clear whether she had connections to the Indian subcontinent or whether she was Indigenous. She is one of the ninety-five people in the Switching the Lens dataset described with this generic label of 'Indian'.",
						   "lat": 51.51676364,
						   "lon": -0.094083564
						 },
						 {
						   "info": "William Symons. Evidence from the parish of Saint Andrew, Holborn recorded the burial of 'William Symons an Ethiopian youth died in Mr Sidlyes house in Chancery Lane the 13th August and buried the 14' in 1646. Note that the term 'Ethiopian' was oftentimes used interchangeably with 'Black' or 'African', meaning William might well have had a different place of origin. His exact age and relationship to Mr Sidley are unknown.",
						   "lat": 51.51726286,
						   "lon": -0.106636521
						 },
						 {
						   "info": "John Rutter. Evidence from the parish of Saint Andrew, Holborn recorded the baptism of 'John Rutter an adult Black from Cross Street about 13 years of age' on 13 October 1766. He is among the forty-four entries in the Switching the Lens dataset for this parish. The labelling of John as an 'adult' brings into question how many of the entries using this term actually refer to children.",
						   "lat": 51.51726286,
						   "lon": -0.106636521
						 },
						 {
						   "info": "Elizabeth. Evidence from the parish of Saint Andrew, Holborn recorded the burial of 'Eliz [Elizabeth] an Ethiophian[sic] maide sert [servant] to Mr Soper Churgeon [surgeon] neare Warwick House buryed' on 2 August 1665. She is among the forty-four entries in the Switching the Lens dataset for this parish. Note that the term 'Ethiopian' was oftentimes used interchangeably with 'Black' or 'African', meaning Elizabeth might well have had a different place of origin.",
						   "lat": 51.51726286,
						   "lon": -0.106636521
						 },
						 {
						   "info": "John Strong. Evidence from the parish of Saint Dunstan in the West recorded the baptism of 'John Strong a black Aged Eighteen years from Shire Lane' on 11 July 1766. He is among the fifty-one entries in the Switching the Lens dataset for this parish. This entry is not to be confused with that of Jonathan Strong from Barbados, the enslaved young man who was aided by Granville Sharp in a legal case against his enslaver following the 1772 Mansfield decision.",
						   "lat": 51.51432181,
						   "lon": -0.110189545
						 },
						 {
						   "info": "Charles Risley . Evidence from the parish of Saint Dunstan in the West recorded the baptism of 'Charles Risley a black man Aged about 40 Years from Serjeant's Inn' on 5 April 1784. He is among the fifty-one entries in the Switching the Lens dataset for this parish.",
						   "lat": 51.51432181,
						   "lon": -0.110189545
						 },
						 {
						   "info": "John Caesar. Evidence from the parish of Saint George the Martyr, Queen Square in 1731 recorded the baptism of 'John Caesar a Black Servt [Servant] to Mr Seirs of East Street.' John Caesar is one of seventy-seven baptisms in the Queen Square parish in the Switching the Lens dataset, nineteen of which were also explicitly recorded to be servants. ",
						   "lat": 51.52102122,
						   "lon": -0.118898924
						 },
						 {
						   "info": "John Christopher. Evidence from the parish of Saint George the Martyr, Queen Square in 1786 recorded the baptism of 'John, son of John & Cecilia Christopher - a Black boy aged 12 years [of] Great Ormond Street'. He is linked with John (father) and Cecilia (mother) Christopher who are recorded to have baptised their son on the 3rd December 1786. ",
						   "lat": 51.52190129,
						   "lon": -0.120111889
						 },
						 {
						   "info": "James Syphax. Evidence from the parish of Saint George the Martyr, Queen Square in 1725 recorded the baptism of 'James (formerly called James Syphax) a Negro servt [servant] of John Cossely of Red Lion Street Esqr [Esquire] with the consent of his sd [said] master in a note under his hand, at church.' The granting of permission from James' master, John Cossely, is interesting to note - given the social norm in eighteenth century London that incorrectly assumed baptism granted former Black slaves freedom. ",
						   "lat": 51.51919757,
						   "lon": -0.118898189
						 },
						 {
						   "info": "Paul Buttoron. Evidence from the parish of Saint George the Martyr, Queen Square in 1781 recorded the baptism of 'Paul Buttoron an Adult & black servant of Mr Serjt Grose Red Lyon Sqre [Red Lion Square].' Paul Buttoron is amongst the five Black people recorded at Red Lion Square, Camden in the Switching the Lens datset. ",
						   "lat": 51.51919757,
						   "lon": -0.118898189
						 },
						 {
						   "info": "Jacob Jeremiah. Evidence from the parish of Saint George the Martyr, Queen Square in 1785 recorded the baptism of 'Jacob S [Son] of Flora Jeremiah, (a negro) [born] Nov 29 1784, Red Lion Square.' Jacob Jeremiah's records state that he was born in 1784, and was therefore baptised as a baby. ",
						   "lat": 51.51919757,
						   "lon": -0.118898189
						 },
						 {
						   "info": "Mary York. Evidence from the parish of Saint George, Bloomsbury in 1760 recorded the baptism of 'Mary York a Black Woman Servant to Mr Chandler in Bloomsbury Square aged 18 Years.' She is amongst the fifty-seven entries in the Switching the Lens dataset for the parish of Saint George, Bloomsbury. ",
						   "lat": 51.51887545,
						   "lon": -0.122764593
						 },
						 {
						   "info": "William Achoa. Evidence from the parish of Saint James, Clerkenwell in 1749 recorded the baptism of 'William Achoa an Adult Person born in Africa Servant to Mr Thomas Warrell of Albermal Street.' He is one of forty other entries in the Switching the Lens dataset for the parish of Saint James, Clerkenwell. William Achoa is also amongst the 251 entrants labelled as 'African'. ",
						   "lat": 51.52630952,
						   "lon": -0.095284779
						 },
						 {
						   "info": "William Antonio. Evidence from the parish of Saint Peter, Regents Square, in 1833 recorded the baptism of 'William Antonio, an African, [who] abode in Wellington Square.' He is amongst the 251 entrants labelled as 'African' so his country of origin is unknown. William is listed as a 'slave' aged 27. He is the only recorded baptism in Saint Peter within the Switching the Lens dataset at this time.",
						   "lat": 51.52680831,
						   "lon": -0.119592718
						 },
						 {
						   "info": "John Clifton. Evidence from the parish of Saint James, Clerkenwell in 1768 recorded the baptism of 'Clifton, a black living with Mrs Calvell in John Street, Bedford Row'. His country of origin is not listed. Though his native, original name is unknown, John was the Anglicised name given to him upon baptism; he 'could not tell when he was born'. He is one of the 25 baptisms in Saint James within the Switching the Lens dataset.",
						   "lat": 51.5220191,
						   "lon": -0.1152565
						 },
						 {
						   "info": "James Summersett [Somerset]. Evidence from the parish of Saint Andrew, Holborn in 1771 recorded the baptism of 'James Summersett an adult Negro... of Baldwin Gardens'. He is amongst the 15 entrants labelled as being from 'North America' so his country or his state of origin is unknown. James is listed as 'about 30 years' at the time of his entry. He is one of the 26 baptisms in Saint Andrew within the Switching the Lens dataset. Summersett would 'appear to be.. the person at the centre of the Mansfield ruling of 1772' which resulted in the ruling that 'no master ever was allowed here [England] to take a slave by force to be sold abroad..'.",
						   "lat": 51.5199223,
						   "lon": -0.1111129
						 },
						 {
						   "info": "John Gilbert. Evidence from the parish of Saint Bride, Fleet Street in 1812 recorded the baptism of 'John S. [son] of John and Mary Gilbert, 11 Lombard Street, a black born [in] Barbados'. He is amongst the 69 entrants described as being natives of Barbados in the set. John is listed as being born in 1764, so he was 48 years old at the time of his baptism. He is one of the 24 baptisms in Saint Bride within the STL dataset.",
						   "lat": 51.5127778,
						   "lon": -0.0875149
						 },
						 {
						   "info": "Mary Easson . Evidence from the parish of Saint Bride, Fleet Street in 1812 recorded the baptism of 'Mary Easson, a black woman, [parents unknown], 13 Surry Street, Strand'. She is amongst the 251 entrants labelled as 'African' so her country of origin is unknown. Mary is listed as a 'servant to a Mrs. M.M. Easson', and 'aged about 40' at the time of her baptism. She is one of the 24 baptisms in Saint Bride within the STL dataset.",
						   "lat": 51.5116951,
						   "lon": -0.1153196
						 },
						 {
						   "info": "Sarah Underwood . Evidence from the parish of Saint Bride, Fleet Street in 1803 recorded the baptism of 'Sarah Underwood, a negro girl residing [in] no.1 Dove Court, New Street Hill'. She is amongst the 10 entrants labelled as being of Guyanese origin, and 8 originating specifically in Demarara. Sarah is listed as 'of about 16 years' at the time of her baptism, so we can assume she was born around 1787. She is one of the 24 baptisms in Saint Bride within the STL dataset.",
						   "lat": 51.51536,
						   "lon": -0.10695
						 },
						 {
						   "info": "Thomas Lucas . Evidence from Saint Bride, Fleet Street in 1804 of the Baptism of 'Thomas Lucas an adult Negro from Martinique, Whitefriars supposed to be aged 28 Years.' There are three people on the Switching the Lens Database from Martinique. There are sixteen matches for Saint Bride, Fleet Street on the Switching the Lens Dataset.",
						   "lat": 51.513143,
						   "lon": -0.10703
						 },
						 {
						   "info": "Phillip Archer . Evidence from Saint Mildred Poultry, in 1802, for the burial of 'Philip Archer Buried in v vt [vestry vault] from counter a blackman.' Poultry compter was a small prison, named for its close proximity to Poultry, and was pulled down in 1817. There are nine entries for Saint Mildred, Poultry, on the Switching the Lens dataset. ",
						   "lat": 51.514092,
						   "lon": -0.091615
						 },
						 {
						   "info": "Rosetta Sarah Weston . Evidence from Saint Sepulchre, Holborn, in 1815 recorded the baptism of 'Rosetta Sarah Weston Daughter of African parents [of] Smithfield Barrs [a] Servant [ceremony performed by] Charles Cornelius Chambers curate.' There are forty-five matches on the Switching the Lens archive for Saint Sepulchre.",
						   "lat": 51.51947507,
						   "lon": -0.101786616
						 },
						 {
						   "info": "Robert  Watson. Evidence from Saint Bride, Fleet Street, in 1803 the baptisms of 'Robert S [Son] of George & Elizabeth Watson, No. 22 Water Lane (late of Jamaica) Born March 21st'. In the Switching the Lens Dataset there are 227 matches for Jamaica as a place of origin. There are also 24 baptisms at Saint Bride, Fleet Street and two burials. ",
						   "lat": 51.51244306,
						   "lon": -0.106193989
						 },
						 {
						   "info": "Charlotte Roberts . Evidence from Saint Dunstan in the West, in 1775 the Baptism of  'Charlotte Roberts, Dr (Daughter] of Lucy Myry of Jamaica born May 23rd, Chancery Lane.'  There are 227 matches for Jamaica as a place of origin and 51 matches for Saint Dunstan in the West in the Switching the Lens dataset . ",
						   "lat": 51.515938,
						   "lon": -0.111804
						 },
						 {
						   "info": "Philip Rowney. Evidence from Saint George the Martyr, Queen Square, in 1815 recorded that 'Philip Rowney a native of Martinique W I [West Indies] and adult [of] 17 Lambs Conduit Street a servant [ceremony performed by] Thos [Thomas] Price.' There are three people from Martinique and 77 matches with Saint George the Martyr, Queen Square in the Switching the Lens database.",
						   "lat": 51.520834,
						   "lon": -0.118193
						 },
						 {
						   "info": "Thomas Tuckett. Evidence from Saint Mary, Islington in 1816, recorded the Baptism of 'Thomas Son of Thomas Williams and Rachel Tuckett [of] Duncan Terrace, Man of Colour Native of Kingston in Jamaica a Servant [born] some time in the year 1795 [ceremony performed by] Revd [Reverend] Mr Alley.' There are 227 matches for Jamaica as a place of origin in the Switching the Lens dataset. There are also ten baptisms and one burial at Saint Mary Islington in the dataset.",
						   "lat": 51.532887,
						   "lon": -0.103678
						 }
						];
							 marker_objects = [];
								/*here starts the loop for setting the markers*/  
							    for (var i = 0; i < markers.length; i++) {
							            var data = markers[i];
							            var content = data.name;
							            var myLatlon = new google.maps.Latlon(data.lat, data.lon);
							            var marker = new google.maps.Marker({
							                position: myLatlon,
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