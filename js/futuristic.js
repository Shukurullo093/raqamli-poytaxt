const menuCards = document.querySelectorAll('.menu-card');
const featureCards = document.querySelectorAll('.feature-card');
const aiResultBtns = document.querySelectorAll('.ai-result-btn');
const aiResultCards = document.querySelectorAll('.ai-result-card');
let isAnalyzing = false;
let statusInterval = null;

function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('modal').classList.add('active');
    // const modal = new bootstrap.Modal(document.getElementById('modal'));
    // modal.show();
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.getElementById('modal').classList.remove('active');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

menuCards.forEach((menuCard, index) => {
    menuCard.addEventListener('click', () => {
        // 1. Menyu kartalardan 'active' klassini olib tashlaymiz
        menuCards.forEach(card => card.classList.remove('active'));
        // 2. Faol kartaga 'active' klassini qo‘shamiz
        menuCard.classList.add('active');

        // 3. Barcha feature-cardlardan 'active' klassini olib tashlaymiz
        featureCards.forEach(card => card.classList.remove('active'));
        // 4. Mos feature-cardga 'active' klassini qo‘shamiz
        featureCards[index].classList.add('active');
        closeModal();
    });
});

aiResultBtns.forEach((menuCard, index) => {
    menuCard.addEventListener('click', () => {
        // 1. Menyu kartalardan 'active' klassini olib tashlaymiz
        aiResultBtns.forEach(card => card.classList.remove('active'));
        // 2. Faol kartaga 'active' klassini qo‘shamiz
        menuCard.classList.add('active');

        // 3. Barcha feature-cardlardan 'active' klassini olib tashlaymiz
        aiResultCards.forEach(card => card.classList.remove('active'));
        // 4. Mos feature-cardga 'active' klassini qo‘shamiz
        aiResultCards[index].classList.add('active');
        // closeModal();
    });
});

// ai recommendation
function startAIAnalysis() {
    if (isAnalyzing) return;
    isAnalyzing = true;

    // Reset UI state before starting
    document.getElementById('initialState').style.display = 'none';
    document.getElementById('aiProcessing').style.display = 'block';
    document.getElementById('aiStatusText').style.display = 'block';
    // document.getElementsByClassName('typing-cursor')[0].style.display = 'inline-block';
    document.getElementsByClassName('get-recommendations-proof-btn')[0].classList.add('d-none');
    
    const statusMessages = [
        "Маълумотлар таҳлил қилинмоқда",
        "Жиноятлар статистикаси ўрганилмоқда",
        "Хавфли ҳудудлар аниқланмоқда",
        "Энг самарали чоралар танланмоқда",
        "Тавсиялар тайёрланмоқда"
    ];
    
    let statusIndex = 0;
    if (statusInterval) clearInterval(statusInterval); // clear old intervals
    document.getElementsByClassName('fa-arrow-rotate-left')[0].classList.add('d-none');

    statusInterval = setInterval(() => {
        if (statusIndex < statusMessages.length) {
            document.getElementById('aiStatusText').textContent = statusMessages[statusIndex];
            statusIndex++;
        } else {
            clearInterval(statusInterval);
            // document.getElementsByClassName('typing-cursor')[0].style.display = "none";
            document.getElementById('aiStatusText').textContent = "Тавсиялар тайёр";
            setTimeout(() => {
                document.getElementById('aiStatusText').style.display = "none";
                document.getElementsByClassName('get-recommendations-proof-btn')[0].classList.remove('d-none');
                document.getElementsByClassName('fa-arrow-rotate-left')[0].classList.remove('d-none');
                isAnalyzing = false; // allow restart
            }, 3000);
        }
    }, 1500);

    // Show recommendations (delayed to sync with statuses)
    setTimeout(() => {
        showRecommendations();
    }, 3000);
}

function showRecommendations() {
    const cards = ['highPriorityCard', 'mediumPriorityCard', 'lowPriorityCard'];

    cards.forEach((cardId, index) => {
        const card = document.getElementById(cardId);
        card.classList.remove('show');
    });
    
    cards.forEach((cardId, index) => {
        setTimeout(() => {
            const card = document.getElementById(cardId);
            card.classList.add('show');
            
            // Show items with typing effect
            setTimeout(() => {
                showCardItems(cardId);
            }, 500);
        }, index * 1500);
    });
    
    // Show resource comets
    // setTimeout(() => {
    //     showResourceComets();
    // }, 8000);
}

