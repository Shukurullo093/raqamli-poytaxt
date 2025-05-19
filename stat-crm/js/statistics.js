const counts = {};
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const youth = standardizeDate(row['Tugilgan yili']);
    if (youth) {
        counts[youth] = (counts[youth] || 0) + 1;
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
            label: 'Yoshlar bo‘yicha taqsimot',
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

document.getElementById('youth').innerText = `Yoshlar kesimida: ${dataValues.reduce((a, b) => a + b, 0)}`;

// toifalar kesimida
const categoryDict = {};
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const category = (row['Toifasi']);
    if (category) {
        categoryDict[category] = (categoryDict[category] || 0) + 1;
    }
}

const categoryLabels = Object.keys(categoryDict);
const categoryDataValues = Object.values(categoryDict);

var chartOptions = {
    chart: {
        height: 400,
        type: 'line',
        fontFamily: 'Helvetica, Arial, sans-serif',
        foreColor: '#6E729B',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [
        {
            name: 'Soni',
            data: categoryDataValues,
        }
    ],
    markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
            size: 9,
        },
    },
    grid: {
        show: true,
        padding: {
            bottom: 0,
        },
    },
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '7px',
            fontWeight: 'normal',
        },
    },
    labels: categoryLabels,
    xaxis: {
        tooltip: {
            enabled: false,
        },
        labels: {
            style: {
                fontSize: '9px',
                colors: '#6E729B'
            }
        },
    }
};

var lineChart = new ApexCharts(document.querySelector('#categoryChart'), chartOptions);
lineChart.render();
