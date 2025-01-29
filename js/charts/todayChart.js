let todayChartInstance = null;
let todayChartMaxY = 24;

let todayChartData = {
    //labels: ['Activities'],
    datasets: [
        {
           // label: 'Activity Range',
            data: [
                { description: 'map 1', seed: 1, x: 0, y: [2, 2.5] },
                { description: 'map 2', seed: 1, x: 0, y: [2.2, 3] },
                { description: 'zdarzenie punktowe', seed: 1, x: 0, y: [3.2, 3.2] }],
            backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(0, 0, 0, 1)'],
            barThickness: 1,
            grouped: false
        }
    ]
};

let todayChartConfig = {
    type: 'bar',
    data: todayChartData,
    options: {
        responsive: true,
        indexAxis: 'x', // Oœ X to aktywnoœci
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            zoom: {
                pan: {
                    enabled: true, // W³¹czenie przewijania
                    mode: 'y', // Przewijanie w poziomie
                },
                zoom: {
                    wheel: {
                        modifierKey: 'shift',
                        enabled: true // Zoom za pomoc¹ kó³ka myszy
                    },
                    pinch: {
                        enabled: true // Zoom dotykowy
                    },
                    mode: 'y', // Przybli¿anie w poziomie
                },
                limits: {
                    y: { min: 0, max: 24 }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { display: false }, // Ukrycie osi X
                border: { color: 'transparent' }
            },
            y: {
                type: 'linear',
                ticks: {
                    z: 1,
                    stepSize: 1,
                    color: 'black',
                    padding: -3,
                    callback: (value) => `${decimalToTime(value)}`
                },
                grid: { display: true, z: 1 },
                position: 'center',
                offset: true,
                border: { display: true, color: 'black', z: 1 },
                min: 0,
                max: 24
            }
        },
        elements: {
            bar: { borderWidth: 1 }
        }
    },
    plugins: [
        {
            id: 'customLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;

                const dataset = chart.data.datasets[0];
                const meta = chart.getDatasetMeta(0);

                // Generowanie danych activities na podstawie dataset.data
                const activities = dataset.data.map((dataPoint, index) => {
                    //const [start, end] = dataPoint.y; // Pobierz pocz¹tek i koniec zakresu czasowego
                    return {
                        description: dataPoint.description || `Activity ${index + 1}`,
                        timeStart: dataPoint.timeStart,
                        timeEnd: dataPoint.timeEnd,
                        duration: dataPoint.duration,
                        portals: dataPoint.portals,
                        seed: dataPoint.seed,
                        color: dataset.backgroundColor[index] || 'black'
                    };
                });

                let offsetX = [0, 25, 50, 75];
                let offset = 0;
                let last = 0;

                meta.data.forEach((bar, index) => {
                    const barX = bar.x;
                    const barY = bar.y;
                    const barMiddle = bar.y + (bar.height / 2);

                    const activity = activities[index];

                    ctx.fillStyle = activity.color;
                    ctx.strokeStyle = activity.color;

                    const plusX = offsetX[index % 4];

                    //if (activity.seed == -1) {
                    //    console.log(activity);
                   // }

                    //console.log(activity.description);
                    if (bar.height == 0 && activity.seed != 1) { // whispers
                        if (last - 5 <= barY) {
                            offset = 0;
                        }
                        else {
                            offset -= 0; //5
                        }
                        last = barY;

                        const result = [];
                        result.push(activity.description.slice(0, 70));

                        if (70 < activity.description.length) {
                            result.push(activity.description.slice(70));
                        }
                       

                        if (index % 2) {
                            ctx.textAlign = 'left';
                            ctx.beginPath();
                            ctx.moveTo(barX, barMiddle);
                            ctx.lineTo(barX + 135, barMiddle + offset);
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.closePath();
                            result.forEach((item, index) => {
                                ctx.fillText(`${item}`, barX + 140 + index * 11, barMiddle + 4 + offset + index * 11);
                            });
                        }
                        else {
                            ctx.textAlign = 'right';
                            ctx.beginPath();
                            ctx.moveTo(barX, barMiddle);
                            ctx.lineTo(barX - 135, barMiddle + offset);
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.closePath();
                            result.forEach((item, index) => {
                                ctx.fillText(`${item}`, barX - 140 + index * 11, barMiddle + 4 + offset + index * 11);
                            });
                        }
                        
                    }
                    else if (activity.seed < 2) { // hideouts, cities
                        ctx.beginPath();
                        ctx.moveTo(barX, barY);
                        ctx.lineTo(barX + 15, barY);
                        ctx.lineTo(barX + 15, barY + bar.height);
                        ctx.lineTo(barX, barY + bar.height);
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.closePath();
                        ctx.fill();

//                        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                        ctx.font = '12px Arial';
                        ctx.textAlign = 'left';
                        ctx.fillText(`${activity.description}, ${activity.duration}`, barX + 20, barMiddle + 4);
                    }
                    else { // maps, areas with seeds > 1
                        //const text = `${activity.timeStart}-${activity.timeEnd} (${activity.duration}, visits: ${activity.portals}) ${activity.description}`;
                        const text = `${activity.description}, ${activity.duration}, visits: ${activity.portals}`;
                        const textLength = 15;
                        ctx.beginPath();
                        ctx.moveTo(barX - textLength, barY);
                        ctx.lineTo(barX, barY);
                        ctx.lineTo(barX, barY + bar.height);
                        ctx.lineTo(barX - textLength, barY + bar.height);
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.closePath();
                        ctx.fill();

                        //ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                        ctx.font = '12px Arial';
                        ctx.textAlign = 'right';
                        //ctx.fillText(`${activity.timeStart} - ${activity.timeEnd} ${activity.description}`, barX - 65, barMiddle + 4);
                        ctx.fillText(`${text}`, barX - 20, barMiddle + 4);
                    }
                });
            }
        }
    ]
};


