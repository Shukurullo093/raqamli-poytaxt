
// const headers = Object.keys(data[0]); // Faqat birinchi elementdan ustun nomlarini olamiz

// const select = document.getElementById("category");
// headers.forEach(header => {
//     if (header !== '№' && header !== 'FISh' && header !== 'MFY') {
//         const option = document.createElement("option");
//         option.value = header.trim().replaceAll(' ', '_');
//         option.textContent = header;
//         select.appendChild(option);
//     }            
// });
// tumanlar bo'yicha
const counts = {};
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const district = row['Tuman'];
    if (district) {
        counts[district] = (counts[district] || 0) + 1;
    }
}

const labels = Object.keys(counts);
const dataValues = Object.values(counts);

const ctx = document.getElementById('myPieChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
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
            borderWidth: 1,
            borderColor: 'white'
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white'
                }
            }
        }
    }
});

document.getElementById('district').innerText = `Tumanlar kesimida: ${dataValues.reduce((a, b) => a + b, 0)}`;
// toifalar bo'yicha
const counts1 = {};
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    // console.log(row[typeIndex]);
    let type = row['Toifasi'];
    if(type){
        type = type.trim().replaceAll(' ', '_');
        // console.log(type);
        counts1[type] = (counts1[type] || 0) + 1;
    }
}

let typeLabels = Object.keys(counts1);
const typeDataValues = Object.values(counts1);

typeLabels = typeLabels.map(label => label.slice(0, 40).replaceAll('_', ' '));

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
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            },
            datalabels: {
                anchor: 'end',
                align: 'end', // start
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: function(value) {
                    return value;
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 12
                    }
                },
                beginAtZero: true
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 12
                    }
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});

document.getElementById('type').innerText = `Toifalar kesimida: ${typeDataValues.reduce((a, b) => a + b, 0)}`;

window.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.getElementById('excel-table');
    // console.log(data);
    const data1 = data.slice(0, 10);
    if (data1 && data1.length > 0) {
      const table = document.createElement('table');

      // Head
      const headerRow = document.createElement('tr');
      Object.keys(data1[0]).forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Rows
      data1.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
          const td = document.createElement('td');
          td.innerText = value;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });

      tableContainer.appendChild(table);
    } else {
      tableContainer.innerText = 'Ma\'lumot yo‘q.';
    }
});