// let baseUrl = 'http://localhost:3000'

// window.onload = async function(){
//     const id = localStorage.getItem('adminId');
//     if (id !== null){
//         const res = await fetch(baseUrl + `/admin/${id}`, {
//             method: 'GET',
//             // headers: { 'Content-Type': 'application/json' },
//             // body: JSON.stringify({ login, telefon })
//         });

//         const data = await res.json();
//         console.log(data);
//         document.getElementById('adminName').innerText = formattedName(data.FISH);
//         document.getElementById('role').innerText = data.vazifa;
//     }
// }

// function formattedName(fullname){
//     return fullname.split(' ')[0] + ' ' + fullname.split(' ')[1][0] + '.'
// }

ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [41.295399, 69.288816], 
        zoom: 14
    });

    // Markerlar
    var markers = [
        { coords: [41.295399, 69.288816], title: "Mahalla markazi", color: "red" },
        { coords: [41.293465, 69.291356], title: "Tibbiyot markazi" },
        { coords: [41.293753, 69.283493], title: "Maktab" },
        { coords: [41.289178, 69.279770], title: "Bozor" },
        { coords: [41.296027, 69.283388], title: "39-maktab", color: "red" },
        { coords: [41.289517, 69.277578], title: "6-oilaviy poliklinika" },
        { coords: [41.286014, 69.281301], title: "Supermarket" },
        { coords: [41.290720, 69.294592], title: "Tinchlik restoran" }
    ];

    markers.forEach(function (point) {
        var placemark = new ymaps.Placemark(point.coords, {
            hintContent: point.title,
            balloonContent: point.title
        });

        map.geoObjects.add(placemark);
    });
}
