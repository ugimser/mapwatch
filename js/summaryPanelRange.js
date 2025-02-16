const dateInputRangeSummary = flatpickr("#summary-range-date-range", {
    mode: "range",
    dateFormat: "Y-m-d"
});

function RefleshSummaryPanelInRange() {
    // Date range
    const dateRange = [new Date(dateInputRangeSummary.selectedDates[0]), new Date(dateInputRangeSummary.selectedDates[1])];

    const timezoneOffset = dateRange[0].getTimezoneOffset();

    dateRange[0].setMinutes(dateRange[0].getMinutes() - timezoneOffset);
    dateRange[1].setMinutes(dateRange[1].getMinutes() - timezoneOffset);

    const startDate = new Date(dateRange[0].toISOString().split('T')[0].replaceAll('-', '/'));
    const endDate = new Date (dateRange[1].toISOString().split('T')[0].replaceAll('-', '/'));
    //console.log(startDate, endDate);

    CreateRangeSummaryPanelStart(startDate, endDate);
}

function CreateRangeSummaryPanelStart(startDate, endDate) {
    //
    // Game time
    //
    //console.log(dailyInGameTimeChartInstance.data.datasets[0].data);
    let gameTimeAll = 0;
    dailyInGameTimeChartInstance.data.datasets[0].data.forEach(record => {
        if (new Date(record.x) >= startDate && new Date(record.x) <= endDate) {
            gameTimeAll += record.y;
        }
    });    
    const tabGameTime = decimalToTime(gameTimeAll).split(':');
    document.getElementById("id-game-time-range").innerText = `${tabGameTime[0]} h ${tabGameTime[1]} min`;

    //
    // Time in hideouts or towns
    //
    const generatingLevelsInRange = [];
    generatingLevels.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            generatingLevelsInRange.push(record);
        }
    });
    const gamingSessionsInRange = [];
    gamingSessions.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            gamingSessionsInRange.push(record);
        }
    });

    const gamingLevelsWithCalculatedDuration = TodayChartGeneratingLevelsData(generatingLevelsInRange, gamingSessionsInRange);
    //console.log("gamingLevelsWithCalculatedDuration", gamingLevelsWithCalculatedDuration);
    let sumTimeInMaps = 0;
    gamingLevelsWithCalculatedDuration.forEach((instance, index) => {
        if (instance.seed !== 1) {
            if (instance.y[1] > instance.y[0]) {
                sumTimeInMaps += instance.y[1] - instance.y[0];
                //console.log("if sumTimeInMaps", index, sumTimeInMaps);
            }
            else if (instance.duration !== "[durationInSeconds < 0]") { // midnight
                sumTimeInMaps += 24 - instance.y[0];
                sumTimeInMaps += instance.y[1];
                //console.log("else sumTimeInMaps", index, sumTimeInMaps);
                //console.log("else instance", index, instance);
            }
            //console.log("sumTimeInMaps", sumTimeInMaps);
        }
    });

    const tabTimeInHO = decimalToTime(gameTimeAll - sumTimeInMaps).split(':');
    document.getElementById("id-time-in-hideout-range").innerText = `${tabTimeInHO[0]} h ${tabTimeInHO[1]} min`;

    //
    // The most visited area
    //
    const mostVisited = new Map();
    let sumVisidedMaps = 0;
    gamingLevelsWithCalculatedDuration.forEach(record => {
        if (record.seed > 2) {
            sumVisidedMaps++;
            mostVisited.set(record.description, (mostVisited.get(record.description) || 0) + 1);
        } 
    });
    const mostVisitedArray = Array.from(mostVisited, ([description, count]) => ({ description, count })).sort((a, b) => b.count - a.count);
    
    document.getElementById("id-most-visited-range").innerText = `${mostVisitedArray[0].description} x${mostVisitedArray[0].count} (${(mostVisitedArray[0].count / sumVisidedMaps * 100).toFixed(0)}%)`;

    document.getElementById("id-most-visited-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = "";
        for (let i = 0; mostVisitedArray.length > i && i < 10; i++) {
            html += `${i + 1}. ${mostVisitedArray[i].description} x${mostVisitedArray[i].count} (${(mostVisitedArray[i].count / sumVisidedMaps * 100).toFixed(0)}%)<br />`;
        }
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });

    //
    // Time in favorite maps
    //
    let sumTimeInFavoriteMaps = 0;
    gamingLevelsWithCalculatedDuration.forEach(instance => {
        if (instance.seed > 2 && instance.description === mostVisitedArray[0].description) {
            if (instance.y[1] > instance.y[0]) {
                sumTimeInFavoriteMaps += instance.y[1] - instance.y[0];
            }
            else if (instance.duration !== "[durationInSeconds < 0]") {
                sumTimeInFavoriteMaps += 24 - instance.y[0] + instance.y[1];
            }
            //console.log(instance);
        }
    });
    const tabTimeInFavoriteMaps = decimalToTime(sumTimeInFavoriteMaps).split(':');
    document.getElementById("id-average-time-range").innerText = `${tabTimeInFavoriteMaps[0]} h ${tabTimeInFavoriteMaps[1]} min ${tabTimeInFavoriteMaps[2]} sec`;
    const tabTimeInFavoriteMapsAv = decimalToTime(sumTimeInFavoriteMaps / mostVisitedArray[0].count).split(':');
    if (tabTimeInFavoriteMapsAv[0] === '0') {
        document.getElementById("id-average-in-one-range").innerText = `${tabTimeInFavoriteMapsAv[1]} min ${tabTimeInFavoriteMapsAv[2]} sec`;
    }
    else {
        document.getElementById("id-average-in-one-range").innerText = `${tabTimeInFavoriteMapsAv[0]} h ${tabTimeInFavoriteMapsAv[1]} min ${tabTimeInFavoriteMapsAv[2]} sec`;
    }
    
    //
    // All created areas
    //
    document.getElementById("id-all-visited-range").innerText = sumVisidedMaps;

    //
    // Medium area level
    //
    const tabMapsWithLevel = new Map();
    let sumLevels = 0;
    let instanceCounter = 0;
    generatingLevelsInRange.forEach(record => {
        if (record.content.seed > 1 && record.content.level > 1) {
            sumLevels += record.content.level;
            instanceCounter++;

            const key = `${record.content.areaName}-${record.content.level}-${record.content.seed}`;

            if (!tabMapsWithLevel.has(key)) {
                tabMapsWithLevel.set(key, {
                    areaName: record.content.areaName,
                    level: record.content.level,
                    seed: record.content.seed,
                    counter: 1,
                });
            }
        }
    });

    const tabMapsWithLevelUniq = new Map();
    tabMapsWithLevel.forEach(({ areaName, level }) => {
        const key = `${areaName}-${level}`;

        if (tabMapsWithLevelUniq.has(key)) {
            tabMapsWithLevelUniq.get(key).counter += 1;
        } else {
            tabMapsWithLevelUniq.set(key, {
                areaName,
                level,
                counter: 1, 
            });
        }
    });

    const sortedTabMaps = [...tabMapsWithLevelUniq.values()].sort((a, b) => b.counter - a.counter);

    document.getElementById("id-medium-instance-level-range").innerText = `${parseFloat((sumLevels / instanceCounter).toPrecision(3))} lvl`;
    document.getElementById("id-medium-instance-level-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = "";
        sortedTabMaps.forEach(record => {
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

    //
    // Used portals
    //
    document.getElementById("id-used-portals-range").innerText = `${instanceCounter}`;
    document.getElementById("id-used-portals-on-average-range").innerText = `${parseFloat((instanceCounter / tabMapsWithLevel.size).toPrecision(3))} / map`;

    //
    // Your best friend
    //
    //console.log(NPCsAndBossesChartInstance.data.datasets);
    const NPCInRange = new Map();
    NPCsAndBossesChartInstance.data.datasets.forEach(record => {
        record.data.forEach(item => {
            if (new Date(item.x) >= startDate && new Date(item.x) <= endDate) {
                NPCInRange.set(record.label, NPCInRange.get(record.label) ? NPCInRange.get(record.label) + item.y : item.y);
            }
        });
    });
    
    const NPCInRangeSorted = Array.from(NPCInRange).sort((a, b) => b[1] - a[1]); 

    const messagesFromNPCInRange = [];
    messagesFromMastersAndBosses.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            messagesFromNPCInRange.push(record);
        }
    });
    const bothTabs = [...generatingLevelsInRange, ...messagesFromNPCInRange].sort((a, b) => new Date(`${a.content.date} ${a.content.time}`) - new Date(`${b.content.date} ${b.content.time}`));
    
    const instanceWithNPCsInRange = new Map(); 
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
            instanceWithNPCsInRange.set(npcName, (instanceWithNPCsInRange.get(npcName) || 0) + 1);
        }
    });

    document.getElementById("id-your-best-friends-range").innerText = `${NPCInRangeSorted[0][0]}`;
    document.getElementById("id-your-best-friends-number-range").innerText = `${instanceWithNPCsInRange.get(NPCInRangeSorted[0][0])} maps together`;

    document.getElementById("id-your-best-friends-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<h4>Messages from NPCs:</h4>---<br />`;
        for (let i = 0; i < 10 && i < NPCInRangeSorted.length; i++) {
            html += `<b>${NPCInRangeSorted[i][0]}</b>: ${instanceWithNPCsInRange.get(NPCInRangeSorted[i][0])} maps, ${NPCInRangeSorted[i][1]} voice lines<br />`;
        }

        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });

    //
    // Deaths Level-ups
    //
    //console.log(playerEventChartInstance.data);
    const playerEventsInRange = new Map();
    playerEventChartInstance.data.datasets.forEach(record => {
        record.data.forEach(item => {
            if (new Date(item.x) >= startDate && new Date(item.x) <= endDate) {
                playerEventsInRange.set(record.label, playerEventsInRange.get(record.label) ? playerEventsInRange.get(record.label) + item.y : item.y);
            }
        });
    });
    
    const playerDeathsInRange = [];
    const playerLevelUpsInRange = [];
    let playerDeathsCounter = 0;
    let playerLevelUpsCounter = 0;
    playerEventsInRange.forEach((value, key) => {
        if (key.includes(' deaths')) {
            playerDeathsInRange.push({ name: key.replace(' deaths', ''), events: value });
            playerDeathsCounter += value;
        }
        else {
            playerLevelUpsInRange.push({ name: key.replace(' level up', ''), events: value });
            playerLevelUpsCounter += value;
        }
    });
    
    if (playerDeathsInRange.length > 0) {
        playerDeathsInRange.sort((a, b) => b.events - a.events);
        document.getElementById("id-deaths-range").innerText = `${playerDeathsCounter}`;
    } else {
        document.getElementById("id-deaths-range").innerText = `-`;
    }

    if (playerLevelUpsInRange.length > 0) {
        playerLevelUpsInRange.sort((a, b) => b.events - a.events);
        document.getElementById("id-level-up-range").innerText = `${playerLevelUpsCounter}`;
    } else {
        document.getElementById("id-level-up-range").innerText = `-`;
    }

    if (playerDeathsInRange.length > 0 || playerLevelUpsInRange.length > 0) {
        document.getElementById("id-deaths-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
            let html = `<h4>Deaths:</h4>---<br />`;
            for (let i = 0; i < 10 && i < playerDeathsInRange.length; i++) {
                html += `<b>${playerDeathsInRange[i].name}</b>: ${playerDeathsInRange[i].events} deaths<br />`;
            }
            html += `<br /><h4>Level-ups:</h4>---<br />`;
            for (let i = 0; i < 10 && i < playerLevelUpsInRange.length; i++) {
                html += `<b>${playerLevelUpsInRange[i].name}</b>: ${playerLevelUpsInRange[i].events} level-ups<br />`;
            }

            tooltipContainer.innerHTML = html;
            tooltipContainer.classList.add("show");

            const rect = event.target.getBoundingClientRect();
            tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
            tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
        });
    }

    //
    // Trades
    // Trades with players
    //
    let tradesWithNPCAndPlayersCounter = 0;
    tradeAcceptedCounter.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            tradesWithNPCAndPlayersCounter++;
        }
    });
    const tradesWithPlayers = [];
    playerTradeCompleted.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            tradesWithPlayers.push(record);
        }
    });

    document.getElementById("id-trades-range").innerText = tradesWithNPCAndPlayersCounter;
    document.getElementById("id-trades-range-completed").innerText = `${tradesWithPlayers.length}`;

    //
    // The best offer for you
    //
    SetTheBigestTradeInRangeFor(startDate, endDate);

    //
    // The best offer from you
    //
    SetTheBigestTradeInRangeTo(startDate, endDate);

    //
    // You are doing one trade per
    //
    const tabTradeInTime = decimalToTime(gameTimeAll / tradesWithNPCAndPlayersCounter).split(':');
    const h = tabTradeInTime[0];
    const min = RemoveZero(tabTradeInTime[1]);
    const sec = RemoveZero(tabTradeInTime[2]);
    if (h !== '0' && h !== '1' && h !== '2') {
        document.getElementById("id-average-time-per-trade-range").innerText = `${h} h ${min} min ${sec} sec`;
    }
    else {
        document.getElementById("id-average-time-per-trade-range").innerText = `${min} min ${sec} sec`;
    }

    //
    // Streak trades without accepted
    //
    const whisperToInRange = [];
    whisperTo.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            whisperToInRange.push(record);
        }
    });
    const onlyToBuyMessagesInRange = [];
    whisperToInRange.forEach(record => {
        if (record.content.message.includes(' to buy ')) {
            onlyToBuyMessagesInRange.push(record);
        }
    });

    const tradeAcceptedInRange = [];
    playerTradeCompleted.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            tradeAcceptedInRange.push(record);
        }
    });

    const tab = [...onlyToBuyMessagesInRange, ...tradeAcceptedInRange].sort((a, b) => {
            const dateA = new Date(`${a.content.date.replace(/\//g, "-")}T${a.content.time}`);
            const dateB = new Date(`${b.content.date.replace(/\//g, "-")}T${b.content.time}`);
            return dateA - dateB;
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

    document.getElementById("id-streak-trade-without-accepted-range").innerText = maxDist;

    //
    // whispers
    //
    const whisperFromInRange = [];
    whisperFrom.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            whisperFromInRange.push(record);
        }
    });

    document.getElementById("id-whispers-from-range").innerText = `${whisperFromInRange.length} received`;
    document.getElementById("id-whispers-to-range").innerText = `${whisperToInRange.length} sent`;

    //
    // you have met players
    //
    const playerJoinedTheAreaInRange = [];
    playerJoinedTheArea.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            playerJoinedTheAreaInRange.push(record);
        }
    });

    const tabJoinedPlayers = [...playerJoinedTheAreaInRange, ...tradeAcceptedInRange, ...generatingLevelsInRange].sort((a, b) => {
        const dateA = new Date(`${a.content.date.replace(/\//g, "-")}T${a.content.time}`);
        const dateB = new Date(`${b.content.date.replace(/\//g, "-")}T${b.content.time}`);
        return dateA - dateB;
    });

    const uniqueNames = new Map();
    const regexJoin = /\s:(.*?)\shas joined/;
    const regexLeft = /\s:(.*?)\shas left/;
    tabJoinedPlayers.forEach((record, index) => {
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
                const oneDown = tabJoinedPlayers[index - 1];
                if (oneDown && oneDown.content.seed !== -1) {
                    uniqueNames.set(`trade in other instance ${index - 1}`, false);
                }
            }
        }
    });
    //console.log(tab);
    //console.log(uniqueNames);
    document.getElementById("id-player-joined-range").innerText = `${uniqueNames.size}`;

    if (uniqueNames.size == 0) {
        return;
    }

    document.getElementById("id-player-joined-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<h4>Players:</h4>`;
        let counter = 1;
        for (const [key, value] of uniqueNames) {
            if (value == true) {
                html += `<b>${counter++}. ${key}, </b>`;
            } else {
                html += `${counter++}. No name (PlayerToPlayerTrade), `;
            }
            if (counter > 100) {
                break;
            }
        }
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}


