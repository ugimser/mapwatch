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
            const dateEntry = dataMap[label].data.find((entry) => entry.x === date);

            if (dateEntry) {
                // Jeœli wpis dla tej daty istnieje, zaktualizuj wartoœæ `y`
                dateEntry.y += 1;
            } else {
                // Jeœli wpis dla tej daty nie istnieje, dodaj now¹ datê z wartoœci¹ `y: 1`
                dataMap[label].data.push({ x: date, y: 1 });
            }

            // Aktualizuj seed (jeœli wymagane)
            dataMap[label].seed = seed;
        } else {
            dataMap[label] = {
                label,
                data: [{ x: date, y: 1 }],
                backgroundColor: null, 
                seed
            };
        }
    });

    Object.values(dataMap).forEach((item, index) => {
        item.backgroundColor = colors[index % colors.length];
    });

    const generatedInstancesAllTimeChartData = {
        datasets: Object.values(dataMap) 
    };
    generatedInstancesAllTimeChartData.datasets.sort((a, b) => {
        const sumA = a.data.reduce((sum, entry) => sum + entry.y, 0);
        const sumB = b.data.reduce((sum, entry) => sum + entry.y, 0);
        return sumB - sumA;
    });

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
            label: 'Created instances: ',
            data: data,
            backgroundColor: previousColors,
            //borderColor: previousColors,
            //borderWidth: 1,
            offset: 1,
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
                { x: '2025/01/21', y: 3 },
                { x: '2025/01/22', y: 5 },
                { x: '2025/01/23', y: 8 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 1)',
           // barPercentage: 1.24,
        },
        {
            label: "map 1",
            data: [
                { x: '2025/01/19', y: 1 },
                { x: '2025/01/20', y: 2 },
            ],
            backgroundColor: 'rgba(175, 111, 11, 1)',
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
                text: 'Chart.js Bar Chart - Stacked'
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











