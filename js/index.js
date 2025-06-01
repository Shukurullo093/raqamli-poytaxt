let cardPositions = [
    { 'demographic': true },
    { 'crime':  true },
    { 'mapCard': true },
    { 'personal': true },
    { 'monitoring': true },
    { 'maHuq': true },
    { 'e-ma-mo': true },
    { 'prophylactic': true },
    { 'statistic': true },
    { 'permanent1': true },
    { 'permanent2': true },
    { 'permanent3': true },
    { 'permanent4': true },
];

const toggleCardValue = (id) => {
    cardPositions = cardPositions.map(card => {
        const key = Object.keys(card)[0];
        const value = card[key];
        if (key === id) {
            return { [key]: !value };
        }
        return card;
    });
};

const getCardIndexById = (id) => {
    return cardPositions.findIndex(card => Object.keys(card)[0] === id);
};

const getCardValueByIndex = (index) => {
    const card = cardPositions[index];
    if (!card) return undefined;
    const key = Object.keys(card)[0];
    return card[key];
};

const getCardValueById = (id) => {
    const card = cardPositions.find(card => Object.keys(card)[0] === id);
    if (!card) return undefined;
    const key = Object.keys(card)[0];
    return card[key];
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cardPositions')) {
        cardPositions = JSON.parse(localStorage.getItem('cardPositions'));
    }

    const cards = document.querySelectorAll('.accordion-card');
    cards.forEach((card) => {
        const cardId = card.getAttribute('id');
        const cardValue = getCardValueById(cardId);
        if (!cardValue) {
            card.classList.toggle('d-none');
        }
    });

    document.querySelectorAll('.dropdown-item').forEach((item) => {
        if (getCardValueById(item.getAttribute('data-card-id'))) {
            item.classList.remove('text-decoration-line-through');
            item.querySelector('i').classList.add('fa-check');
            item.querySelector('i').classList.remove('fa-xmark');
        } else {
            item.classList.add('text-decoration-line-through');
            item.querySelector('i').classList.remove('fa-check');
            item.querySelector('i').classList.add('fa-xmark');
        }

        item.addEventListener('click', (e) => {
            e.target.classList.toggle('text-decoration-line-through');
            e.target.querySelector('i').classList.toggle('fa-check');
            e.target.querySelector('i').classList.toggle('fa-xmark');

            const cardId = e.target.getAttribute('data-card-id');
            const cardIndex = getCardIndexById(cardId);
            toggleCardValue(cardId);
            localStorage.setItem('cardPositions', JSON.stringify(cardPositions));
            const card = document.getElementById(cardId);
            card.classList.toggle('d-none');

            const row = document.getElementById("columnsRow");
            row.insertBefore(card, row.children[cardIndex + 1]);
        });
    });

    const current = localStorage.getItem('lang') || 'kirill';
    if (current === 'lotin') {
        convertVisibleText(document.body, 'toggleLanguageBtn');
    }
})

// charts
const ctx = document.getElementById('myChart').getContext('2d');
const months = [
    'Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн',
    'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'
];

function sumCasesByMonthByYear(reuiredYear) {
  const monthlyCounts = new Array(12).fill(0);

  data.forEach(entry => {
    const crimeDate = entry["Жиноят содир этилган вақти"];
    
    const [day, month, year] = crimeDate.split('.').map(Number);
    
    if (reuiredYear === year) {
      const monthIndex = month - 1;
      
      if (monthIndex >= 0 && monthIndex < 12) {
        monthlyCounts[monthIndex]++;
      }
    }
  });

  return monthlyCounts;
}

function minMaxNonZero(arr) {
  const nonZero = arr.filter(x => x !== 0);
  return {
    min: Math.min(...nonZero),
    max: Math.max(...nonZero)
  };
}

function getCombinedMinMax(...dataArrays) {
  const allMinMax = dataArrays.map(arr => minMaxNonZero(arr));
  return {
    min: Math.min(...allMinMax.map(m => m.min)),
    max: Math.max(...allMinMax.map(m => m.max))
  };
}

