let decimalLastDayTime = 1;
let tradeAcceptedToday = 0;



function SetSumTimeToday() {
    decimalLastDayTime = dailyInGameTimeChartConfig.data.datasets[0].data[dailyInGameTimeChartConfig.data.datasets[0].data.length - 1].y;
    const tab = decimalToTime(decimalLastDayTime).split(':');
    document.getElementById("id-game-time-today").innerText = `${tab[0]} h ${tab[1]} min`;
}

function SetMostVisitedAreaToday(generatingLevelsToday) {
    if (generatingLevelsToday.length < 2) {
        return;
    }

    const dataMap = {};
    generatingLevelsToday.forEach((content) => {
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
                seed
            };
        }
    });
    //console.log(dataMap);
    const sorted = Object.values(dataMap).sort((a, b) => {
        const sumA = a.data.reduce((sum, entry) => sum + entry.y, 0);
        const sumB = b.data.reduce((sum, entry) => sum + entry.y, 0);
        return sumB - sumA;
    });
    //console.log(sorted);
    let instancesCounter = 0;
    const tab = [];
    for (const record of sorted) {
        if (record.seed > 2) {
            instancesCounter += record.data.length;
            tab.push({ name: record.label, i: record.data.length });
        }
    }


    if (tab.length > 1) {
        document.getElementById("id-most-visited-today").innerText = `${tab[0].name} x${tab[0].i} (${(tab[0].i / instancesCounter * 100).toFixed(0)}%)`;

        SetAverageTimeNoHideout(tab[0].name, tab[0].i);
        document.getElementById("id-all-visited-today").innerText = `${instancesCounter}`;
    }
}

function SetAverageTimeNoHideout(bestMapName, eventCount) {
    // duration from chart
    if (!todayChartInstance || todayChartInstance.data.datasets[0].data.length < 2) {
        console.log("chart data", todayChartInstance);
        return;
    }
    let sumTime = 0;
    let sumTimeSeedOne = 0;
    todayChartInstance.data.datasets[0].data.forEach(record => {
        if (record.description === bestMapName) {
            sumTime += record.y[1] - record.y[0];
        } else if (record.seed === 1) {
            sumTimeSeedOne += record.y[1] - record.y[0];
        }
    });

    const tabSeedOne = decimalToTime(sumTimeSeedOne).split(':');
    if (tabSeedOne[0] === '0') {
        document.getElementById("id-time-in-hideout").innerText = `${RemoveZero(tabSeedOne[1])} min ${RemoveZero(tabSeedOne[2])} sec`;
    } else {
        document.getElementById("id-time-in-hideout").innerText = `${tabSeedOne[0]} h ${RemoveZero(tabSeedOne[1])} min ${RemoveZero(tabSeedOne[2])} sec`;
    }
    

    const tab = decimalToTime(sumTime).split(':');
    if (tab[0] === '0') {        
      //  if (tab[1][0] === '0') {
       //     document.getElementById("id-average-time-today").innerText = `${tab[1][1]} min ${RemoveZero(tab[2])} sec`;
      //  } else {
            document.getElementById("id-average-time-today").innerText = `${RemoveZero(tab[1])} min ${RemoveZero(tab[2])} sec`;
      //  }
    } else {
        document.getElementById("id-average-time-today").innerText = `${tab[0]} h ${RemoveZero(tab[1])} min ${RemoveZero(tab[2])} sec`;
    }

    const tab2 = decimalToTime(sumTime / eventCount).split(':');
    if (tab2[0] === '0') {
        if (tab2[1][0] === '0') {
            document.getElementById("id-average-in-one-today").innerText = `${tab2[1][1]} min ${tab2[2]} sec`;
        } else {
            document.getElementById("id-average-in-one-today").innerText = `${tab2[1]} min ${tab2[2]} sec`;
        }
    } else {
        document.getElementById("id-average-in-one-today").innerText = `${tab2[0]} h ${tab2[1]} min ${tab2[2]} sec`;
    }
    
}

function SetDeathsLevelTodayStats(playerHasBeenSlainToday, playerLevelToday) {
    document.getElementById("id-deaths-today").innerText = `${playerHasBeenSlainToday.length}`;
    document.getElementById("id-level-up-today").innerText = `${playerLevelToday.length}`;
}

function SetTradesTodayStats(todayReverse) {
    const accepted = CutTableByDate(tradeAcceptedCounter, todayReverse);
    tradeAcceptedToday = accepted.length;
    document.getElementById("id-trades-today").innerText = `${tradeAcceptedToday}`;
}

function SetAverageTimeForTradeTodayStats() {
    if (tradeAcceptedToday < 1) {
        return;
    }

    const tab = decimalToTime(decimalLastDayTime / tradeAcceptedToday).split(':');
    const h = tab[0];
    const min = RemoveZero(tab[1]);
    const sec = RemoveZero(tab[2]);
    if (h !== '0') {
        document.getElementById("id-average-time-per-trade").innerText = `${h} h ${min} min ${sec} sec`;
    }
    else {
        document.getElementById("id-average-time-per-trade").innerText = `${min} min ${sec} sec`;
    }
}

function SetWhispersTodayStats(numberFrom, numberTo) {
    document.getElementById("id-whispers-from-today").innerText = `${numberFrom} received`;
    document.getElementById("id-whispers-to-today").innerText = `${numberTo} sent`;
}