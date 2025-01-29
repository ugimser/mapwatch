let maxLinesToRead = 1000000; 

document.getElementById("ClientFileInput").addEventListener("change", function () {
    let fileLabel = document.querySelector("label[for='ClientFileInput']");
    if (this.files.length > 0 && this.files[0].name === 'Client.txt') {
        fileLabel.innerHTML = "You can start calculation &#8594;";        
    } else {
        fileLabel.textContent = "Select Client.txt file"; 
    }
});

document.getElementById("ClientFileInputMaxLines").addEventListener("change", function () {
    let value = this.value.replace(/\D/g, "");
    let numericValue = parseInt(value, 10);
    
    if (isNaN(numericValue)) {
        this.value = "";
        return;
    }
    maxLinesToRead = numericValue;
    this.value = numericValue.toLocaleString();
});

document.getElementById("processFile").addEventListener("click", () => {
    document.getElementById("ClientFileProgress").innerText = `Thinking, give me at least ${maxLinesToRead / 500000 + 2}s`;

    const input = document.getElementById("ClientFileInput");
    if (input.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function () {
            // clear variables
            tradeAcceptedCounter = 0;
            tradeCancelledCounter = 0;
            generatingLevels = [];
            whisperFrom = [];
            whisperTo = [];
            gamingSessions = [];
            playerHasBeenSlain = [];
            playerLevel = [];

            let newMaxLimitString = document.getElementById("ClientFileInputMaxLines").value;
            let newMaxLimitNumber = parseInt(newMaxLimitString, 10);
            if (isNaN(newMaxLimitNumber)) {
                maxLinesToRead = newMaxLimitNumber;
            } else {
                document.getElementById("ClientFileInputMaxLines").value = maxLinesToRead.toLocaleString();
            }

            const content = reader.result;
            const lines = content.split('\n');
            const lastLines = lines.slice(-maxLinesToRead);
            parseLogEvents(lastLines);

            
            //console.log("Generating Levels:", generatingLevels);
            //console.log("Whispers From:", whisperFrom);
            //console.log("Whispers To:", whisperTo);
            //console.log("gamingSessions: ", gamingSessions);

            const todayReverse = GetReverseTodayDate();
            const generatingLevelsToday = [];
            for (let i = generatingLevels.length-1; i > 0; i--) {
                if (new Date(generatingLevels[i].content.date.replace(/\//g, "-")) >= todayReverse) {
                    generatingLevelsToday.push(generatingLevels[i]);
                }
                else {
                    break;
                }
            }
            generatingLevelsToday.reverse();

            const whisperFromToday = [];
            for (let i = whisperFrom.length - 1; i > 0; i--) {
                if (new Date(whisperFrom[i].content.date.replace(/\//g, "-")) >= todayReverse) {
                    whisperFromToday.push(whisperFrom[i]);
                }
                else {
                    break;
                }
            }
            whisperFromToday.reverse();

            const whisperToToday = [];
            for (let i = whisperTo.length - 1; i > 0; i--) {
                if (new Date(whisperTo[i].content.date.replace(/\//g, "-")) >= todayReverse) {
                    whisperToToday.push(whisperTo[i]);
                }
                else {
                    break;
                }
            }
            whisperToToday.reverse();

            const gamingSessionsToday = [];
            for (let i = gamingSessions.length - 1; i > 0; i--) {
                if (new Date(gamingSessions[i].content.date.replace(/\//g, "-")) >= todayReverse) {
                    gamingSessionsToday.push(gamingSessions[i]);
                }
                else {
                    break;
                }
            }
            gamingSessionsToday.reverse();

            const playerHasBeenSlainToday = [];
            for (let i = playerHasBeenSlain.length - 1; i > 0; i--) {
                if (new Date(playerHasBeenSlain[i].content.date.replace(/\//g, "-")) >= todayReverse) {
                    playerHasBeenSlainToday.push(playerHasBeenSlain[i]);
                }
                else {
                    break;
                }
            }
            playerHasBeenSlainToday.reverse();

            const playerLevelToday = [];
            for (let i = playerLevel.length - 1; i > 0; i--) {
                if (new Date(playerLevel[i].content.date.replace(/\//g, "-")) >= todayReverse) {
                    playerLevelToday.push(playerLevel[i]);
                }
                else {
                    break;
                }
            }
            playerLevelToday.reverse();
            


            const todayData = [
                ...TodayChartGeneratingLevelsData(generatingLevelsToday, gamingSessionsToday),
                ...TodayChartWhispersFromData(whisperFromToday),
                ...TodayChartWhispersFromData(whisperToToday),
                ...TodayChartGamingSessionsData(gamingSessionsToday),
                ...TodayChartPlayerHasBeenSlainData(playerHasBeenSlainToday),
                ...TodayChartPlayerLevelTodayData(playerLevelToday),
            ];
            const todayData2 = todayData.sort((a, b) => {
                // Pobierz godziny dla obu obiektów
                const timeA = a.timeStart; // Zak³adam, ¿e format to "hh:mm:ss"
                const timeB = b.timeStart;

                // Zamiana czasu na liczby w sekundach dla ³atwego porównania
                const secondsA = timeToSeconds(timeA);
                const secondsB = timeToSeconds(timeB);

                // Porównanie godzin
                return secondsA - secondsB;
            });
            TodayChartRender(todayData2);

            //
            // ScheduleChart
            //
            const today = new Date();
            const rangeBackDays = new Date();
            rangeBackDays.setDate(today.getDate() - 31);
            const filteredSessions = [];
            for (let i = gamingSessions.length - 1; i >= 0; i--) {
                const session = gamingSessions[i];
                const sessionDate = new Date(session.content.date.replace(/\//g, "-")); 

                if (sessionDate >= rangeBackDays) {
                    filteredSessions.unshift(session);
                } else {
                    break; 
                }
            }

            //console.log("filteredSessions: ", filteredSessions);
            ScheduleChartRender(filteredSessions);
           
            //
            // dailyInGameTimeChart
            //
            DailyInGameTimeChartRender();

            //
            // SumDailyInGameTimeChartRender 
            //
            SumDailyInGameTimeChartRender();

            //
            // GeneratedInstancesAllTimeChartRender
            //
            GeneratedInstancesAllTimeChartRender();

            //
            // WhispersChartRender
            //
            WhispersChartRender();

            //
            // CurrencyInWhispersFromChartRender
            //
            CurrencyInWhispersFromChartRender();
            CurrencyInWhispersToChartRender();

            TradeStatusChartRender();

            //
            // PlayerEventChartRender
            //
            PlayerEventChartRender();


            const debugTab = [...generatingLevelsToday, ...whisperFromToday, ...whisperToToday, ...gamingSessionsToday];
            const debugTab2 = debugTab.sort((a, b) => {
                // Pobierz godziny dla obu obiektów
                const timeA = a.content.time; // Zak³adam, ¿e format to "hh:mm:ss"
                const timeB = b.content.time;

                // Zamiana czasu na liczby w sekundach dla ³atwego porównania
                const secondsA = timeToSeconds(timeA);
                const secondsB = timeToSeconds(timeB);

                // Porównanie godzin
                return secondsA - secondsB;
            });
            debugTab2.reverse();
            renderTable(debugTab2);

        };
        reader.readAsText(input.files[0]);
    } else {
        alert("Please select the Client.txt file. Probably: C:\\Program Files (x86)\\Grinding Gear Games\\Path of Exile\\logs");
    }
});

document.getElementById("toggleRawData").addEventListener("click", () => {
    const table = document.getElementById("outputForTodayData");
    const state = table.style.display;
    //console.log(state);
    if (state === 'none') {
        table.style.display = 'block';
    } else {
        table.style.display = 'none';
    }
});






function parseLogEvents(lines) {
    const progressText = document.getElementById("ClientFileProgress");

    //const lines = content.split("\n");
    const indexMax = lines.length;

    lines.forEach((line, index) => {
        if (/Generating level/.test(line)) {
            generatingLevels.push({
                lineNumber: index + 1,
                content: parserGeneratingLevel(line.trim()),
            });
        }

        else if (/ @From /.test(line)) {
            whisperFrom.push({
                lineNumber: index + 1,
                content: parserWhipserFrom(line.trim()),
            });
        }

        else if (/ @To /.test(line)) {
            whisperTo.push({
                lineNumber: index + 1,
                content: parserWhipserTo(line.trim()),
            });
        }

        else if (/\*\*\*\*\* LOG FILE OPENING \*\*\*\*\*/.test(line)) {
            if (index > 1) { // last record before close?
                gamingSessions.push({
                    lineNumber: index,
                    content: parserGamingSessions(lines[index - 1].trim(), false),
                });
            }
            gamingSessions.push({
                lineNumber: index + 1,
                content: parserGamingSessions(line.trim(), true),
            });
        }

        else if (/ : Trade accepted/.test(line)) {
            tradeAcceptedCounter++;
        }

        else if (/ : Trade cancelled/.test(line)) {
            tradeCancelledCounter++;
        }

        else if (/ has been slain./.test(line)) {
            playerHasBeenSlain.push({
                lineNumber: index + 1,
                content: parserPlayerHasBeenSlain(line.trim()),
            });
        }

        else if (/ is now level/.test(line)) {
            playerLevel.push({
                lineNumber: index + 1,
                content: parserPlayerLevel(line.trim()),
            });
        }

    });

    progressText.innerText = `Done. Data from ${indexMax.toLocaleString()} lines`;
    // add last activity for today's sessions
    //let lastTime;
    //let line = lines[indexMax - 2].trim();
    //console.log(lines[indexMax - 2]);
    const line = parserDateTimeOnly(lines[indexMax - 2].trim(), false);
    gamingSessions[gamingSessions.length - 1].content.timeEnd = line.time;
}






















function renderTable(tab) {
    const outputDiv = document.getElementById("outputForTodayData");
    outputDiv.innerHTML = ""; 

    if (tab.length < 1) {
        console.warn("No data from today");
        return;
    }

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["Line", "Description"];
    //console.log(Object.keys(tab[0].content));

    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    tab.forEach((event) => {
        const row = document.createElement("tr");

        const countCell = document.createElement("td");
        countCell.textContent = event.lineNumber;
        row.appendChild(countCell);

        let description = "";
        Object.keys(event.content).forEach((key) => {
            description += `${event.content[key]} `;
        });

        const cell = document.createElement("td");
        cell.textContent = description;
        if (description.includes('@')) {
            cell.style = 'background-color: #ced4ff80;';
        }
        row.appendChild(cell);

        table.appendChild(row);
    });

    outputDiv.appendChild(table);
}