const dataValues2025 = sumCasesByMonthByYear(2025);
const dataValues2024 = sumCasesByMonthByYear(2024);

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: '2025',
                data: dataValues2025,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                // fill: true,
                // tension: .6,
                pointRadius: 0
            },
            {
                label: '2024',
                data: dataValues2024,
                borderColor: 'yellow',
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
                display: true,
                labels: {
                    color: 'white',
                    usePointStyle: true,
                    pointStyle: 'line',
                }
            },
            tooltip: {
                enabled: true,
                mode: 'point',
                intersect: false
                // callbacks: {
                //     label: function(context) {
                //         let label = context.dataset.label || '';

                //         if (label) {
                //             label += ': ';
                //         }
                //         if (context.parsed.y !== null) {
                //             label += context.parsed.y;
                //         }
                //         return label;
                //     }
                // }
            }
        },
        scales: {
            x: {
                grid: {
                    display: true
                },
                ticks: {
                    font: {
                        size: 8
                    },
                    color: 'white',
                }
            },
            y: {
                min: getCombinedMinMax(dataValues2024, dataValues2025).min,
                max: getCombinedMinMax(dataValues2024, dataValues2025).max,
                beginAtZero: false,
                grid: {
                    display: false
                },
                ticks: {
                    display: true,
                    color: 'white'
                }
            }
        }
    }
});

// cirle charts
function analyzeSeverityByYear(data) {
  const result = {};
  
  data.forEach(entry => {
    // Extract year from date (assuming format DD.MM.YYYY)
    const year = entry["Жиноят содир этилган вақти"].split('.')[2];
    const severity = entry["Оғирлик даражаси"];
    
    // Initialize year if not exists
    if (!result[year]) {
      result[year] = {
        "Ижтимоий хавфи кам бўлган": 0,
        "Оғир": 0,
        "Ўта оғир": 0,
        total: 0
      };
    }
    
    // Count severity types
    if (severity === "Ўта оғир") {
      result[year]["Ўта оғир"]++;
      result[year].total++;
    } 
    else if (severity === "Оғир") {
      result[year]["Оғир"]++;
      result[year].total++;
    } 
    else if (severity === "Ижтимоий хавфи кам бўлган") {
      result[year]["Ижтимоий хавфи кам бўлган"]++;
      result[year].total++;
    }
    });
  
//   Calculate percentages for each year
  for (const year in result) {
    const yearData = result[year];
    yearData["Оғир %"] = Math.round(yearData["Оғир"] / yearData.total * 100);
    yearData["Ўта оғир %"] = Math.round(yearData["Ўта оғир"] / yearData.total * 100);
    yearData["Ижтимоий хавфи кам бўлган %"] = Math.round(yearData["Ижтимоий хавфи кам бўлган"] / yearData.total * 100);
  }
  
  return result;
}
// filter by full 2025 year both 'aniqlanadigan' and 'oldini olish mumkin'
const severity2025= analyzeSeverityByYear(data)['2025'];
document.getElementById('all-text').textContent = severity2025['total'];
document.getElementById('all-2025-uob').setAttribute('data-percent', severity2025['Ижтимоий хавфи кам бўлган %']);
document.getElementById('all-2025-uob-per').textContent = severity2025['Ижтимоий хавфи кам бўлган'];
document.getElementById('all-2025-uob-percent').textContent = severity2025['Ижтимоий хавфи кам бўлган %'] + '%';
document.getElementById('all-2025-o').setAttribute('data-percent', severity2025['Оғир %']);
document.getElementById('all-2025-o-per').textContent = severity2025['Оғир'];
document.getElementById('all-2025-o-percent').textContent = severity2025['Оғир %'] + '%';
document.getElementById('all-2025-uo').setAttribute('data-percent', severity2025['Ўта оғир %']);
document.getElementById('all-2025-uo-per').textContent = severity2025['Ўта оғир'];
document.getElementById('all-2025-uo-percent').textContent = severity2025['Ўта оғир %'] + '%';

function filterDataByYearAndTasnif(data, targetYear, tasnifValue) {
  return data.filter(entry => {
    const crimeYear = entry["Жиноят содир этилган вақти"].split('.')[2];
    const tasnif = entry["Тавсифи"];
    
    return crimeYear === targetYear && tasnif === tasnifValue;
  });
}

const aniqlanadigan2025 = filterDataByYearAndTasnif(data, '2025', 'Аниқланадиган');
const aseverity2025= analyzeSeverityByYear(aniqlanadigan2025)['2025'];
document.getElementById('a-text').textContent = aseverity2025['total'];
document.getElementById('a-2025-uob').setAttribute('data-percent', aseverity2025['Ижтимоий хавфи кам бўлган %']);
document.getElementById('a-2025-uob-per').textContent = aseverity2025['Ижтимоий хавфи кам бўлган'];
document.getElementById('a-2025-uob-percent').textContent = aseverity2025['Ижтимоий хавфи кам бўлган %'] + '%';
document.getElementById('a-2025-o').setAttribute('data-percent', aseverity2025['Оғир %']);
document.getElementById('a-2025-o-per').textContent = aseverity2025['Оғир'];
document.getElementById('a-2025-o-percent').textContent = aseverity2025['Оғир %'] + '%';
document.getElementById('a-2025-uo').setAttribute('data-percent', aseverity2025['Ўта оғир %']);
document.getElementById('a-2025-uo-per').textContent = aseverity2025['Ўта оғир'];
document.getElementById('a-2025-uo-percent').textContent = aseverity2025['Ўта оғир %'] + '%';