function SetTheBigestTradeInRangeFor(startDate, endDate) {
    const tabMirr = [];
    const tabDiv = [];
    const tabEx = [];
    const tabC = [];

    const whisperFromInRange = [];
    whisperFrom.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            whisperFromInRange.push(record);
        }
    });

    whisperFromInRange.forEach((record) => {
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

    let biggestMirrIndex = ReturnBiggestIndexValueMessage(tabMirr);
    let biggestDivIndex = ReturnBiggestIndexValueMessage(tabDiv);
    let biggestExIndex = ReturnBiggestIndexValueMessage(tabEx);
    let biggestCIndex = ReturnBiggestIndexValueMessage(tabC);

    if (biggestMirrIndex < 0 & biggestDivIndex < 0 & biggestExIndex < 0 & biggestCIndex < 0) {
        document.getElementById("id-biggest-from-range").innerText = "-";
        document.getElementById("id-biggest-from-range").parentElement.parentElement.querySelector(".icon").innerText = "💎";
        return;
    }

    const theBiggestTab = [
        { name: 'mirror', value: biggestMirrIndex > -1 && tabMirr[biggestMirrIndex].value > -1 ? tabMirr[biggestMirrIndex].value * 120000 : 0, record: tabMirr[biggestMirrIndex], playerName: biggestMirrIndex > -1 ? tabMirr[biggestMirrIndex].playerName : "" },
        { name: 'divine', value: biggestDivIndex > -1 && tabDiv[biggestDivIndex].value > -1 ? tabDiv[biggestDivIndex].value * 150 : 0, record: tabDiv[biggestDivIndex], playerName: biggestDivIndex > -1 ? tabDiv[biggestDivIndex].playerName : "" },
        { name: 'exalted', value: biggestExIndex > -1 && tabEx[biggestExIndex].value > -1 ? tabEx[biggestExIndex].value * 15 : 0, record: tabEx[biggestExIndex], playerName: biggestExIndex > -1 ? tabEx[biggestExIndex].playerName : "" },
        { name: 'chaos', value: biggestCIndex > -1 && tabC[biggestCIndex].value > -1 ? tabC[biggestCIndex].value : 0, record: tabC[biggestCIndex], playerName: biggestCIndex > -1 ? tabC[biggestCIndex].playerName : "" },
    ];

    let oneBigest = ReturnBiggestIndexValueMessage(theBiggestTab);
    document.getElementById("id-biggest-from-range").innerHTML = `${theBiggestTab[oneBigest].record.value} ${theBiggestTab[oneBigest].name}`;
    document.getElementById("id-biggest-from-range").parentElement.parentElement.querySelector(".icon").innerHTML = currencies.get(theBiggestTab[oneBigest].name) || "💎";

    document.getElementById("id-biggest-from-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<b>${theBiggestTab[oneBigest].record.playerName}:</b> ${theBiggestTab[oneBigest].record.message}`;
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}

function SetTheBigestTradeInRangeTo(startDate, endDate) {
    const tabMirr = [];
    const tabDiv = [];
    const tabEx = [];
    const tabC = [];

    const whisperToInRange = [];
    whisperTo.forEach(record => {
        if (new Date(record.content.date) >= startDate && new Date(record.content.date) <= endDate) {
            whisperToInRange.push(record);
        }
    });

    whisperToInRange.forEach((record) => {
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

    let biggestMirrIndex = ReturnBiggestIndexValueMessage(tabMirr);
    let biggestDivIndex = ReturnBiggestIndexValueMessage(tabDiv);
    let biggestExIndex = ReturnBiggestIndexValueMessage(tabEx);
    let biggestCIndex = ReturnBiggestIndexValueMessage(tabC);

    if (biggestMirrIndex < 0 & biggestDivIndex < 0 & biggestExIndex < 0 & biggestCIndex < 0) {
        document.getElementById("id-biggest-to-range").innerText = "-";
        document.getElementById("id-biggest-to-range").parentElement.parentElement.querySelector(".icon").innerText = "💎";
        return;
    }

    const theBiggestTab = [
        { name: 'mirror', value: biggestMirrIndex > -1 && tabMirr[biggestMirrIndex].value > -1 ? tabMirr[biggestMirrIndex].value * 120000 : 0, record: tabMirr[biggestMirrIndex], playerName: biggestMirrIndex > -1 ? tabMirr[biggestMirrIndex].playerName : "" },
        { name: 'divine', value: biggestDivIndex > -1 && tabDiv[biggestDivIndex].value > -1 ? tabDiv[biggestDivIndex].value * 150 : 0, record: tabDiv[biggestDivIndex], playerName: biggestDivIndex > -1 ? tabDiv[biggestDivIndex].playerName : "" },
        { name: 'exalted', value: biggestExIndex > -1 && tabEx[biggestExIndex].value > -1 ? tabEx[biggestExIndex].value * 15 : 0, record: tabEx[biggestExIndex], playerName: biggestExIndex > -1 ? tabEx[biggestExIndex].playerName : "" },
        { name: 'chaos', value: biggestCIndex > -1 && tabC[biggestCIndex].value > -1 ? tabC[biggestCIndex].value : 0, record: tabC[biggestCIndex], playerName: biggestCIndex > -1 ? tabC[biggestCIndex].playerName : "" },
    ];

    let oneBigest = ReturnBiggestIndexValueMessage(theBiggestTab);
    document.getElementById("id-biggest-to-range").innerHTML = `${theBiggestTab[oneBigest].record.value} ${theBiggestTab[oneBigest].name}`;
    document.getElementById("id-biggest-to-range").parentElement.parentElement.querySelector(".icon").innerHTML = currencies.get(theBiggestTab[oneBigest].name) || "💎";

    document.getElementById("id-biggest-to-range").parentElement.parentElement.addEventListener("mouseenter", (event) => {
        let html = `<b>${theBiggestTab[oneBigest].record.playerName}:</b> ${theBiggestTab[oneBigest].record.message}`;
        tooltipContainer.innerHTML = html;
        tooltipContainer.classList.add("show");

        const rect = event.target.getBoundingClientRect();
        tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
        tooltipContainer.style.left = `${rect.left + 175 + window.scrollX}px`;
    });
}




