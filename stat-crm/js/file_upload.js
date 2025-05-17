document.getElementById('fileInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Birinchi varaq
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Sheet ichidagi barcha kataklarni olish
        const sheetRange = XLSX.utils.decode_range(worksheet['!ref']);
        
        // Qatorni topamiz, u yerda kutilgan sarlavhalar bor
        let startRow = null;
        for (let R = sheetRange.s.r; R <= sheetRange.e.r; ++R) {
            // Har bir ustun uchun kataklarni tekshiramiz
            const c1 = worksheet[XLSX.utils.encode_cell({r: R, c: 0})]; // № ustuni
            const c2 = worksheet[XLSX.utils.encode_cell({r: R, c: 1})]; // F.I.Sh ustuni
            const c3 = worksheet[XLSX.utils.encode_cell({r: R, c: 2})]; // Tug‘ilgan yili ustuni

            // Qiymatlar mavjudligini va to'g'riligini tekshiramiz
            if (
                c1 && c1.v && c1.v.toString().trim() === "№" &&
                c2 && c2.v && c2.v.toString().trim() === "F.I.Sh" &&
                c3 && c3.v && c3.v.toString().trim() === "Tug‘ilgan yili"
            ) {
                startRow = R;
                break;
            }
        }

        if (startRow === null) {
            document.getElementById('excel-table').innerHTML = "<p>Sarlavhalar topilmadi.</p>";
            return;
        }

        // Yangi sheet yaratiladi faqat kerakli qatorlardan
        const newRange = {
            s: { r: startRow, c: 0 },
            e: { r: sheetRange.e.r, c: sheetRange.e.c }
        };

        // yangi !ref yangilanadi (faqat kerakli qatorlar)
        worksheet['!ref'] = XLSX.utils.encode_range(newRange);

        // HTMLga aylantirish
        const html = XLSX.utils.sheet_to_html(worksheet);
        document.getElementById('excel-table').innerHTML = html;
// ----------------------------------------------------------------------
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const headers = jsonData[0];
        // console.log(headers);
        const districtIndex = headers.indexOf("Tuman (shahar)\r\nnomi");
        if (districtIndex === -1) {
            console.log("Tuman (shahar) nomi ustuni topilmadi.");
            return;
        }

        const counts = {};
        for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i];
            const district = row[districtIndex];
            if (district) {
                counts[district] = (counts[district] || 0) + 1;
            }
        }

        const labels = Object.keys(counts);
        const dataValues = Object.values(counts);

        const ctx = document.getElementById('myPieChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tuman bo‘yicha taqsimot',
                    data: dataValues,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderWidth: 1
                }]
            }
        });

        document.getElementById('district').innerText = `Tumanlar kesimida: ${dataValues.reduce((a, b) => a + b, 0)}`;
        // ----------------------------------------------------------------------
        
        const typeIndex = headers.indexOf("Toifasi");
        if (typeIndex === -1) {
            console.log("Toifasi ustuni topilmadi.");
            return;
        }

        const counts1 = {};
        for (let i = 1; i < jsonData.length; i++) {
            const row = jsonData[i];
            // console.log(row[typeIndex]);
            let type = row[typeIndex];
            if(type){
                type = type.trim().replaceAll(' ', '_');
                // console.log(type);
                counts1[type] = (counts1[type] || 0) + 1;
            }
        }
        // console.log(counts1);
        let typeLabels = Object.keys(counts1);
        const typeDataValues = Object.values(counts1);

        typeLabels = typeLabels.map(label => label.slice(0, 30).replaceAll('_', ' '));

        const ctx1 = document.getElementById('myBarChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: typeLabels,
                datasets: [{
                    label: 'Toifalar bo‘yicha taqsimot',
                    data: typeDataValues,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    // barThickness: 6,
                    // maxBarThickness: 8,
                }]
            },
            options: {
                // indexAxis: 'y',
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        document.getElementById('type').innerText = `Toifalar kesimida: ${typeDataValues.reduce((a, b) => a + b, 0)}`;
    };


    reader.readAsArrayBuffer(file);
});
