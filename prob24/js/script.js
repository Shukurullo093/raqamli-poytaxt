ymaps.ready(init);

let currentMode = 'light';
let map;
function init() {
    map = new ymaps.Map("map", {
        center: [41.314578053930845, 69.25047831274924],
        zoom: 12,
        type: 'yandex#map' 
    });

    var polygonCoordinates = [
            [41.397959470975074, 69.23403486321702],
            [41.357255685865226, 69.16811689682896],
            [41.333027425069545, 69.1626237329633],
            [41.310744371279036, 69.15180162417637],
            [41.28006679416332, 69.14726476493163],
            [41.266001416392456, 69.14669765752605],
            [41.24894841080359, 69.16257666488261],
            [41.229758457888266, 69.17335170558883],
            [41.227199371794676, 69.18469385370067],
            [41.22762589309935, 69.19887153884045],
            [41.23189095311937, 69.20567682770755],
            [41.24169953525792, 69.21361633138581],
            [41.24340522537849, 69.31456144958106],
            [41.23786156971283, 69.32136673844816],
            [41.23786156971283, 69.32760491990967],
            [41.248522028619945, 69.35255764575568],
            [41.26770647207268, 69.36503400867869],
            [41.26813272903575, 69.36616822348988], // 15
            [41.290720365750985, 69.357661612406],
            [41.30648445947063, 69.33951417542708],
            [41.333743085290884, 69.37807747900729],
            [41.33459473363532, 69.37807747900729],
            [41.341407519542706, 69.37580904938494],
            [41.35503095343275, 69.3440510346718],
            [41.36950272840403, 69.32476938288171],
            [41.36907713389997, 69.3259035976929],
            [41.38524776780425, 69.31626277179784],
            [41.38397128498231, 69.28337054227356],
            [41.39716039908299, 69.26068624604989],
            [41.397585809826694, 69.23516641279829]
        ];

    // Polygon yaratish
    var myPolygon = new ymaps.Polygon([polygonCoordinates], 
        {
            // hintContent: "Diqqat! Bu hudud"
        }, {
            fillColor: '#c0e1c088',  
            strokeColor: '#008000',  
            strokeWidth: 3,    
            fillOpacity: 1           
        });

    // Polygonni xaritaga qo'shish
    map.geoObjects.add(myPolygon);

    // var points = [
    //     { coords: [41.295399, 69.288816], title: "Mahalla markazi", color: "red" },
    //     { coords: [41.293465, 69.291356], title: "Tibbiyot markazi" },
    //     { coords: [41.293753, 69.283493], title: "Maktab" },
    //     { coords: [41.289178, 69.279770], title: "Bozor" },
    //     { coords: [41.296027, 69.283388], title: "39-maktab", color: "green" },
    //     { coords: [41.289517, 69.277578], title: "6-oilaviy poliklinika" },
    //     { coords: [41.286014, 69.281301], title: "Supermarket" },
    //     { coords: [41.290720, 69.294592], title: "Tinchlik restoran" },
    //     { coords: [41.292000, 69.287000], title: "Sport zali" },
    //     { coords: [41.294000, 69.282000], title: "Avtobus bekati" },
    //     { coords: [41.295800, 69.290200], title: "Bolalar bog'chasi", color: "blue" },
    //     { coords: [41.296500, 69.285000], title: "Kino teatr" },
    //     { coords: [41.293000, 69.278000], title: "Bank" },
    //     { coords: [41.292500, 69.279500], title: "Apteka" },
    //     { coords: [41.287500, 69.282500], title: "Kitob do'koni" },
    //     { coords: [41.286800, 69.280100], title: "Neft baza" },
    //     { coords: [41.289900, 69.288000], title: "Xususiy klinika" },
    //     { coords: [41.291000, 69.286000], title: "Kafe" },
    //     { coords: [41.290000, 69.284000], title: "Avto xizmat" },
    //     { coords: [41.288000, 69.283000], title: "Yotoqxona", color: "orange" }
    // ];

    const points = convertToLocationData(data);
    // var points = convertedData;

    var clusterer = new ymaps.Clusterer({
        preset: 'islands#invertedVioletClusterIcons',
        groupByCoordinates: false,
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: true
    });

    var placemarks = [];
    points.forEach(function (point, index) {
        var presetColor = point.color ? `islands#${point.color}Icon` : "islands#blueDotIcon";

        var placemark = new ymaps.Placemark(point.coords, {
            hintContent: point.title,
            balloonContent: `
                <div style="font-family: Arial; width: 200px;">
                    <h6 style="margin: 0; font-weight: bold;">${point.title}</h6>
                    <p style="margin: 0;"><strong>Manzil:</strong> ${point.location}</p>
                    <p style="margin: 0;"><strong>Telefon:</strong> +998 ${point.phone}</p>
                </div>`
        }, {
            preset: presetColor
        });

        placemark.events.add('click', function () {
            placemark.options.set({
                iconLayout: 'default#image',
                iconImageHref: '../images/geo-fill.svg',
                iconImageSize: [40, 40], // Iconkaning o‘lchami
                iconImageOffset: [-20, -20] // Markazlash uchun offset
            });
            map.setCenter(point.coords, 20, { checkZoomRange: true });
            // placemark.balloon.open();
            myPolygon.options.set('fillOpacity', 0);
        });

        placemarks.push({ placemark, coords: point.coords, title: point.title.toLowerCase() });
        clusterer.add(placemark);
    });

    document.getElementById('searchBox').addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();

        const found = placemarks.find(p => p.title.includes(query));
        if (found) {
            map.setCenter(found.placemark.geometry.getCoordinates(), 16, { duration: 300 });
            found.placemark.balloon.open();
        }
    });

    window.findNearest = function (selectedIndex) {
        console.log("Selected index:", selectedIndex);
        const selected = placemarks[selectedIndex];
        let minDistance = Infinity;
        let nearest = null;

        placemarks.forEach((pm, i) => {
            if (i === selectedIndex) return; // o'ziga o'xshash bo'lmasin
            const distance = getDistance(selected.coords, pm.coords);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = pm;
            }
        });

        if (nearest) {
            nearest.placemark.balloon.open();
            map.setCenter(nearest.coords, 18);
        }
    };

    function getDistance(coords1, coords2) {
        const rad = x => x * Math.PI / 180;
        const R = 6371; // Yer radiusi km da
        const dLat = rad(coords2[0] - coords1[0]);
        const dLon = rad(coords2[1] - coords1[1]);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(rad(coords1[0])) * Math.cos(rad(coords2[0])) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    // Toggle rejim tugmasi
    // document.getElementById("toggleMode").addEventListener("click", () => {
    //     if (currentMode === 'light') {
    //         map.setType('yandex#hybrid'); // Darkga o‘xshash
    //         document.body.style.background = '#121212';
    //         document.getElementById("toggleMode").textContent = '☀️';
    //         currentMode = 'dark';
    //     } else {
    //         map.setType('yandex#map'); // Light
    //         document.body.style.background = '#f4f4f4';
    //         document.getElementById("toggleMode").textContent = '🌙';
    //         currentMode = 'light';
    //     }
    // });

    map.geoObjects.add(clusterer);
}

function convertToLocationData(originalData) {
  return originalData.map(item => {
    // Extract and convert coordinates
    const coords = item.локация 
      ? item.локация.split(',').map(coord => parseFloat(coord.trim()))
      : [0, 0]; // Default if no location
    
    // Create title from ФИО
    const title = item.ФИО || 'Nomalum';
    const location = item['яшаш манзили'] || 'Nomalum';
    const phone = item['махкумнинг тел раками'] || 'Nomalum';
    
    return {
      coords,
      title,
      location,
      phone
    };
  });
}