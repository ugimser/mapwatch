let whispersChartInstance = null;

function WhispersChartRender() {
    const ctx = document.getElementById('whispersChart').getContext('2d');
    let nullCounter = 0;
    if (whispersChartInstance) {
        whispersChartInstance.destroy();
    }

    const dataMap = {};
    let label = "@From";

    whisperFrom.forEach((record, index) => {
        if (!record.content) {
            nullCounter++;
            return;
        }
        let date = "";
        try {
            date = record.content.date;
        } catch (err) {
            console.log("WhispersChartRender ", index, record, err);
            
        }

        if (dataMap[label]) {
            // SprawdŸ, czy wpis dla danej daty ju¿ istnieje
            const dateEntry = dataMap[label].data.find((entry) => entry.x === date);

            if (dateEntry) {
                // Zaktualizuj wartoœæ `y` dla istniej¹cej daty
                dateEntry.y += 1;
            } else {
                // Dodaj nowy wpis dla daty
                dataMap[label].data.push({ x: date, y: 1 });
            }
        } else {
            // Utwórz nowy wpis dla etykiety `@From`
            dataMap[label] = {
                label,
                data: [{ x: date, y: 1 }],
                backgroundColor: null,
            };
        }
    });

    label = "@To";

    whisperTo.forEach((record) => {
        if (!record.content) {
            nullCounter++;
            return;
        }
        const date = record.content.date;

        if (dataMap[label]) {
            // SprawdŸ, czy wpis dla danej daty ju¿ istnieje
            const dateEntry = dataMap[label].data.find((entry) => entry.x === date);

            if (dateEntry) {
                // Zaktualizuj wartoœæ `y` dla istniej¹cej daty
                dateEntry.y += 1;
            } else {
                // Dodaj nowy wpis dla daty
                dataMap[label].data.push({ x: date, y: 1 });
            }
        } else {
            // Utwórz nowy wpis dla etykiety `@From`
            dataMap[label] = {
                label,
                data: [{ x: date, y: 1 }],
                backgroundColor: null,
            };
        }
    });
    
    Object.values(dataMap).forEach((item, index) => {
        item.backgroundColor = colors[index % colors.length];
    });

    // Konwersja `dataMap` do oczekiwanej struktury
    const whispersChartData = {
        datasets: Object.values(dataMap) // Zmiana mapy na tablicê
    };
    
    whispersChartConfig.data = whispersChartData;
    whispersChartInstance = new Chart(ctx, whispersChartConfig);

    WhisperStats();
    //console.log(`End GeneratedInstancesAllTimeChartRender()`);
    console.log(`${nullCounter}x Null messages`);
}

function WhisperStats() {
    // @From
    document.getElementById("whispersFromAllCounter").innerText = `${whisperFrom.length}x @From messages:`;
    let sortedFrom = GetSortedWhispers(whisperFrom);

    let topFromList = "";
    for (let i = 0; i < 10 && i < sortedFrom.length; i++) {
        const name = sortedFrom[i].playerName.split(" ");
        topFromList += `${i + 1}. ${name.length > 1 ? name[1] : name[0]} (${sortedFrom[i].count} messages)\n`;
    }
    document.getElementById("whispersFromAllTop").innerText = topFromList;

    // @To
    document.getElementById("whispersToAllCounter").innerText = `${whisperTo.length}x @To messages:`;
    sortedFrom = GetSortedWhispers(whisperTo);

    topFromList = "";
    for (let i = 0; i < 10 && i < sortedFrom.length; i++) {
        const name = sortedFrom[i].playerName.split(" ");
        topFromList += `${i + 1}. ${name.length > 1 ? name[1] : name[0]} (${sortedFrom[i].count} messages)\n`;
    }
    document.getElementById("whispersToAllTop").innerText = topFromList;

    // Last whispers
    //const result = [];
   // for (let i = whisperFrom.length - 1, j = whisperTo.length - 1; result.length < 10 && i > 0 && j > 0; i--, j--) {
   //     result.push(whisperFrom[i]);
   //     result.push(whisperTo[j]);
    //}
    //console.log(result);
    topFromList = "";
    for (let i = whisperFrom.length - 1; i > whisperFrom.length - 10; i--) {
        if (!whisperFrom[i]) {
            continue;
        }
        const record = whisperFrom[i].content;
        topFromList += `${record.date} ${record.time} ${record.direction} ${record.playerName} ${record.message}\n`;
    }
    document.getElementById("whispersLastFromList").innerText = topFromList;

    topFromList = "";
    for (let i = whisperTo.length - 1; i > whisperTo.length - 10; i--) {
        if (!whisperTo[i]) {
            continue;
        }
        const record = whisperTo[i].content;
        topFromList += `${record.date} ${record.time} ${record.direction} ${record.playerName} ${record.message}\n`;
    }
    document.getElementById("whispersLastToList").innerText = topFromList;
}

function GetSortedWhispers(whisperTab) {
    const playerStats = {};
    whisperTab.forEach((record) => {
        if (!record.content) {
            return;
        }
        const playerName = record.content.playerName;

        if (playerStats[playerName]) {
            playerStats[playerName] += 1; // Zwiêksz licznik
        } else {
            playerStats[playerName] = 1; // Dodaj nowego gracza
        }
    });

    return sortedPlayerStats = Object.entries(playerStats) // Przekszta³æ obiekt w tablicê
        .sort(([, countA], [, countB]) => countB - countA) // Sortuj malej¹co po liczniku
        .map(([playerName, count]) => ({ playerName, count })); // Mapa na obiekty
}




const whispersChartData = {
    datasets: [
        {
            label: "@From",
            data: [
                { x: '2025/01/19', y: 1 },
                { x: '2025/01/20', y: 2 },
                { x: '2025/01/21', y: 3 },
                { x: '2025/01/22', y: 5 },
                { x: '2025/01/23', y: 8 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 1)',
        },
        {
            label: "@To",
            data: [
                { x: '2025/01/19', y: 1 },
                { x: '2025/01/20', y: 2 },
                { x: '2025/01/22', y: 5 },
                { x: '2025/01/23', y: 8 },
            ],
            backgroundColor: 'rgba(175, 11, 192, 1)',
        }
    ]
};


const whispersChartConfig = {
    type: 'bar',
    data: whispersChartData,
    options: {
        plugins: {
            title: {
                display: false,
                text: 'Chart.js Bar Chart - Stacked'
            },
        },
        responsive: true,
        scales: {
            x: {
                type: 'category',
                stacked: true,
                title: {
                    display: false,
                    text: 'Dates'
                }
            },
            y: {
                stacked: true,
                title: {
                    display: false,
                    text: 'Values'
                }
            }
        }
    }
};