function showCardItems(cardId) {
    const card = document.getElementById(cardId);
    const items = card.querySelectorAll('.prevention-item');
    
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
            
            // Typing effect for text
            const textSpan = item.querySelector('.prevention-item-text');
            const fullText = textSpan.getAttribute('data-text');
            textSpan.textContent = '';
            
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < fullText.length) {
                    textSpan.textContent += fullText[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 30);
            
        }, index * 800);
    });
}

function showResourceComets() {
    const comets = document.querySelectorAll('.resource-comet');
    
    comets.forEach((comet, index) => {
        setTimeout(() => {
            comet.classList.add('animate');
        }, index * 1000);
    });
}

function proveRecommendation() {
    document.getElementById('aianimation').style.display = 'none';
    document.getElementById('aiRecommadation').classList.remove('col-lg-8');
    document.getElementById('aiRecommadation').classList.add('col-lg-6');
    document.getElementById('recProve').classList.toggle('d-none');
    document.getElementById('getBackBtn').classList.toggle('d-none');
    // showRecommendations('recProve')
}

function reverseRecommendation() {
    document.getElementById('aianimation').style.display = 'block';
    document.getElementById('aiRecommadation').classList.remove('col-lg-6');
    document.getElementById('aiRecommadation').classList.add('col-lg-8');
    document.getElementById('recProve').classList.toggle('d-none');
    document.getElementById('getBackBtn').classList.toggle('d-none');
}

// ##################################################
// crime section charts begin
// ##################################################

