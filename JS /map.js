    // Initialize the map
    // document.addEventListener('DOMContentLoaded', function() {

    var map = L.map('map').setView([52.489415, 13.392281], 17);

    // Integrate Mapbox
    L.tileLayer('https://api.mapbox.com/styles/v1/nour-safadi/clrdolfht00ce01p409vphilw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ci1zYWZhZGkiLCJhIjoiY2xwNnh5d2FnMXhsaTJqcWs4ZHFqNXM4aiJ9.cdEJMpU6paLl1t4Lk79MvA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        minZoom:17,
        maxZoom: 19,
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);


    // Define locations 
    var locations = [
        {
            name: "Marheineke Markthalle",
            coords: [52.48922871774201, 13.394424191124616],
            label: "Historical",
            imageUrl: "../Materials /images/Marheineke-Markthalle_B-Kreuzberg_06-2017_img1.jpg" // Replace with actual image path
        },
        {
            name: "Passionskirche",
            coords: [52.48942454811764, 13.39713715986819],
            label: "Historical",
            imageUrl: "../Materials /images/Passionskirche.jpeg" 
        }
    
    ];
    var retailtrade = [
        {
            name: "Blumen & Garten",
            coords: [52.48998211929252, 13.386888386283214],
            label: "Flower store",
            imageUrl: ""
        },
        
        
        {
            name: "Paint your Style-Kreuzberg",
            coords: [52.489925332160254, 13.386910868017896],
            label: "Ceramics store",
            imageUrl: ""
        },
    ];


    var food = [
    
        {
            name: "BABIKYU",
            coords: [52.48987093481257, 13.387466028777467],
            label: "Restaurant",
            imageUrl: ""
        },

        {
            name: "Frau Behrens Torten Kreuzberg",
            coords: [52.489833257778734, 13.387917756239245],
            label: "Sweets store",
            imageUrl: ""
        },
    
        {
            name: "Kiez Keb Up",
            coords: [52.489753546291304, 13.388438562628815],
            label: "Fastfood",
            imageUrl: ""
        },
    
        {
            name: "Gelato Rallo",
            coords: [52.48970168598701, 13.388953409068332],
            label: "Ice shop",
            imageUrl: ""
        },
    
        {
            name: "Coffee Circle Café",
            coords: [52.48957582987815, 13.389828890781452],
            label: "Cafe",
            imageUrl: ""
        },
        {
            name: "Hako Ramen Kreuzberg",
            coords: [52.489458819005996, 13.390509258835825],
            label: "Restaurant",
            imageUrl: ""
        },
        
        {
            name: "Cafe Milagro",
            coords: [52.489411257731945, 13.390802039694304],
            label: "Cafe",
            imageUrl: ""
        },
    

        // {
        //     name: "",
        //     coords: [],
        //     label: "",
        //     imageUrl: ""
        // },
    

        
        
    ];

    var healthcare = [
    
        {
            name: "Zahnarztpraxis am Kreuzberg",
            coords: [52.48983589414259, 13.387819744148054],
            label: "Dentist",
            imageUrl: ""
        },

        {
            name: "Optik Zentrum Brillen aus Kreuzberg",
            coords: [52.489791926919764, 13.388238738879048],
            label: "Optician shop",
            imageUrl: ""
        },
        
        {
            name: "Augenärzte Bergmannstraße",
            coords: [52.489463154520536, 13.388579360877333],
            label: "Ophthalmologist",
            imageUrl: ""
        },

        {
            name: "REHA Bergmannstraße 5 GmbH",
            coords: [52.48973802483905, 13.388512856242885],
            label: "Reha",
            imageUrl: ""
        },
      
        {
            name: "Gesundheitszentrum Bergmannstraße",
            coords: [52.48972577578517, 13.38870932805798],
            label: "Health Center Center",
            imageUrl: ""
        },

        // {
        //     name: "",
        //     coords: [],
        //     label: "",
        //     imageUrl: ""
        // },
    ];

    var supermarket = [
    
        {
            name: "EDEKA Bergmannstraße",
            coords: [52.48973068160645, 13.388579379703618],
            label: "Supermarket",
            imageUrl: ""
        },
    
        {
            name: "Netto Marken-Discount",
            coords: [52.48965320269644, 13.388904163275757],
            label: "Supermarket",
            imageUrl: ""
        },
    
        // {
        //     name: "",
        //     coords: [, ],
        //     label: "",
        //     imageUrl: ""
        // },
    ];

    var service = [
    
        {
            name: "Goetz",
            coords: [52.489645097319546, 13.389288607177921 ],
            label: "",
            imageUrl: ""
        }
    ];

    var spaeti = [
    
        {
            name: "Özün, Katarzyna",
            coords: [52.48955900563764, 13.389910297570694],
            label: "Späti",
            imageUrl: ""
        },
    
        // {
        //     name: "",
        //     coords: [, ],
        //     label: "",
        //     imageUrl: ""
        // },
    ];

    var social = [
    
        {
            name: "Stadtteilausschuß Kreuzberg e.V.",
            coords: [52.48925734297791, 13.391276108219056],
            label: "Social Club",
            imageUrl: ""
        },
    
        // {
        //     name: "",
        //     coords: [, ],
        //     label: "",
        //     imageUrl: ""
        // }
    ];

    // Create circles and add click event
    locations.forEach(function(location) {
        var circle = L.circle(location.coords, {
            color: 'none',
            fillColor: '#f03',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

        circle.on('click', function() {
            openLightbox(location);
        });
    });

    retailtrade.forEach(function(retailtrades) {
        var circle = L.circle(retailtrades.coords, {
            color: 'none',
            fillColor: '#FFCD29',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(retailtrades);
        });
    });

    
    food.forEach(function(food) {
        var circle = L.circle(food.coords, {
            color: 'none',
            fillColor: '#F24822',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(food);
        });
    });

    
    healthcare.forEach(function(healthcare) {
        var circle = L.circle(healthcare.coords, {
            color: 'none',
            fillColor: '#0D99FF',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(healthcare);
        });
    });
    
    supermarket.forEach(function(supermarket) {
        var circle = L.circle(supermarket.coords, {
            color: 'none',
            fillColor: '#14AE5C',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(supermarket);
        });
    });
    
    service.forEach(function(service) {
        var circle = L.circle(service.coords, {
            color: 'none',
            fillColor: '#9747FF',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(service);
        });
    });
    
    spaeti.forEach(function(spaeti) {
        var circle = L.circle(spaeti.coords, {
            color: 'none',
            fillColor: '#B1FFA4',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(spaeti);
        });
    });
    
    social.forEach(function(social) {
        var circle = L.circle(social.coords, {
            color: 'none',
            fillColor: '#FF47CB',
            fillOpacity: 0.8,
            radius: 5
        }).addTo(map);

    
        circle.on('click', function() {
            openLightbox(social);
        });
    });

    

    // Function to open lightbox
    function openLightbox(location) {
        var lightbox = document.querySelector('.lightbox');
        var lightboxClose = document.querySelector('.lightboxClose');
        var lightboxContent = document.querySelector('.lightbox-content');

        
        
        lightboxContent.innerHTML = `

            <img class="lightbox-img" src="${location.imageUrl}" alt="${location.name}">
            <p class="lightboxText">${location.name} - ${location.label}</p>
        `;
        lightboxClose.innerHTML = `<button class="LightboxBtn" onclick="closeLightbox()">X</button>`;

        lightbox.style.display = 'block';
    }

    // Function to close lightbox
    function closeLightbox() {
        document.querySelector('.lightbox').style.display = 'none';
    }

    // Assuming initialLat, initialLng, and initialZoom are your map's initial view settings
    var initialLat =52.489415;
    var initialLng = 13.392281;
    var initialZoom = 17.5;


    function resetMapView() {
        map.setView([initialLat, initialLng], initialZoom);
    }

    // Attach event listener to the button
    document.getElementById('resetMapView').addEventListener('click', resetMapView);
