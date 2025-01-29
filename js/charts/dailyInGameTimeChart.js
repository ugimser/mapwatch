let dailyInGameTimeChartInstance = null;

function DailyInGameTimeChartRender() {
    const ctx = document.getElementById('dailyInGameTimeChart').getContext('2d');

    if (dailyInGameTimeChartInstance) {
        dailyInGameTimeChartInstance.destroy();
    }

    const groupedData = {};
    let timeFromPreviousDay = 0;
    for (let index = 0; index < gamingSessions.length - 1; index++) {
        const record = gamingSessions[index];

        if (
            !gamingSessions[index + 1]?.content?.time ||
            !record?.content?.pattern || // Sprawdza, czy pattern istnieje
            record.content.pattern !== "Game started"
        ) {
            continue;
        }

        const x = record.content.date; // Data jako klucz
        const start = timeToDecimal(record.content.time);
        let end = timeToDecimal(gamingSessions[index + 1].content.time);

        // Obs³uga przypadku przekroczenia pó³nocy
        let duration;// = end < start ? (24 - start) + end : end - start;
        if (end < start) {
            duration = 24 - start;
            timeFromPreviousDay = end;
        }
        else {
            duration = end - start + timeFromPreviousDay;
            timeFromPreviousDay = 0;
        }

        // Grupowanie danych po dacie
        if (!groupedData[x]) {
            groupedData[x] = 0; // Inicjalizacja czasu dla danej daty
        }
        groupedData[x] += duration; // Sumowanie czasu dla danej daty
    }

    // last day, without "Game closed"
    const index = gamingSessions.length - 1;
    const x = gamingSessions[index].content.date;
    const start = timeToDecimal(gamingSessions[index].content.time);
    const end = timeToDecimal(gamingSessions[index].content.timeEnd);
    if (!groupedData[x]) {
        groupedData[x] = 0; // Inicjalizacja czasu dla danej daty
    }
    groupedData[x] += end - start;

    const data = Object.entries(groupedData).map(([x, y]) => ({ x, y }));

    const privateData = structuredClone(dailyInGameTimeChartData);

    privateData.datasets[0].data = data;
    dailyInGameTimeChartConfig.data = privateData;
    dailyInGameTimeChartInstance = new Chart(ctx, dailyInGameTimeChartConfig);

    //console.log("End DailyInGameTimeChartRender()");
}

const dailyInGameTimeChartData = {
    datasets: [{
        label: 'Gaming hours per day',
        data: [
            { x: '2025/01/19', y: 0 }, 
            { x: '2025/01/20', y: 3.5 },
            { x: '2025/01/21', y: 12 },
            { x: '2025/01/22', y: 20 },
            { x: '2025/01/23', y: 1 },
            { x: '2025/01/24', y: 2 },
            { x: '2025/01/25', y: 1 },
            { x: '2025/01/26', y: 3 }
        ],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        barPercentage: 1.24,
    }]
};


const dailyInGameTimeChartConfig = {
    type: 'bar',
    data: dailyInGameTimeChartData,
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
                enabled: true, // W³¹czenie tooltipa
                callbacks: {
                    label: function (context) {
                        return `Time in game: ${decimalToTime(context.raw.y)}`;
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
                },
                ticks: {
                    stepSize: 2, 
                    callback: function (value) {
                        return value.toFixed(2);
                    }
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