function TodayChartRender(data) {
    const ctx = document.getElementById('todayChart').getContext('2d');

    if (todayChartInstance) {
        todayChartInstance.destroy();
    }
    const backgroundColorTab = data.map((_, index) => colors[index % colors.length]);

    todayChartData = {
        datasets: [
            {
                data: data,
                backgroundColor: backgroundColorTab,
                barThickness: 1,
                grouped: false
            }
        ]
    };

    todayChartConfig.data = todayChartData;
    todayChartConfig.options.scales.y.max = todayChartMaxY == 24 ? 24 : todayChartMaxY + 1;
    todayChartConfig.options.scales.y.min = todayChartMaxY == 24 ? 0 : todayChartMaxY - 1;

    todayChartInstance = new Chart(ctx, todayChartConfig);
}

function TodayChartGeneratingLevelsData(filteredResults, sessions) {
    sessionsDecimal = [];
    for (let i = 0; i < sessions.length; i += 2) {
        let start = 0, end = 0;
        if (sessions[i].content.pattern.includes("closed")) {
            end = timeToDecimal(sessions[i].content.time);
            start = sessions[i + 1] ? timeToDecimal(sessions[i + 1].content.time) : 0;
        }
        else { // opened
            start = timeToDecimal(sessions[i].content.time);
            end = sessions[i + 1] ? timeToDecimal(sessions[i + 1].content.time) : timeToDecimal(sessions[i].content.timeEnd);
            //console.log(sessions[i].content);
            //console.log(end);
        }

        sessionsDecimal.push({
            start: start,
            end: end
        });
    }

    const data = [];
    for (let i = 0; i < filteredResults.length; i++) {
        const current = filteredResults[i];
        const next = filteredResults[i + 1];

        let start = timeToDecimal(current.content.time); // Bie¿¹cy czas
        // decimal
        let end = next ? timeToDecimal(next.content.time) : start;
        // hh:mm:ss
        let timeEnd = next ? next.content.time : current.content.time;

        const adjusted = adjustStartEnd(sessionsDecimal, start, end);
        if (adjusted.end != end) {
            end = adjusted.start;
            timeEnd = decimalToTime(end + 0.0005);
        }
        if (filteredResults.length - 1 == i) {
            timeEnd = sessions[sessions.length - 1].content.timeEnd;
            end = timeToDecimal(sessions[sessions.length - 1].content.timeEnd);
        }


        const currentSeed = current.content.seed;
        let alreadyAdded = false;
        if (currentSeed > 2) {
            for (let j = 0; j < data.length; j++) {
                if (currentSeed == data[j].seed) {
                    data[j] = {
                        description: data[j].description,
                        timeStart: data[j].timeStart,
                        timeEnd: next ? next.content.time : 0,
                        duration: calculateDuration(data[j].timeStart, timeEnd),
                        portals: data[j].portals + 1,
                        seed: data[j].seed,
                        x: 0,
                        y: [data[j].y[0], end] // Zakres czasowy
                    }
                    alreadyAdded = true;
                    break;
                }
            }
        }

        if (alreadyAdded) {
            continue;
        }

        const event = {
            description: `${current.content.areaName}`,
            timeStart: current.content.time,
            timeEnd: next ? next.content.time : 0,
            duration: calculateDuration(current.content.time, timeEnd),
            portals: 1,
            seed: current.content.seed,
            x: 0,
            y: [start, end] // Zakres czasowy
        };

        data.push(event); 
    }

    if (data.length > 2) {
        todayChartMaxY = timeToDecimal(data[data.length - 1].timeStart);
    }
    return data;
}

