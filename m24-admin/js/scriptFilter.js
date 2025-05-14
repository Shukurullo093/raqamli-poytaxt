const districtsByRegion = {
    "Andijon": ["Andijon sh.", "Asaka", "Xonobod", "Buloqboshi"],
    "Buxoro": ["Buxoro sh.", "G‘ijduvon", "Kogon", "Qorako‘l"],
    "Farg‘ona": ["Farg‘ona sh.", "Qo‘qon", "Marg‘ilon", "Oltiariq"],
    "Jizzax": ["Jizzax sh.", "Zomin", "Do‘stlik", "Paxtakor"],
    "Xorazm": ["Urganch", "Xiva", "Gurlan", "Shovot"],
    "Namangan": ["Namangan sh.", "Chust", "Pop", "Uychi"],
    "Navoiy": ["Navoiy sh.", "Zarafshon", "Uchquduq", "Karmana"],
    "Qashqadaryo": ["Qarshi", "Shahrisabz", "G‘uzor", "Kitob"],
    "Qoraqalpog‘iston": ["Nukus", "To‘rtko‘l", "Xo‘jayli", "Mo‘ynoq"],
    "Samarqand": ["Samarqand sh.", "Urgut", "Kattaqo‘rg‘on", "Narpay"],
    "Sirdaryo": ["Guliston", "Boyovut", "Sardoba", "Yangiyer"],
    "Surxondaryo": ["Termiz", "Denov", "Sherobod", "Qumqo‘rg‘on"],
    "Toshkent": ["Toshkent sh.", "Chilonzor", "Yunusobod", "Olmazor"]
};

// Viloyat o‘zgarganda tumanlarni yangilash
document.getElementById("region").addEventListener("change", function() {
    let region = this.value;
    let districtSelect = document.getElementById("district");

    districtSelect.innerHTML = '<option value="">Tumanni tanlang</option>';

    if (region && districtsByRegion[region]) {
        districtsByRegion[region].forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }

    updateMap(region);
});

// Tumanni tanlaganda xaritani yangilash
document.getElementById("district").addEventListener("change", function() {
    let region = document.getElementById("region").value;
    let district = this.value;
    
    if (region && district) {
        updateMap(`${district}, ${region}`);
    }
});

// Qidirish tugmasi bosilganda
// document.getElementById("search-btn").addEventListener("click", function() {
//     let region = document.getElementById("region").value;
//     let district = document.getElementById("district").value;
//     let searchQuery = document.getElementById("search").value;

//     if (searchQuery) {
//         updateMap(`${searchQuery}, ${district}, ${region}`);
//     } else if (district) {
//         updateMap(`${district}, ${region}`);
//     } else if (region) {
//         updateMap(region);
//     }
// });

// Xarita URL'ni yangilash
function updateMap(location) {
    if (location) {
        let mapUrl = `https://yandex.uz/maps/?text=${encodeURIComponent(location)}`;
        document.getElementById("map").src = mapUrl;
    }
}