const oldi2025 = filterDataByYearAndTasnif(data, '2025', 'Олдини олиш мумкин бўлган');
const oseverity2025= analyzeSeverityByYear(oldi2025)['2025'];
document.getElementById('o-text').textContent = oseverity2025['total'];
document.getElementById('o-2025-uob').setAttribute('data-percent', oseverity2025['Ижтимоий хавфи кам бўлган %']);
document.getElementById('o-2025-uob-per').textContent = oseverity2025['Ижтимоий хавфи кам бўлган'];
document.getElementById('o-2025-uob-percent').textContent = oseverity2025['Ижтимоий хавфи кам бўлган %'] + '%';
document.getElementById('o-2025-o').setAttribute('data-percent', oseverity2025['Оғир %']);
document.getElementById('o-2025-o-per').textContent = oseverity2025['Оғир'];
document.getElementById('o-2025-o-percent').textContent = oseverity2025['Оғир %'] + '%';
document.getElementById('o-2025-uo').setAttribute('data-percent', oseverity2025['Ўта оғир %']);
document.getElementById('o-2025-uo-per').textContent = oseverity2025['Ўта оғир'];
document.getElementById('o-2025-uo-percent').textContent = oseverity2025['Ўта оғир %'] + '%';

// language switcher
const convertText = (text, direction = 'lotinToKirill') => {
    const pairs = [
        ['Sh', 'Ш'], ['sh', 'ш'], ['Ch', 'Ч'], ['ch', 'ч'], ['Yo', 'Ё'], ['yo', 'ё'],
        ['Yu', 'Ю'], ['yu', 'ю'], ['Ya', 'Я'], ['ya', 'я'], ['G\'', 'Ғ'], ['g\'', 'ғ'],
        ['O\'', 'Ў'], ['o\'', 'ў'], ['A', 'А'], ['a', 'а'], ['B', 'Б'], ['b', 'б'],
        ['D', 'Д'], ['d', 'д'], ['E', 'Э'], ['e', 'э'], ['F', 'Ф'], ['f', 'ф'],
        ['G', 'Г'], ['g', 'г'], ['H', 'Ҳ'], ['h', 'ҳ'], ['I', 'И'], ['i', 'и'],
        ['J', 'Ж'], ['j', 'ж'], ['K', 'К'], ['k', 'к'], ['L', 'Л'], ['l', 'л'],
        ['M', 'М'], ['m', 'м'], ['N', 'Н'], ['n', 'н'], ['O', 'О'], ['o', 'о'],
        ['P', 'П'], ['p', 'п'], ['Q', 'Қ'], ['q', 'қ'], ['R', 'Р'], ['r', 'р'],
        ['S', 'С'], ['s', 'с'], ['T', 'Т'], ['t', 'т'], ['U', 'У'], ['u', 'у'],
        ['V', 'В'], ['v', 'в'], ['X', 'Х'], ['x', 'х'], ['Y', 'Й'], ['y', 'й'],
        ['Z', 'З'], ['z', 'з'], ['\'', 'ъ']
    ];

    if (direction === 'kirillToLotin') pairs.reverse();

    pairs.forEach(([latin, cyrillic]) => {
        const from = direction === 'lotinToKirill' ? latin : cyrillic;
        const to = direction === 'lotinToKirill' ? cyrillic : latin;
        const regex = new RegExp(from.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&'), 'g');
        text = text.replace(regex, to);
    });

    return text;
};

const convertVisibleText = (node, direction = 'lotinToKirill') => {
    if (node.nodeType === 3) {
        node.nodeValue = convertText(node.nodeValue, direction);
    } else if (node.nodeType === 1) {
        for (let child of node.childNodes) {
            convertVisibleText(child, direction);
        }
    }
};

// Tilni o‘zgartirish tugmasi
document.getElementById('toggleLanguageBtn').addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'lotin';
    const newLang = current === 'lotin' ? 'kirill' : 'lotin';

    convertVisibleText(document.body, newLang === 'lotin' ? 'kirillToLotin' : 'lotinToKirill');
    localStorage.setItem('lang', newLang);
});