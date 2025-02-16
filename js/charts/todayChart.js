let todayChartInstance = null;
let todayChartMaxY = 24;

let todayChartData = {
    datasets: [
        {
            data: [
                { description: 'map 1', seed: 1, x: 0, y: [2, 2.5] },
                { description: 'map 2', seed: 1, x: 0, y: [2.2, 3] },
                { description: 'event', seed: 1, x: 0, y: [3.2, 3.2] }],
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
        indexAxis: 'x', 
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            zoom: {
                pan: {
                    enabled: true, 
                    mode: 'y',
                },
                zoom: {
                    wheel: {
                        modifierKey: 'shift',
                        enabled: true 
                    },
                    pinch: {
                        enabled: true 
                    },
                    mode: 'y',
                },
                limits: {
                    y: { min: 0, max: 24 }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { display: false }, 
                border: { color: 'transparent' }
            },
            y: {
                type: 'linear',
                ticks: {
                    z: 1,
                    stepSize: 1,
                    color: 'white',
                    padding: -3,
                    callback: (value) => `${decimalToTime(value)}`
                },
                grid: { display: true, color: '#111111', z: 0 },
                position: 'center',
                offset: true,
                border: { display: true, color: 'white', z: 1 },
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
            id: "noDataText",
            beforeDraw: (chart) => {


                if (chart.data.datasets.length === 0 || chart.data.datasets.every(ds => ds.data.length === 0)) {
                    const ctx = chart.ctx;
                    const { width, height } = chart;
                    ctx.save();

                    ctx.fillStyle = 'rgba(55, 55, 55, 1)';
                    ctx.fillRect(0, height / 3, width, height / 3);

                    ctx.fillStyle = "white";
                    ctx.font = "36px Arial";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText("No data from today, but you can check the other charts", width / 2, height / 2);

                    ctx.restore();
                }
            }
        },
        {
            id: 'customLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;

                const dataset = chart.data.datasets[0];
                const meta = chart.getDatasetMeta(0);

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

                meta.data.forEach((bar, index) => {
                    const barX = bar.x;
                    const barY = bar.y;
                    const barMiddle = bar.y + (bar.height / 2);

                    const activity = activities[index];

                    ctx.fillStyle = activity.color;
                    ctx.strokeStyle = activity.color;

                    //console.log(activity.description);
                    if (bar.height == 0 && activity.seed != 1) { // whispers

                        const result = [];
                        const maxLength = 70;
                        let text = activity.description;

                        while (text.length > maxLength) {
                            let cutIndex = text.lastIndexOf(" ", maxLength); // ZnajdŸ ostatni¹ spacjê przed 70. znakiem

                            if (cutIndex === -1) cutIndex = maxLength; // Jeœli brak spacji, tnij w maxLength

                            result.push(text.slice(0, cutIndex));
                            text = text.slice(cutIndex + 1); // Usuñ podzielon¹ czêœæ + spacjê
                        }

                        if (text.length) {
                            result.push(text);
                        }

                        if (index % 2) {
                            ctx.textAlign = 'left';
                            ctx.beginPath();
                            ctx.moveTo(barX, barMiddle);
                            ctx.lineTo(barX + 135, barMiddle);
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.closePath();
                            result.forEach((item, index) => {
                                ctx.fillText(`${item}`, barX + 140 + index * 11, barMiddle + 4 + index * 11);
                            });
                        }
                        else {
                            ctx.textAlign = 'right';
                            ctx.beginPath();
                            ctx.moveTo(barX, barMiddle);
                            ctx.lineTo(barX - 135, barMiddle);
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.closePath();
                            result.forEach((item, index) => {
                                ctx.fillText(`${item}`, barX - 140 + index * 11, barMiddle + 4 + index * 11);
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

    if (data.length > 2) {
        todayChartMaxY = timeToDecimal(data[data.length - 1].timeEnd);
    }

    todayChartConfig.data = todayChartData;
    todayChartConfig.options.scales.y.max = todayChartMaxY == 24 ? 24 : todayChartMaxY + 0.25;
    todayChartConfig.options.scales.y.min = todayChartMaxY == 24 ? 0 : todayChartMaxY - 0.5;

    todayChartInstance = new Chart(ctx, todayChartConfig);
}

function TodayChartGeneratingLevelsData(filteredResults, sessions) {
    const data = [];
    if (filteredResults.length < 2 || sessions.length < 1) {
        //console.log("TodayChartGeneratingLevelsData() no data")
        return data;
    }
    sessionsDecimal = [];
    for (let i = 0; i < sessions.length; i+=2) {
        let start = 0, end = 0;
        if (sessions[i].content.pattern.includes("closed") && i > 0) {
            end = timeToDecimal(sessions[i].content.time);
            start = sessions[i - 1] ? timeToDecimal(sessions[i - 1].content.time) : 0;
        }
        else if (sessions[i].content.pattern.includes("closed") && i === 0) {
            end = timeToDecimal(sessions[i].content.time);
            start = 0;
            i--;
        }
        else if (sessions.length - 1 === i){ // last open, but not close
            start = timeToDecimal(sessions[i].content.time);
            end = 24;
        }
        else { // opened
            start = timeToDecimal(sessions[i].content.time);
            end = sessions[i + 1] ? timeToDecimal(sessions[i + 1].content.time) : timeToDecimal(sessions[i].content.timeEnd);
        }

        if (start > end) {
            sessionsDecimal.push({
                start: start,
                end: 24
            });
            sessionsDecimal.push({
                start: 0,
                end: end
            });
        }
        else {
            sessionsDecimal.push({
                start: start,
                end: end
            });
        }
    }
    //console.log("sessionsDecimal", sessionsDecimal);
    //console.log("sessions", sessions);
    for (let i = 0; i < filteredResults.length; i++) {
        if (!filteredResults[i] || !filteredResults[i - 1] || !filteredResults[i].content) {
            continue;
        }
        const current = filteredResults[i];
        const next = filteredResults[i + 1];

        let start = timeToDecimal(current.content.time); // Bie¿¹cy czas
        // decimal
        let end = next ? timeToDecimal(next.content.time) : start;
        // hh:mm:ss
        let timeEnd = next ? next.content.time : current.content.time;

        const adjusted = adjustStartEnd(sessionsDecimal, start, end);
        //console.log(adjusted, current);
        if (adjusted.end != end) {
            end = adjusted.end;
            timeEnd = decimalToTime(end);
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
                        timeEnd: timeEnd,//next ? next.content.time : 0,
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
            timeEnd: timeEnd,//next ? next.content.time : 0,
            duration: calculateDuration(current.content.time, timeEnd),
            portals: 1,
            seed: current.content.seed,
            x: 0,
            y: [start, end] // Zakres czasowy
        };

        data.push(event); 
    }
    //console.log(data);
    //console.log(data[data.length-1]);
    //console.log("TodayChartGeneratingLevelsData", data);
    
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

function TodayChartWhisperWithoutDirectionTodayData(filteredResults) {
    const data = [];
    for (let i = 0; i < filteredResults.length; i++) {
        const current = filteredResults[i];
        const timeDecimal = timeToDecimal(current.content.time);

        const event = {
            description: `${current.content.playerName}: ${current.content.message}`,
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





