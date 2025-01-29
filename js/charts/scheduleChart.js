let scheduleChartInstance = null;

function ScheduleChartRender(filteredResults) {
    const ctx = document.getElementById('scheduleChart').getContext('2d');

    if (scheduleChartInstance) {
        scheduleChartInstance.destroy();
    }

    const newsScheduleChartData = {
        datasets: [{
            label: 'Gaming Time',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 1)',
            barPercentage: 1.24, 
        }]
    };

    for (let i = 0; i < filteredResults.length; i++) {
        if (!filteredResults[i].content || !filteredResults[i + 1] || !filteredResults[i + 1].content) {
            continue;
        }
        const current = filteredResults[i];
        const next = filteredResults[i + 1];

        if (current.content.pattern === "Game started") { //} && next && next.content.pattern === "Game closed") {
            if (typeof next === "undefined") { // last record, game opened but not closed
                const startDate = current.content.date;
                const startDecimal = timeToDecimal(current.content.time);
                const endDecimal = timeToDecimal(current.content.timeEnd);
                newsScheduleChartData.datasets[0].data.push({
                    x: startDate,
                    y: [startDecimal, endDecimal]
                });
                break;
            }
            const startDate = current.content.date;//getDayOfWeek(current.content.date);
            const startDecimal = timeToDecimal(current.content.time);
            const endDecimal = timeToDecimal(next.content.time);

            if (startDecimal > endDecimal) { // 21:00-2:00
                newsScheduleChartData.datasets[0].data.push({
                    x: startDate, 
                    y: [startDecimal, 24] 
                });
                newsScheduleChartData.datasets[0].data.push({
                    x: next.content.date,
                    y: [0, endDecimal] 
                });

                continue;
            }

            newsScheduleChartData.datasets[0].data.push({
                x: startDate,
                y: [startDecimal, endDecimal] 
            });            
            //console.log({ x: startDate, y: [startDecimal, endDecimal] });
        }
    }
   //console.log(newsScheduleChartData.datasets[0].data);
    //const filledData = fillMissingDates(newsScheduleChartData.datasets[0].data, allDates);
    //console.log(filledData);
    //newsScheduleChartData.datasets[0].data = filledData;
    scheduleChartConfig.data = newsScheduleChartData;
    scheduleChartInstance = new Chart(ctx, scheduleChartConfig);
}




const scheduleChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Gaming Time',
        data: [
            { x: 'Monday', y: [2, 5] },   // Zakres od 2:00 do 5:00
            { x: 'Monday', y: [6, 16] },
            { x: 'Tuesday', y: [6, 12] }, // Zakres od 6:00 do 12:00
            { x: 'Wednesday', y: [8, 14] },
            { x: 'Thursday', y: [0, 4] },
            { x: 'Friday', y: [10, 18] },
            { x: 'Saturday', y: [5, 10] },
            { x: 'Sunday', y: [1, 3] }
        ],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        barPercentage: 1.24, 
    }]
};

let scheduleChartConfig = {
    type: 'bar',
    data: scheduleChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Gaming Hours Per Day'
            },
            tooltip: {
                enabled: true, // W³¹czenie tooltipa
                callbacks: {
                    label: function (context) {
                        const data = context.raw; // Pobierz dane surowe dla danego s³upka
                        const [start, end] = data.y; // Pobierz pocz¹tek i koniec zakresu
                        //const duration = (end - start).toFixed(2); // Oblicz czas trwania
                        return [
                            `Start: ${decimalToTime(start)}`,
                            `End: ${decimalToTime(end)}`
                        ];
                    }
                }
            }
        },
        scales: {
            y: {
                type: 'linear', // Okreœla oœ liniow¹
                min: 0.00,         // Minimalna wartoœæ osi
                max: 24.00,        // Maksymalna wartoœæ osi
                title: {
                    display: false,
                    text: 'Hours'
                },
                ticks: {
                    stepSize: 2, // Oznaczenia co 2 godziny
                    callback: function (value) {
                        // Formatowanie wartoœci na osi Y z dwoma zerami po przecinku
                        return value.toFixed(2);
                    }
                }
            },
            x: {
                type: 'category', // Kategorie odpowiadaj¹ dniom
                title: {
                    display: false,
                    text: 'Days of the Week'
                }
            }
        }
    },
    plugins: [
        {
            id: 'barLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                const dataset = chart.data.datasets[0];
                const meta = chart.getDatasetMeta(0);

                ctx.font = '12px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';

                meta.data.forEach((bar, index) => {
                    const data = dataset.data[index];
                    const [start, end] = data.y;
                    const duration = decimalToTime(end - start);

                    const barX = bar.x;
                    const barMiddle = bar.y + (bar.height / 2);

                    // Wyœwietlanie etykiety nad s³upkiem
                    ctx.fillText(`${duration} h`, barX, barMiddle + 5); // Tekst nad s³upkiem
                });
            }
        }
    ]
};


function getDayOfWeek(dateString) {
    const [year, month, day] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day); // Miesi¹ce s¹ indeksowane od 0
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}










