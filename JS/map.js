var map = L.map('map').setView([52.489553, 13.391080],  17.5);



L.tileLayer('https://api.mapbox.com/styles/v1/nour-safadi/clrdolfht00ce01p409vphilw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ci1zYWZhZGkiLCJhIjoiY2xwNnh5d2FnMXhsaTJqcWs4ZHFqNXM4aiJ9.cdEJMpU6paLl1t4Lk79MvA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    minZoom:17,
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

var retailTrade = {
    isVisible: true,
    data: [
        {
            name: "Blumen & Garten",
            coords: [52.48998211929252, 13.386888386283214],
            label: "Flower store",
        },

        {
            name: "Paint your Style-Kreuzberg",
            coords: [52.489925332160254, 13.386910868017896],
            label: "Ceramics store",
        },
        
        {
            name: "Toko Satu",
            coords: [52.489381666858904, 13.390916058539075],
            label: "Clothing store",
        },
        
        {
            name: "24Colours",
            coords: [52.4893845472664, 13.391048520318753],
            label: "Clothing store",
        },
        
        {
            name: "Oxfam Shop",
            coords: [52.48924203802755, 13.391561882234052],
            label: "Clothing store",
        },

        {
            name: "GattaSchuhe",
            coords: [52.489276744082765, 13.391752989678025],
            label: "Shoes store",
        },
          
        {
            name: "PhonoPhono",
            coords: [52.489162417985455, 13.391954155077425],
            label: "Audio equipment store",
        },
          
        {
            name: "PERLENMARKT",
            coords: [52.48919349377406, 13.392009952447728],
            label: "Glass bead shop",
        },
          
        {
            name: "Ete Clothing Surfshop",
            coords: [52.48919349377406, 13.392009952447728],
            label: "Clothing store",
        },
          
        {
            name: "Schwesterherz",
            coords: [52.489159288589896, 13.39264696849812],
            label: "Gifts shop",
        },
          
        {
            name: "Schmuckgalerie Aquamarin",
            coords: [52.4890917224496, 13.393177676732861],
            label: "Jewelry",
        },
          
        {
            name: "Gold Shaker",
            coords: [52.49016628876279, 13.387385810295443],
            label: "Jewelry",
        },
          
        {
            name: "Kommedia Buchhandlung GmbH",
            coords: [52.489343576167336, 13.393998474558884],
            label: "Book store",
        },
          
        {
            name: "Cucinotto",
            coords: [52.49015589340654, 13.387503505446993],
            label: "Kitchen equipments shop",
        },

        {
            name: "Leder Dago Engler",
            coords: [52.48969636828241, 13.39075420117773],
            label: "Leather trade store",
        },

        {
            name: "BANANAS Berlin",
            coords: [52.489692285194224, 13.390752189526335],
            label: "Clothing store",
        },

        {
            name: "CAYAMBE HUTMANUFAKTUR",
            coords: [52.48970657579409, 13.390611373370044],
            label: "Hate store",
        },

        {
            name: "Ararat Postkartenladen",
            coords: [52.48973556522176, 13.390457146425671],
            label: "Postcards shop",
        },

        {
            name: "Plaste+Elaste",
            coords: [52.48999687746109, 13.388606422237224],
            label: "Clothes shop",
        },
        // Add other locations
    ],
    markers: [] // This will store Leaflet circle objects
};

var food = {
    isVisible: true,
    data: [
        {
            name: "BABIKYU",
            coords: [52.48987093481257, 13.387466028777467],
            label: "Restaurant",
        },

        {
            name: "India",
            coords: [52.4897955855133, 13.389983736426467],
            label: "Restaurant",
        },

        {
            name: "Frau Behrens Torten Kreuzberg",
            coords: [52.489833257778734, 13.387917756239245],
            label: "Sweets store",
        },
    
        {
            name: "Kiez Keb Up",
            coords: [52.489753546291304, 13.388438562628815],
            label: "Fastfood",
        },
    
        {
            name: "Gelato Rallo",
            coords: [52.48970168598701, 13.388953409068332],
            label: "Ice shop",
        },
    
        {
            name: "Coffee Circle Café",
            coords: [52.48957582987815, 13.389828890781452],
            label: "Café",
        },

        {
            name: "Hako Ramen Kreuzberg",
            coords: [52.489458819005996, 13.390509258835825],
            label: "Restaurant",
        },
        
        {
            name: "Café Milagro",
            coords: [52.489411257731945, 13.390802039694304],
            label: "Café",
        },

        {
            name: "Hako Ramen Kreuzberg",
            coords: [52.48945937093871, 13.390516532002682],
            label: "Restaurant",
        },

        {
            name: "The Vegan Monkey",
            coords: [52.48944204746956, 13.390587935998067],
            label: "Restaurant",
        },

        {
            name: "Piccola Romantica",
            coords: [52.48914255537894, 13.392413382042527],
            label: "Restaurant",
        },

        {
            name: "Café Milagro",
            coords: [52.48941346638942, 13.390800501189915],
            label: "Café",
        },

        {
            name: "Barcomi’s Café & Kaffeerösterei",
            coords: [52.4889936738555, 13.393777735220212],
            label: "Café",
        },

        {
            name: "breakout Cafe",
            coords: [52.48904057939053, 13.393417508582862],
            label: "Café",
        },

        {
            name: "tanne B Eis Berlin",
            coords: [52.48926223251009, 13.393999605722476],
            label: "Café",
        },

        {
            name: "Que Pasa",
            coords: [52.48930990786252, 13.393575482499587],
            label: "Restaurant",
        },

        {
            name: "Pagode Thai Kitchen",
            coords: [52.48933389456423, 13.393447455260883],
            label: "Restaurant",
        },

        {
            name: "Grande Gyros",
            coords: [52.48927392772471, 13.39336942746858],
            label: "Restaurant",
        },

        {
            name: "Kamiko Sushi",
            coords: [52.48935326836469, 13.393177766020354],
            label: "Restaurant",
        },

        {
            name: "Aki Ryu Restaurant",
            coords: [52.48946646527963, 13.392353530517518],
            label: "Restaurant",
        },

        {
            name: "Sahara Imbiss Sudanesische Spezialitäten",
            coords: [52.489537111773906, 13.391789638502543],
            label: "Restaurant",
        },
        
        {
            name: "Huong Que",
            coords: [52.4896816695596, 13.391263820923879],
            label: "Restaurant",
        },

        {
            name: "Umami X-Berg",
            coords: [52.48966002941643, 13.391064666760947],
            label: "Restaurant",
        },

        {
            name: "Knofi Feinkost",
            coords: [52.48969514337362, 13.390899039845971],
            label: "Restaurant",
        },

        {
            name: "Umami X-Berg",
            coords: [52.48966002941643, 13.391064666760947],
            label: "Restaurant",
        },

        {
            name: "Swera - Restaurant & Cocktailbarg",
            coords: [52.48993073298017, 13.389175720922166],
            label: "Restaurant",
        },

        {
            name: "King King X-Berg",
            coords: [52.49010608106059, 13.387925953353482],
            label: "Restaurant",
        },

        {
            name: "Fräulein Nimmersatt",
            coords: [52.490164059369896, 13.387767703186675],
            label: "Cafe",
        },

        {
            name: "Möge Tee",
            coords: [52.48959919234415, 13.391539417921893],
            label: "Cafe",
        },

        {
            name: "turandot bar",
            coords: [52.48950117117467, 13.392198633055173],
            label: "Bar",
        },

        {
            name: "Suspiria Bar",
            coords: [52.49002709178662, 13.389019482198536],
            label: "Bar",
        },

        {
            name: "Sams Bar",
            coords: [52.48996053874411, 13.388913534882082],
            label: "Bar",
        },

        {
            name: "EINSTEIN KAFFEE",
            coords: [52.48997482930305, 13.388823681125123],
            label: "Cafe",
        },
    ],
    markers: [],
};


var healthcare = {
    isVisible: true,
    data: [
        {
            name: "Zahnarztpraxis am Kreuzberg",
            coords: [52.48983589414259, 13.387819744148054],
            label: "Dentist",
        },

        {
            name: "Optik Zentrum Brillen aus Kreuzberg",
            coords: [52.489791926919764, 13.388238738879048],
            label: "Optician shop",
        },

        {
            name: "Ace & Tate",
            coords: [52.48960143809969, 13.391735135081726],
            label: "Optician shop",
        },
        
        {
            name: "Augenärzte Bergmannstraße",
            coords: [52.489463154520536, 13.388579360877333],
            label: "Ophthalmologist",
        },

        {
            name: "REHA Bergmannstraße 5 GmbH",
            coords: [52.48973802483905, 13.388512856242885],
            label: "Reha",
        },
      
        {
            name: "Gesundheitszentrum Bergmannstraße",
            coords: [52.48972577578517, 13.38870932805798],
            label: "Health Center Center",
        },
      
        {
            name: "Kaiser Apotheke",
            coords: [52.48893665504414, 13.393890792508554],
            label: "Pharmacy",
        },
      
        {
            name: "KREUZBERG-APOTHEKE",
            coords: [52.4902405987624, 13.386984819890007],
            label: "Pharmacy",
        },

        {
            name: "Praxis Dema Physio- & Ergotherapie",
            coords: [52.48890963235234, 13.394241770992254],
            label: "Physiotherapy",
        },
    

        {
            name: "Praxis für Pränatale Diagnostik",
            coords: [52.489928691495834, 13.3893239132353],
            label: "Prenatal diagnostics",
        },

        {
            name: "Gabriele Scherzer",
            coords: [52.490120371373855, 13.387750268349482],
            label: "General Doctor",
        },
    
    ],
    markers: [],
};

var supermarket = {
    isVisible: true,
    data: [
        {
            name: "EDEKA Bergmannstraße",
            coords: [52.48973068160645, 13.388579379703618],
            label: "Supermarket",
        },
    
        {
            name: "Netto Marken-Discount",
            coords: [52.48965320269644, 13.388904163275757],
            label: "Supermarket",
        },
    
        {
            name: "SATICI",
            coords: [52.48904874539641, 13.393537537529536],
            label: "Supermarket",
        },

        {
            name: "dm-drogerie markt",
            coords: [52.48988051206888, 13.389583416903205],
            label: "drugstore",
        },

        {
            name: "Belladonna Naturkosmetik",
            coords: [52.490024013006554, 13.388473794562593],
            label: "drugstore",
        },
    ],
    markers: [],
};

var service = {
    isVisible: true,
    data: [
        {
            name: "nextbike Berlin",
            coords: [52.48898869517173, 13.394565374430531],
            label: "Bike Service",
        },

        {
            name: "Donkey Republic",
            coords: [52.489079149907795, 13.394504210307996],
            label: "Bike Service",
        },

        {
            name: "nextbike Berlin",
            coords: [52.48924947930263, 13.393267157164898],
            label: "Bike Service",
        },

        {
            name: "nextbike Berlin",
            coords: [52.48946850680079, 13.391746680818018],
            label: "Bike Service",
        },
        
        {
            name: "Donkey Republic",
            coords: [52.48938602922958, 13.392304580384545],
            label: "Bike Service",
        },

        {
            name: "Donkey Republic",
            coords: [52.489738014516995, 13.389881142022091],
            label: "Bike Service",
        },

        {
            name: "Two Fine Wheels Berlin",
            coords: [52.48924947930263, 13.393267157164898],
            label: "Bike store",
        },

        {
            name: "Hello Nails and Spa",
            coords: [52.48940631609573, 13.392795198967043],
            label: "beauty shop",
        },

        {
            name: "Chemische Reinigung Jovan u. Dragan Davcik",
            coords: [52.48940631609573, 13.392795198967043],
            label: "Cleaning serveice",
        },

        {
            name: "LimeLight PR",
            coords: [52.489978504055394, 13.389162980736854],
            label: "PR Company",
        },

        {
            name: "Schnittstelle Friseure AVEDA",
            coords: [52.490047693874644, 13.388270617301753],
            label: "Barber shop",
        },

        {
            name: "Verlockung der Friseur",
            coords: [52.49026223834407, 13.3871115546995],
            label: "Barber shop",
        },

        {
            name: "MountainMan's Barber",
            coords: [52.49023733147308, 13.387338201852538],
            label: "Barber shop",
        },
    ],
    markers: [],
};

var spaeti = {
    isVisible: true,
    data: [
        {
            name: "Goetz",
            coords: [52.489645097319546, 13.389288607177921],
            label: "Späti",
        },
    
        {
            name: "Özün, Katarzyna",
            coords: [52.48955900563764, 13.389910297570694],
            label: "Späti",
        },

        {
            name: "Bella Späti",
            coords: [52.489425715476976, 13.390737469315248],
            label: "Späti",
        },
    ],
    markers: [],
};

var social = {
    isVisible: true,
    data: [
        {
            name: "Stadtteilausschuß Kreuzberg e.V.",
            coords: [52.48925734297791, 13.391276108219056],
            label: "Social Club",
        },
        
        {
            name: "Stadtteilausschuß Kreuzberg e.V.",
            coords: [52.48925734297791, 13.391276108219056],
            label: "Social Club",
        },
        
        {
            name: "mp Warming",
            coords: [52.48910699281107, 13.39307666842444],
            label: "Art Gallery",
        },

        {
            name: "HOTO - Gallery & Residency",
            coords: [52.490078725014214, 13.38802452461532],
            label: "Art Gallery",
        },

        {
            name: "Sichtbar e.V",
            coords: [52.48908196638231, 13.393218776633592],
            label: "club or organization",
        },
    ],
    markers: [],
};



    
var initialLat = 52.489553;
var initialLng = 13.391080;
var initialZoom = 17.5;
 

function resetMapView() {
    map.setView([initialLat, initialLng], initialZoom);
}

document.getElementById('resetMapView').addEventListener('click', resetMapView);

function retailTradeMarkers (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#FFCD29',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function foodMarkers (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#F24822',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function healthcareMarkers (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#0D99FF',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function supermarketMarkers (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#14AE5C',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function serviceMarker (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#a22d81',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function socialMarkers (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#ff00b7',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function spaetiMarkers (category) {
    category.data.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#B1FFA4',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);
        category.markers.push(circle);
    });
}

function toggleCategoryVisibility(categoryName) {
    var category = window[categoryName];
    if (!category) return;

    category.isVisible = !category.isVisible; 

    category.markers.forEach(marker => {
        if (category.isVisible) {
        marker.addTo(map); 
        } else {
        map.removeLayer(marker); 
        }
    });

    var button = document.getElementById(categoryName + 'Btn');
    if (button) {
        button.classList.toggle('active', category.isVisible);
    }
}


retailTradeMarkers(retailTrade);
foodMarkers(food);
healthcareMarkers(healthcare);
supermarketMarkers(supermarket);
serviceMarker(service);
socialMarkers(social);
spaetiMarkers(spaeti);
serviceMarker(service);

    