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
        center: [41.295399, 69.288816], // Urganch koordinatalari
        zoom: 14
    });

    // Markerlar
    var markers = [
        { coords: [41.5503, 60.6316], title: "Mahalla markazi", color: "red" },
        { coords: [41.5523, 60.6336], title: "Tibbiyot markazi" },
        { coords: [41.5485, 60.6290], title: "Maktab" },
        { coords: [41.5515, 60.6282], title: "Bozor" }
    ];

    markers.forEach(function (point) {
        var placemark = new ymaps.Placemark(point.coords, {
            hintContent: point.title,
            balloonContent: point.title
        });

        map.geoObjects.add(placemark);
    });
}
