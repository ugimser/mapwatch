let sumDailyInGameTimeChartInstance = null;

function SumDailyInGameTimeChartRender() {
    const ctx = document.getElementById('sumDailyInGameTimeChart').getContext('2d');

    if (sumDailyInGameTimeChartInstance) {
        sumDailyInGameTimeChartInstance.destroy();
    }

    // data from dailyInGameTimeChartData
    const data = [];
    let sumY = 0;
    //console.log(dailyInGameTimeChartData.datasets[0].data);
    dailyInGameTimeChartData.datasets[0].data.forEach((record) => {
        sumY += record.y;
        data.push({ x: record.x, y: sumY });
    });

    const privateData = structuredClone(sumDailyInGameTimeChartData);

    privateData.datasets[0].data = data;
    privateData.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.3)';
    privateData.datasets[0].borderColor = 'rgba(75, 192, 192, 1)'; 
    privateData.datasets[0].fill = true;
    privateData.datasets[0].pointStyle = "triangle";
    privateData.datasets[0].pointRadius = 20;
    privateData.datasets[0].pointHoverRadius = 30;
    //console.log(sumDailyInGameTimeChartData.datasets[0].data);
    sumDailyInGameTimeChartConfig.data = privateData;

    sumDailyInGameTimeChartInstance = new Chart(ctx, sumDailyInGameTimeChartConfig);

    //console.log("End SumDailyInGameTimeChartRender()");
}

const sumDailyInGameTimeChartData = {
    datasets: [{
        data: [
            { x: '2025/01/19', y: 1 },
            { x: '2025/01/20', y: 2 },
            { x: '2025/01/21', y: 3 },
            { x: '2025/01/22', y: 5 },
            { x: '2025/01/23', y: 8 },
            { x: '2025/01/24', y: 13 },
            { x: '2025/01/25', y: 21 },
            { x: '2025/01/26', y: 34 }
        ],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        barPercentage: 1.24,
    }]
};

const sumDailyInGameTimeChartConfig = {
    type: 'line',
    data: sumDailyInGameTimeChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex; // Indeks bie¿¹cego elementu
                        const totalDays = index + 1; // Dni (indeks + 1)
                        const sum = context.raw.y; // Suma czasu (context.raw.y)
                        const average = sum / totalDays; // Œredni czas na dzieñ

                        return [
                            `Sum of previous sessions: ${decimalToTime(sum)}`,
                            `Day amount: ${totalDays}`,
                            `Average time per day: ${decimalToTime(average)}`
                        ]; // Zwróæ tablicê dla wieloliniowego tooltipa
                    }
                }
            }
        },
        scales: {
            y: {
                type: 'linear',
                min: 0,
                title: {
                    display: true,
                    text: 'Hours'
                }
            },
            x: {
                type: 'category',
                title: {
                    display: false,
                    text: 'Days of the Week'
                }
            }
        }
    },
};





















