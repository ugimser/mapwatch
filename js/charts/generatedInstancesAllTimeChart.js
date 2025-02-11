let generatedInstancesAllTimeChartInstance = null;
let generatedInstancesAllTimeSumChartInstance = null;

function GeneratedInstancesAllTimeChartRender() {
    const ctx = document.getElementById('generatedInstancesAllTimeChart').getContext('2d');

    if (generatedInstancesAllTimeChartInstance) {
        generatedInstancesAllTimeChartInstance.destroy();
    }

    const dataMap = {}; // Mapa do szybkiego sprawdzania obecnoœci `x`

    generatingLevels.forEach((content) => {
        const date = content.content.date;
        const label = content.content.areaName;
        const seed = content.content.seed;

        if (dataMap[label]) {
            // SprawdŸ, czy istnieje wpis dla danej daty
            const dateEntry = dataMap[label].data.find((entry) => entry.x === date && entry.seed === seed);

            if (dateEntry) {
                // Jeœli wpis dla tej daty istnieje, zaktualizuj wartoœæ `y`
                dateEntry.y += 1;
            } else {
                // Jeœli wpis dla tej daty nie istnieje, dodaj now¹ datê z wartoœci¹ `y: 1`
                dataMap[label].data.push({ x: date, y: 1, seed });
            }

            // Aktualizuj seed (jeœli wymagane)
            dataMap[label].seed = seed;
        } else {
            dataMap[label] = {
                label,
                data: [{ x: date, y: 1, seed }],
                //backgroundColor: null, 
                seed
            };
        }
    });

    
   // console.log("dataMap", dataMap);

    const filteredData = {};
    for (const [key, value] of Object.entries(dataMap)) {
        const countedData = {}; // Licznik wyst¹pieñ `x`

        value.data.forEach(record => {
            if (!countedData[record.x]) {
                countedData[record.x] = { x: record.x, y: 0 };
            }
            if (value.seed > 2) { // maps
                countedData[record.x].y++;
            }
            else { // cities, towns
                countedData[record.x].y += record.y;
            }
        });

        filteredData[key] = {
            label: value.label,
            data: Object.values(countedData),
            backgroundColor: null
        };
    }

    Object.values(filteredData).forEach((item, index) => {
        if (index < colors.length) {
            item.backgroundColor = colors[index];
        } else {
            const hue = (index * 137) % 360; 
            item.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        }
    });

    let instanceMostOftenIndex = 0;
    let howMany = 0;
    const entries = Object.entries(filteredData);
    entries.forEach(([key, item], index) => {
        const i = item.data.length;
        if (howMany < i) {
            howMany = i;
            instanceMostOftenIndex = index;
        }
    });
    //console.log("entries", entries);
    const [mostFrequent] = entries.splice(instanceMostOftenIndex, 1); // Usuniêcie z obecnego miejsca
    entries.unshift(mostFrequent); // Wstawienie na pocz¹tek

    const newFilteredData = Object.fromEntries(entries);
    
    //console.log("newFilteredData", newFilteredData);

    const generatedInstancesAllTimeChartData = {
        datasets: Object.values(newFilteredData) 
    };
   
    //console.log("generatedInstancesAllTimeChartData", generatedInstancesAllTimeChartData);
    
    generatedInstancesAllTimeChartData.datasets.sort((a, b) => {
        const sumA = a.data.reduce((sum, entry) => sum + entry.y, 0);
        const sumB = b.data.reduce((sum, entry) => sum + entry.y, 0);
        return sumB - sumA;
    });
    //console.log(generatedInstancesAllTimeChartData);
    generatedInstancesAllTimeChartConfig.data = generatedInstancesAllTimeChartData;
    generatedInstancesAllTimeChartInstance = new Chart(ctx, generatedInstancesAllTimeChartConfig);

    GeneratedInstancesAllTimeSumChartRender(generatedInstancesAllTimeChartData);
}

function GeneratedInstancesAllTimeSumChartRender(generatedInstancesAllTimeChartData) {
    //console.log(generatedInstancesAllTimeChartData);
    const ctx = document.getElementById('generatedInstancesAllTimeSumChart').getContext('2d');

    if (generatedInstancesAllTimeSumChartInstance) {
        generatedInstancesAllTimeSumChartInstance.destroy();
    }

    const labels = [];
    const data = [];
    const previousColors = [];
    generatedInstancesAllTimeChartData.datasets.forEach((record) => {
        //console.log(record);
        labels.push(record.label);
        previousColors.push(record.backgroundColor);
        let sum = 0;
        record.data.forEach(item => {
            sum += item.y;
        });
        data.push(sum);
    });
    
    const dataForConfig = {
        labels: labels,
        datasets: [{
            label: 'Created instances',
            data: data,
            backgroundColor: previousColors,
            borderColor: '#272727',
            borderWidth: 1,
           // offset: 1,
        }]
    };
    
    const config = {
        type: 'doughnut',
        data: dataForConfig,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Chart.js Pie Chart'
                }
            }
        },
    };


    generatedInstancesAllTimeSumChartInstance = new Chart(ctx, config);
}

const generatedInstancesAllTimeChartData = {
    datasets: [
        {
            label: "map 1",
            data: [
                { x: '2025/01/19', y: 1 },
                { x: '2025/01/20', y: 2 },
                { x: '2025/01/23', y: 8 },
            ],
            backgroundColor: 'rgba(0, 0, 0, 1)',
           // barPercentage: 1.24,
        },
        {
            label: "map 1",
            data: [
                { x: '2025/01/19', y: 1 },
                { x: '2025/01/20', y: 2 },
            ],
            backgroundColor: 'rgba(0, 0, 0, 1)',
            // barPercentage: 1.24,
        },
    ]
};

const generatedInstancesAllTimeChartConfig = {
    type: 'bar',
    data: generatedInstancesAllTimeChartData,
    options: {
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
            },
        },
        responsive: true,
        scales: {
            x: {
                type: 'category',
                display: true,
                stacked: true,
                title: {
                    display: false,
                    text: 'Dates'
                }
            },
            y: {
                stacked: true,
                display: true,
                title: {
                    display: false,
                    text: 'Values'
                }
            }
        }
    }
};