function adjustStartEnd(sessionsDecimal, start, end) {
    for (let i = 0; i < sessionsDecimal.length; i++) {
        const session = sessionsDecimal[i];
        // SprawdŸ, czy start mieœci siê w zakresie
        if (start >= session.start && start <= session.end) {
            // Jeœli end wychodzi poza zakres sesji
            if (end > session.end || end == 0) {
                end = session.end; // Ogranicz end do wartoœci session.end
            }
            return { start, end }; // Zwróæ zmienione wartoœci
        }
    }
    // Jeœli nie znaleziono pasuj¹cego zakresu, zwróæ oryginalne wartoœci
    return { start, end };
}

function TodayChartWhispersFromData(filteredResults) {
    const data = [];
    for (let i = 0; i < filteredResults.length; i++) {
        const current = filteredResults[i];
        const timeDecimal = timeToDecimal(current.content.time);

        const event = {
            description: `${current.content.direction} ${current.content.playerName} ${current.content.message}`,
            timeStart: current.content.time,
            timeEnd: current.content.time,
            duration: 0,
            portals: 0,
            seed: current.content.seed,
            x: 0,
            y: [timeDecimal, timeDecimal] 
        };

        data.push(event);
    }

    return data;
}

function TodayChartGamingSessionsData(filteredResults) {
    const data = [];
    for (let i = 0; i < filteredResults.length; i++) {
        const current = filteredResults[i];
        const timeDecimal = timeToDecimal(current.content.time);

        const event = {
            description: current.content.pattern,
            timeStart: current.content.time,
            timeEnd: current.content.time,
            seed: -1,
            x: 0,
            y: [timeDecimal, timeDecimal]
        };

        data.push(event);
    }

    return data;
}

function TodayChartPlayerHasBeenSlainData(filteredResults) {
    const data = [];
    for (let i = 0; i < filteredResults.length; i++) {
        const current = filteredResults[i];
        const timeDecimal = timeToDecimal(current.content.time);

        const event = {
            description: `${current.content.playerName} ${current.content.message}`,
            timeStart: current.content.time,
            timeEnd: current.content.time,
            seed: -1,
            x: 0,
            y: [timeDecimal, timeDecimal]
        };

        data.push(event);
    }

    return data;
}

function TodayChartPlayerLevelTodayData(filteredResults) {
    const data = [];
    for (let i = 0; i < filteredResults.length; i++) {
        const current = filteredResults[i];
        const timeDecimal = timeToDecimal(current.content.time);

        const event = {
            description: `${current.content.playerName} ${current.content.level}`,
            timeStart: current.content.time,
            timeEnd: current.content.time,
            seed: -1,
            x: 0,
            y: [timeDecimal, timeDecimal]
        };

        data.push(event);
    }

    return data;
}






