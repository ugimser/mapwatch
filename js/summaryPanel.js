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
            // Sprawdź, czy istnieje wpis dla danej daty
            const dateEntry = dataMap[label].data.find((entry) => entry.x === date && entry.seed === seed);

            if (dateEntry) {
                // Jeśli wpis dla tej daty istnieje, zaktualizuj wartość `y`
                dateEntry.y += 1;
            } else {
                // Jeśli wpis dla tej daty nie istnieje, dodaj nową datę z wartością `y: 1`
                dataMap[label].data.push({ x: date, y: 1, seed });
            }

            // Aktualizuj seed (jeśli wymagane)
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

        document.getElementById("id-most-visited-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
            let html = "";
            for (let i = 0; tab.length > i && i < 10; i++) {
                html += `${i + 1}. ${tab[i].name} x${tab[i].i} (${(tab[i].i / instancesCounter * 100).toFixed(0)}%)<br />`;
            }
            tooltipContainer.innerHTML = html;
            tooltipContainer.classList.add("show");

            const rect = event.target.getBoundingClientRect();
            tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
            tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
        });
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
        document.getElementById("id-average-time-today").innerText = `${RemoveZero(tab[1])} min ${RemoveZero(tab[2])} sec`;
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

function SetMediumInstanceLevelTodayStats(generatingLevelsToday) {
    if (generatingLevelsToday.length < 1) {
        return;
    }
   
    const tab = [];
    let sumLevels = 0;
    let instanceCounter = 0;
    generatingLevelsToday.forEach(record => {
        if (record.content.seed > 1 && record.content.level > 1) {
            sumLevels += record.content.level;
            instanceCounter++;
            const existing = tab.find(item => item.areaName === record.content.areaName && item.level === record.content.level);

            if (existing) {
                existing.counter += 1;
            } else {
                tab.push({
                    areaName: record.content.areaName,
                    level: record.content.level,
                    counter: 1,
                });
            }
        }
    });
    tab.sort((a, b) => b.counter - a.counter);
    //console.log(tab);
    document.getElementById("id-medium-instance-level-today").innerText = `${(sumLevels / instanceCounter).toFixed(2).replace(/\.?0+$/, '')} lvl`;
    document.getElementById("id-medium-instance-level-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = "";
        tab.forEach(record => {
            if (poeVersion === 1) {
                const tier = GetPoE1MapTier(record.level) !== -1 ? ` T${GetPoE1MapTier(record.level)}` : '';
                html += `${record.counter}x ${record.areaName}${tier}<br />`;
            }
            else {
                const tier = GetPoE2WaystoneTier(record.level) !== -1 ? ` T${GetPoE2WaystoneTier(record.level)}` : '';
                html += `${record.counter}x ${record.areaName}${tier}<br />`;
            }
        });
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}

function SetUsedPortalsTodayStats() {
    if (todayChartInstance.data.datasets[0].data.length < 1) {
        return;
    }
    let sumPortals = 0;
    let sumInstances = 0;
    todayChartInstance.data.datasets[0].data.forEach(record => {
        if (record.portals && record.seed > 1) {
            sumPortals += record.portals;
            sumInstances++;
        }
    });
    const portalsPerMap = (sumPortals / sumInstances).toPrecision(3);
    document.getElementById("id-used-portals-today").innerText = `${sumPortals}`;
    document.getElementById("id-used-portals-on-average-today").innerText = `${portalsPerMap} / map`;
}

function SetYourBestFriendsTodayStats(todayReverse) {
    if (NPCsAndBossesChartInstance.data.datasets < 1) {
        return;
    }

    const todayNormal = new Intl.DateTimeFormat("en-GB", { dateStyle: "short" }).format(todayReverse).split('/');
    const todaySick = `${todayNormal[2]}/${todayNormal[1]}/${todayNormal[0]}`;
    const lastDay = new Map();
    NPCsAndBossesChartInstance.data.datasets.forEach(record => {
        record.data.forEach(item => {
            if (item.x === todaySick) {
                lastDay.set(record.label, item.y);
            }
        });
    });

    const sortedArray = Array.from(lastDay).sort((a, b) => b[1] - a[1]);

    const messagesFromNPCLastDay = [];
    messagesFromMastersAndBosses.forEach(record => {
        if (record.content.date === todaySick) {
            messagesFromNPCLastDay.push(record);
        }
    });
    const generatingLevelLastDay = [];
    generatingLevels.forEach(record => {
        if (record.content.date === todaySick) {
            generatingLevelLastDay.push(record);
        }
    });

    const bothTabs = [...generatingLevelLastDay, ...messagesFromNPCLastDay].sort((a, b) => new Date(`${a.content.date} ${a.content.time}`) - new Date(`${b.content.date} ${b.content.time}`));

    const instanceWithNPCsLastDay = new Map();
    const npcSeenInInstance = new Set();
    let lastInstanceSeed = -2;

    bothTabs.forEach((record) => {
        const currentSeed = record.content.seed;
        if (currentSeed === 1) {
            return;
        }
        const npcName = record.content.name;

        if (currentSeed !== -1 && currentSeed !== lastInstanceSeed) {
            lastInstanceSeed = currentSeed;
            npcSeenInInstance.clear();
        }

        if (npcName && !npcSeenInInstance.has(npcName)) {
            npcSeenInInstance.add(npcName);
            instanceWithNPCsLastDay.set(npcName, (instanceWithNPCsLastDay.get(npcName) || 0) + 1);
        }
    });

    document.getElementById("id-your-best-friends-today").innerText = `${sortedArray[0][0]}`;
    document.getElementById("id-your-best-friends-number-today").innerText = `${instanceWithNPCsLastDay.get(sortedArray[0][0])} maps together`;

    document.getElementById("id-your-best-friends-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<h4>Messages from NPCs:</h4>---<br />`;
        for (let i = 0; i < 10 && i < sortedArray.length; i++) {
            html += `<b>${sortedArray[i][0]}</b>: ${instanceWithNPCsLastDay.get(sortedArray[i][0])} maps, ${sortedArray[i][1]} voice lines<br />`;
        }

        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}

function SetDeathsLevelTodayStats(playerHasBeenSlainToday, playerLevelToday) {
    document.getElementById("id-deaths-today").innerText = `${playerHasBeenSlainToday.length}`;
    document.getElementById("id-level-up-today").innerText = `${playerLevelToday.length}`;
}

function SetTradesTodayStats(todayReverse) {
    const accepted = CutTableByDate(tradeAcceptedCounter, todayReverse);
    tradeAcceptedToday = accepted.length;
    document.getElementById("id-trades-today").innerText = `${tradeAcceptedToday}`;

    const completed = CutTableByDate(playerTradeCompleted, todayReverse);
    document.getElementById("id-trades-today-completed").innerText = `${completed.length}`;
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

function SetWhispersTodayStats(whisperFrom, whisperTo) {
    document.getElementById("id-whispers-from-today").innerText = `${whisperFrom.length} received`;
    document.getElementById("id-whispers-to-today").innerText = `${whisperTo.length} sent`;

    document.getElementById("id-whispers-from-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<h4>Received:</h4>`;
        let tabLength = whisperFrom.length;
        for (let i = tabLength - 1; i >= 0 && i > tabLength - 6; i--) {
            html += `${tabLength - i}. <b>${whisperFrom[i].content.playerName}:</b> ${whisperFrom[i].content.message}<br />`;
        }

        html += `<br /><h4>Sent:</h4>`;
        tabLength = whisperTo.length;
        for (let i = tabLength - 1; i >= 0 && i > tabLength - 6; i--) {
            html += `${tabLength - i}. <b>${whisperTo[i].content.playerName}:</b> ${whisperTo[i].content.message}<br />`;
        }
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}

function SetBigestTradeTodayStats(whisperFromToday) {
    const tabMirr = [];
    const tabDiv = [];
    const tabEx= [];
    const tabC = [];

    whisperFromToday.forEach((record) => {
        if (!record.content) {
            return;
        }
        const message = record.content.message;
        if (message.includes(' to buy ')) {
            const matchMirr = message.match(/(\d+)\s+mirror/i);
            if (matchMirr) {
                tabMirr.push({ playerName: record.content.playerName, message: message, value: Number(matchMirr[1]) });
            }

            const matchD = message.match(/(\d+)\s+divine/i);
            if (matchD) {
                tabDiv.push({ playerName: record.content.playerName, message: message, value: Number(matchD[1]) });
            }

            const matchEx = message.match(/(\d+)\s+exalted/i);
            if (matchEx) {
                tabEx.push({ playerName: record.content.playerName, message: message, value: Number(matchEx[1]) });
            }

            const matchC = message.match(/(\d+)\s+chaos/i);
            if (matchC) {
                tabC.push({ playerName: record.content.playerName, message: message, value: Number(matchC[1]) });
            }
        }
    });

    //console.log(whisperFromToday);
    //console.log(tabDiv);
    let biggestMirrIndex = ReturnBiggestIndexValueMessage(tabMirr);
    let biggestDivIndex = ReturnBiggestIndexValueMessage(tabDiv);
    let biggestExIndex = ReturnBiggestIndexValueMessage(tabEx);
    let biggestCIndex = ReturnBiggestIndexValueMessage(tabC);

    if (biggestMirrIndex < 0 & biggestDivIndex < 0 & biggestExIndex < 0 & biggestCIndex < 0) {
        document.getElementById("id-biggest-from-today").innerText = "-";
        document.getElementById("id-biggest-from-today").parentElement.parentElement.querySelector(".icon").innerText = "💎";
        return;
    }
    
    const theBiggestTab = [
        { name: 'mirror', value: biggestMirrIndex > -1 && tabMirr[biggestMirrIndex].value > -1 ? tabMirr[biggestMirrIndex].value * 120000 : 0, record: tabMirr[biggestMirrIndex], playerName: biggestMirrIndex > -1 ? tabMirr[biggestMirrIndex].playerName : ""},
        { name: 'divine', value: biggestDivIndex > -1 && tabDiv[biggestDivIndex].value > -1 ? tabDiv[biggestDivIndex].value * 150 : 0, record: tabDiv[biggestDivIndex], playerName: biggestDivIndex > -1 ? tabDiv[biggestDivIndex].playerName : ""},
        { name: 'exalted', value: biggestExIndex > -1 && tabEx[biggestExIndex].value > -1 ? tabEx[biggestExIndex].value * 15 : 0, record: tabEx[biggestExIndex], playerName: biggestExIndex > -1 ? tabEx[biggestExIndex].playerName : ""},
        { name: 'chaos', value: biggestCIndex > -1 && tabC[biggestCIndex].value > -1 ? tabC[biggestCIndex].value : 0, record: tabC[biggestCIndex], playerName: biggestCIndex > -1 ? tabC[biggestCIndex].playerName : ""},
    ];

    let oneBigest = ReturnBiggestIndexValueMessage(theBiggestTab);
    document.getElementById("id-biggest-from-today").innerHTML = `${theBiggestTab[oneBigest].record.value} ${theBiggestTab[oneBigest].name}`;
    document.getElementById("id-biggest-from-today").parentElement.parentElement.querySelector(".icon").innerHTML = currencies.get(theBiggestTab[oneBigest].name) || "💎";
    
    document.getElementById("id-biggest-from-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<b>${theBiggestTab[oneBigest].record.playerName}:</b> ${theBiggestTab[oneBigest].record.message}`;
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}


function SetBigestTradeToTodayStats(whisperToToday) {
    const tabMirr = [];
    const tabDiv = [];
    const tabEx = [];
    const tabC = [];

    whisperToToday.forEach((record) => {
        if (!record.content) {
            return;
        }
        const message = record.content.message;
        if (message.includes(' to buy ')) {
            const matchMirr = message.match(/(\d+)\s+mirror/i);
            if (matchMirr) {
                tabMirr.push({ playerName: record.content.playerName, message: message, value: Number(matchMirr[1]) });
            }

            const matchD = message.match(/(\d+)\s+divine/i);
            if (matchD) {
                tabDiv.push({ playerName: record.content.playerName, message: message, value: Number(matchD[1]) });
            }

            const matchEx = message.match(/(\d+)\s+exalted/i);
            if (matchEx) {
                tabEx.push({ playerName: record.content.playerName, message: message, value: Number(matchEx[1]) });
            }

            const matchC = message.match(/(\d+)\s+chaos/i);
            if (matchC) {
                tabC.push({ playerName: record.content.playerName, message: message, value: Number(matchC[1]) });
            }
        }
    });

    //console.log(whisperFromToday);
    let biggestMirrIndex = ReturnBiggestIndexValueMessage(tabMirr);
    let biggestDivIndex = ReturnBiggestIndexValueMessage(tabDiv);
    let biggestExIndex = ReturnBiggestIndexValueMessage(tabEx);
    let biggestCIndex = ReturnBiggestIndexValueMessage(tabC);

    if (biggestMirrIndex < 0 & biggestDivIndex < 0 & biggestExIndex < 0 & biggestCIndex < 0) {
        document.getElementById("id-biggest-to-today").innerText = "-";
        document.getElementById("id-biggest-to-today").parentElement.parentElement.querySelector(".icon").innerText = "💎";
        return;
    }

    const theBiggestTab = [
        { name: 'mirror', value: biggestMirrIndex > -1 && tabMirr[biggestMirrIndex].value > -1 ? tabMirr[biggestMirrIndex].value * 120000 : 0, record: tabMirr[biggestMirrIndex], playerName: biggestMirrIndex > -1 ? tabMirr[biggestMirrIndex].playerName : "" },
        { name: 'divine', value: biggestDivIndex > -1 && tabDiv[biggestDivIndex].value > -1 ? tabDiv[biggestDivIndex].value * 150 : 0, record: tabDiv[biggestDivIndex], playerName: biggestDivIndex > -1 ? tabDiv[biggestDivIndex].playerName : "" },
        { name: 'exalted', value: biggestExIndex > -1 && tabEx[biggestExIndex].value > -1 ? tabEx[biggestExIndex].value * 15 : 0, record: tabEx[biggestExIndex], playerName: biggestExIndex > -1 ? tabEx[biggestExIndex].playerName : "" },
        { name: 'chaos', value: biggestCIndex > -1 && tabC[biggestCIndex].value > -1 ? tabC[biggestCIndex].value : 0, record: tabC[biggestCIndex], playerName: biggestCIndex > -1 ? tabC[biggestCIndex].playerName : "" },
    ];
    
    let oneBigest = ReturnBiggestIndexValueMessage(theBiggestTab);
    document.getElementById("id-biggest-to-today").innerHTML = `${theBiggestTab[oneBigest].record.value} ${theBiggestTab[oneBigest].name}`;
    document.getElementById("id-biggest-to-today").parentElement.parentElement.querySelector(".icon").innerHTML = currencies.get(theBiggestTab[oneBigest].name) || "💎";

    document.getElementById("id-biggest-to-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<b>${theBiggestTab[oneBigest].record.playerName}:</b> ${theBiggestTab[oneBigest].record.message}`;
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}

function ReturnBiggestIndexValueMessage(tab) {
    let biggestNumber = 0;
    let biggestNumberIndex = -1;
    tab.forEach((record, index) => {
        if (record.value > biggestNumber) {
            biggestNumber = record.value;
            biggestNumberIndex = index;
        }
    });
    return biggestNumberIndex;
}

function SetStrikeTradeWhispersWithoutTradeAccepted(whisperToToday, tradeAcceptedToday) {
    const onlyToBuyMessages = [];
    whisperToToday.forEach(record => {
        if (record.content.message.includes(' to buy ')) {
            onlyToBuyMessages.push(record);
        }
    });

    const tab = [...onlyToBuyMessages, ...tradeAcceptedToday];
    tab.sort((a, b) => {
        const timeA = a.content.time;
        const timeB = b.content.time;

        const secondsA = timeToSeconds(timeA);
        const secondsB = timeToSeconds(timeB);

        return secondsA - secondsB;
    });

    let i = 0;
    let maxDist = 0;
    tab.forEach(record => {
        if (record.content.seed == -1) {
            if (i > maxDist) {
                maxDist = i;
            }
            i = 0;
        } else {
            i++;
        }
    });

    document.getElementById("id-streak-trade-without-accepted").innerText = maxDist;
}

function SetPlayerJoinedTheAreaTodayStat(todayReverse, playerTradeCompleted, generatingLevelsToday) {
    const tab = [...CutTableByDate(playerJoinedTheArea, todayReverse), ...playerTradeCompleted, ...generatingLevelsToday];
    tab.sort((a, b) => {
        const timeA = a.content.time;
        const timeB = b.content.time;

        const secondsA = timeToSeconds(timeA);
        const secondsB = timeToSeconds(timeB);

        return secondsA - secondsB;
    });

    const uniqueNames = new Map();
    const regexJoin = /\s:(.*?)\shas joined/;
    const regexLeft = /\s:(.*?)\shas left/;
    tab.forEach((record, index) => {
        if (!record.content.message) {
            return;
        }
        const matchJoin = record.content.message.match(regexJoin);
        const matchLeft = record.content.message.match(regexLeft);
        if (matchJoin) {
            const extractedName = matchJoin[1].trim();
            if (!uniqueNames.has(extractedName)) {
                uniqueNames.set(extractedName, true);
            }
        }
        else if (matchLeft) {
            const extractedName = matchLeft[1].trim();
            if (!uniqueNames.has(extractedName)) {
                uniqueNames.set(extractedName, true);
            }
        }
        else {
            if (record.content.seed === -1) {
                const oneDown = tab[index - 1];
                if (oneDown && oneDown.content.seed !== -1) {
                    uniqueNames.set(`trade in other instance ${index - 1}`, false);
                }
            }
        }
    });
    //console.log(tab);
    //console.log(uniqueNames);
    document.getElementById("id-player-joined-today").innerText = `${uniqueNames.size}`;

    if (uniqueNames.size == 0) {
        return;
    }

    document.getElementById("id-player-joined-today").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<h4>Players:</h4>`;
        let counter = 1;
        uniqueNames.forEach((value, key) => {
            if (value == true) {
                html += `<b>${counter++}. ${key}, </b>`;
            } else {
                html += `${counter++}. No name (PlayerToPlayerTrade), `;
            }
        });
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}