let crimeData = data3.filter(item => item.crime_type === "Безорилик"); //Безорилик, Ўғрилик
let chart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const months = [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
        'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
    ];

    const krillMonth = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентабрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ]

    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split('.');
        return new Date(year, month - 1, day);
    }

    function initializeFilters() {
        const yearSelect = document.getElementById('yearSelect');
        const monthSelect = document.getElementById('monthSelect');
        const neighborhoodSelect = document.getElementById('neighborhoodSelect');

        // Get unique years
        const years = [...new Set(crimeData.map(item => parseDate(item.date).getFullYear()))].sort();
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });

        // Add months
        months.forEach((month, index) => {
            const option = document.createElement('option');
            option.value = index + 1;
            option.textContent = krillMonth[index];
            monthSelect.appendChild(option);
        });

        // Get unique neighborhoods
        const neighborhoods = [...new Set(crimeData.map(item => item.neighborhood))].sort();
        neighborhoods.forEach(neighborhood => {
            const option = document.createElement('option');
            option.value = neighborhood;
            option.textContent = neighborhood;
            neighborhoodSelect.appendChild(option);
        });
    }

    function filterData() {
        const year = document.getElementById('yearSelect').value;
        const month = document.getElementById('monthSelect').value;
        const neighborhood = document.getElementById('neighborhoodSelect').value;

        let filteredData = crimeData;

        if (year) {
            filteredData = filteredData.filter(item => {
                const itemDate = parseDate(item.date);
                return itemDate.getFullYear() == year;
            });
        }

        if (month) {
            filteredData = filteredData.filter(item => {
                const itemDate = parseDate(item.date);
                return itemDate.getMonth() + 1 == month;
            });
        }

        if (neighborhood) {
            filteredData = filteredData.filter(item => item.neighborhood === neighborhood);
        }

        // Crime_type bo'yicha guruhlab eng ko'p 10 tasini olish
        const topCrimeTypes = Object.entries(
            filteredData.reduce((acc, item) => {
                acc[item.crime_type] = (acc[item.crime_type] || 0) + 1;
                return acc;
            }, {})
        )
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([crime_type]) => crime_type);

        return filteredData.filter(item => topCrimeTypes.includes(item.crime_type));
    }

    function groupDataByTime(data) {
        const year = document.getElementById('yearSelect').value;
        const month = document.getElementById('monthSelect').value;
        
        const grouped = {};
        
        if (year && !month) {
            // Yillik ko'rinish - oylar bo'yicha
            for (let i = 1; i <= 12; i++) {
                grouped[months[i - 1]] = {};
            }
            
            data.forEach(item => {
                const itemDate = parseDate(item.date);
                const monthName = months[itemDate.getMonth()];
                const crimeType = item.crime_type;
                
                if (!grouped[monthName][crimeType]) {
                    grouped[monthName][crimeType] = 0;
                }
                grouped[monthName][crimeType]++;
            });
        } else if (year && month) {
            // Oylik ko'rinish - kunlar bo'yicha
            const daysInMonth = new Date(year, month, 0).getDate();
            for (let i = 1; i <= daysInMonth; i++) {
                grouped[i] = {};
            }
            
            data.forEach(item => {
                const itemDate = parseDate(item.date);
                const day = itemDate.getDate();
                const dayKey = day;
                const crimeType = item.crime_type;
                
                if (!grouped[dayKey][crimeType]) {
                    grouped[dayKey][crimeType] = 0;
                }
                grouped[dayKey][crimeType]++;
            });
        } else {
            // Umumiy ko'rinish - jinoyat turlari bo'yicha
            data.forEach(item => {
                const crimeType = item.crime_type;
                if (!grouped[crimeType]) {
                    grouped[crimeType] = {};
                }
                grouped[crimeType]['Jami'] = (grouped[crimeType]['Jami'] || 0) + 1;
            });
        }
        
        return grouped;
    }

    function createChart(data) {
        const groupedData = groupDataByTime(data);
        
        if (Object.keys(groupedData).length === 0) {
            document.getElementById('chart').innerHTML = '<div class="no-data">📊 Tanlangan filtrlarga mos ma\'lumot topilmadi</div>';
            return;
        }

        const year = document.getElementById('yearSelect').value;
        const month = document.getElementById('monthSelect').value;
        
        let series = [];
        let categories = Object.keys(groupedData);
        
        if (year && !month) {
            // Yillik ko'rinish - har bir jinoyat turi alohida line
            const crimeTypes = new Set();
            Object.values(groupedData).forEach(monthData => {
                Object.keys(monthData).forEach(crimeType => {
                    crimeTypes.add(crimeType);
                });
            });
            
            crimeTypes.forEach(crimeType => {
                const data = categories.map(month => groupedData[month][crimeType] || 0);
                series.push({
                    name: crimeType,
                    data: data
                });
            });
        } else if (year && month) {
            // Oylik ko'rinish - har bir jinoyat turi alohida line
            const crimeTypes = new Set();
            Object.values(groupedData).forEach(dayData => {
                Object.keys(dayData).forEach(crimeType => {
                    crimeTypes.add(crimeType);
                });
            });
            
            crimeTypes.forEach(crimeType => {
                const data = categories.map(day => groupedData[day][crimeType] || 0);
                series.push({
                    name: crimeType,
                    data: data
                });
            });
        } else {
            // Umumiy ko'rinish - jinoyat turlari bo'yicha
            const data = categories.map(crimeType => groupedData[crimeType]['Jami'] || 0);
            series.push({
                name: 'Jinoyatlar soni',
                data: data
            });
        }

        const options = {
            chart: {
                type: 'line',
                height: 700,
                zoom: {
                    enabled: true
                },
                toolbar: {
                    tools: {
                        download: false,
                        selection: true,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false
                    }
                },
                events: {
                    legendClick: function(chartContext, seriesIndex, config) {
                        const fullSeriesName = config.config.series[seriesIndex].name;
                        
                        aiAdvice(fullSeriesName);

                        showCrimeModal(fullSeriesName);
                        const myModal = new bootstrap.Modal(document.getElementById('legendModal'));
                        myModal.show();

                        return false; // chiziqni yashirishni bloklash
                    }
                }
            },
            dataLabels: {
                enabled: true
            },
            title: {
                // text: getChartTitle(),
                align: 'center',
                style: {
                    fontSize:  '18px',
                    fontWeight:  'bold',
                    fontFamily:  undefined,
                    color:  '#fff'
                },
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            series: series,
            xaxis: {
                categories: categories,
                labels: {
                    style: {
                        colors: '#ffffff'
                    },
                    rotate: categories.length > 10 ? -45 : 0,
                    // formatter: function() {
                    //     // Limit label to 30 characters and add ellipsis if truncated
                    //     return this.value.length > 30 ? this.value.substring(0, 30) + '...' : this.value;
                    // }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#ffffff'
                    }
                }
            },
            tooltip: {
                enabled: true,
                shared: false,
                intersect: false,
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function(value) {
                        return value + " ta";
                    }
                }
            },
            legend: {
                show: false,
                // showForSingleSeries: false,  // <-- MUHIM
                position: 'right',
                horizontalAlign: 'left',
                fontSize: '14px',
                labels: {
                    colors: '#fff',
                    useSeriesColors: false,
                },
                markers: {
                    width: 10,
                    height: 10,
                    radius: 0,
                    offsetX: -5,
                    offsetY: 1,
                    shape: "line", // circle, square
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5
                },
                onItemClick: {
                    toggleDataSeries: false
                },
                onItemHover: {
                    highlightDataSeries: true
                },
                formatter: function(seriesName, opts) {                    
                    // return seriesName;
                    const maxLength = 50;
                    return seriesName.length > maxLength ? 
                        seriesName.substring(0, maxLength) + '...' : 
                        seriesName;
                },
                containerMargin: {
                    left: 10,
                    top: 20
                }
            },
            colors: ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#9b59b6', 
                    '#1abc9c', '#d35400', '#34495e', '#e67e22', '#16a085'],
            grid: {
                borderColor: '#556d8f',
                strokeDashArray: 4
            }
        };

        if (chart) {
            chart.destroy();
        }

        chart = new ApexCharts(document.querySelector("#crime_types_date_neighborhood"), options);
        chart.render();
    }

    function getChartTitle() {
        const year = document.getElementById('yearSelect').value;
        const month = document.getElementById('monthSelect').value;
        
        if (year && month) {
            return `${year} yil ${months[month - 1]} oyi - kunlik statistika`;
        } else if (year) {
            return `${year} yil - oylik statistika`;
        } else {
            return 'Jinoyat turlari bo\'yicha umumiy statistika';
        }
    }

    function createDonughtChart(){
        // Yillar va jinoyat turiga ko'ra hisoblash
        const selectedCrimeType = "Безорилик"; // ← bu yerda jinoyat turini belgilang

        // Yillar va jinoyat turiga ko'ra hisoblash
        const crimeCounts = {};

        crimeData.forEach(item => {
            const year = item.date.split(".")[2]; // 'dd.mm.yyyy' formatdan yil ajratish
            const crime = item.crime_type;

            if (!crimeCounts[crime]) crimeCounts[crime] = {};
            if (!crimeCounts[crime][year]) crimeCounts[crime][year] = 0;

            crimeCounts[crime][year]++;
        });

        // Unikal yillarni olish
        const allYears = Array.from(
            new Set(crimeData.map(item => item.date.split(".")[2]))
        ).sort();

        const series = Object.keys(crimeCounts).map(crime => {
            return {
                name: crime,
                data: allYears.map(year => crimeCounts[crime][year] || 0)
            };
        });

        const options = {
            chart: {
                type: 'bar',
                height: 600,
                events: {
                    dataPointSelection: function(event, chartContext, config) {
                        // const seriesIndex = config.seriesIndex;
                        const dataPointIndex = config.dataPointIndex;
                        const category = config.w.config.xaxis.categories[dataPointIndex];
                        // const value = config.w.config.series[seriesIndex].data[dataPointIndex];

                        document.getElementById('yearSelect').value = category;
                        applyFilters();
                    }
                }
            },
            toolbar: {
                tools: {
                    download: false,
                    selection: true,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                }
            },
            series: series,
            xaxis: {
                categories: allYears,
                title: {
                    text: 'Йиллар',
                    style: {
                        color: '#ffffff'
                    }
                },
                labels: {
                    style: {
                        colors: '#ffffff'
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'Жиноятлар сони',
                    style: {
                        color: '#ffffff'
                    }
                },
                labels: {
                    style: {
                        colors: '#ffffff'
                    }
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            dataLabels: {
                enabled: true
            },
            legend: {
                show: false,
                // showForSingleSeries: false,
                // position: 'bottom'
            },
            title: {
                text: 'Безорилик жиноятлари йиллар бўйича',
                align: 'center',
                style: {
                    color: '#ffffff',                    
                }
            },
            colors: ['#4ECDC4']
        };

        // 4. Grafikni chiqarish
        chart = new ApexCharts(document.querySelector("#crime_types_date_neighborhood"), options);
        chart.render();
    }

    function applyFilters() {
        const filteredData = filterData();
        // updateStats(filteredData);
        createChart(filteredData);
    }

    // Add event listeners for auto-update
    function addEventListeners() {
        document.getElementById('yearSelect').addEventListener('change', applyFilters);
        document.getElementById('monthSelect').addEventListener('change', applyFilters);
        document.getElementById('neighborhoodSelect').addEventListener('change', applyFilters);
    }

    initializeFilters();
    addEventListeners();
    // applyFilters(); // Show initial data
    createDonughtChart();
});
// ##################################################
// crime section charts end
// ##################################################