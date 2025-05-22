const ctx = document.getElementById('myChart').getContext('2d');

const months = [
    'Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн',
    'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'
];

const dataValues = [1, 2, 1.5, 3, 2.5, 4, 3.5, 2, 4.5, 3, 2, 5];
const dataValues2 = [2, 4, 3, 2, 5, 2, 1.5, 4, 2.5, 2, 4, 2.5];

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: '',
                data: dataValues,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                // fill: true,
                // tension: .6,
                pointRadius: 0
            },
            {
                label: '',
                data: dataValues2,
                borderColor: 'red',
                borderWidth: 1,
                // fill: true,
                // tension: .6,
                pointRadius: 0,
                borderDash: [5, 5]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 8
                    },
                    color: 'white',
                }
            },
            y: {
                min: 0,
                max: 5,
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        }
    }
});