/**
 * https://www.chartjs.org/docs/latest/samples/scales/linear-min-max.html
 * 
 */
let maxLinesToRead = 1000000;
let contentLastDate = new Date();
let workingGood = 0;

const fileLabelID = document.querySelector("label[for='ClientFileInput']");
const processFileID = document.getElementById("processFile");
const progressText = document.getElementById("ClientFileProgress");

document.getElementById("ClientFileInput").addEventListener("change", function () {
    if (this.files.length > 0 && this.files[0].name.includes('.txt')) {
        //fileLabelID.innerHTML = "You can start calculation &#8594;";
        fileLabelID.classList.remove('element-look-at-me');
        progressText.classList.remove('element-look-at-me');
        processFileID.classList.add('element-look-at-me');
    } else {
        fileLabelID.innerText = 'Select Client.txt\nC:\\Program Files (x86)\\Grinding Gear Games\\Path of Exile\\logs\\Client.txt'; 
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
    const input = document.getElementById("ClientFileInput");
    if (input.files.length > 0) {
        workingGood = 0;
        setTimeout(() => {
            if (workingGood === 0) {
                console.log("Browser requests user activity");
                alert("Please select file again :/ or check console F12");
                input.value = "";
                fileLabelID.classList.add('element-look-at-me');
                progressText.classList.remove('element-look-at-me');
                processFileID.classList.remove('element-look-at-me');
            }
        }, 200);
        //console.log("File name: ", input.files[0].name);

        const fileName = input.files[0].name.split('.');
        if (fileName[fileName.length - 1] !== 'txt') {
            WrongFileAlert();
            return;
        }
        processFileID.classList.remove('element-look-at-me');
        fileLabelID.classList.remove('element-look-at-me');

        progressText.innerText = `Thinking, give me at least ${Math.round(maxLinesToRead / 200000, 1) + 2}s`;
        progressText.classList.add('element-look-at-me');

        fileLabelID.innerText = 'Select Client.txt\nC:\\Program Files(x86)\\Grinding Gear Games\\Path of Exile\\logs\\Client.txt';       

        const reader = new FileReader();
        reader.onload = function () {
            workingGood = 1;
            //console.log("reader.onload: ", input.files[0].name);
            // clear variables
            tradeAcceptedCounter = [];
            tradeCancelledCounter = [];
            playerTradeCompleted = [];
            generatingLevels = [];
            whisperFrom = [];
            whisperTo = [];
            whisperWithoutDirection = [];
            gamingSessions = [];
            playerHasBeenSlain = [];
            playerLevel = [];
            playerJoinedTheArea = [];
            messagesFromMastersAndBosses = [];

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

            const readLineCounter = lastLines.length;
            const contentLineCounter = lines.length;
            const contentFileSize = input.files[0].size;
            let contenFirstDate;// = parserDateTimeOnly(lastLines[0]);
            for (let i = 0; i < 10 && lastLines.length > i; i++) {
                contenFirstDate = parserDateTimeOnly(lastLines[i]);
                if (contenFirstDate) {
                    break;
                }
            }
            contentLastDate;// = parserDateTimeOnly(lastLines[readLineCounter - 2]);
            for (let i = 0; i < 10 && lastLines.length > 3 + i; i++) {
                contentLastDate = parserDateTimeOnly(lastLines[readLineCounter - 2 - i]);
                if (contentLastDate) {
                    break;
                }
            }
            progressText.innerText =
                `Data from ${readLineCounter.toLocaleString()} lines. ` +
            `Your file has ${contentLineCounter.toLocaleString()} lines (${(contentFileSize / (1024 * 1024)).toFixed(2).toLocaleString()} MB), ` +
            `so this data comes from ${(readLineCounter / contentLineCounter * 100).toFixed(0)}% of your logs.\n` +
                `${contenFirstDate.date} - ${contentLastDate.date}`;
            progressText.classList.remove('element-look-at-me');
            
            //console.log("Generating Levels:", generatingLevels);
            //console.log("Whispers From:", whisperFrom);
            //console.log("Whispers To:", whisperTo);
            //console.log("gamingSessions: ", gamingSessions);
            //console.log("whisperWithoutDirection", whisperWithoutDirection);
            //console.log("messagesFromMastersAndBosses", messagesFromMastersAndBosses);
            //console.log("messagesFromMastersAndBossesT", messagesFromMastersAndBossesTemp);


            //
            // Before any of charts
            //
            if (generatingLevels.length < 2 || gamingSessions.length < 2) {
                alert("Not enought data or wrong Client.txt file\nThis file is in your game instalation folder: logs\\Client.txt");
                console.log("Not enought data or wrong Client.txt file");
                return;
            }

            let todayReverse = GetReverseTodayDate();
            if (contentLastDate) {
                //console.log(new Date(contentLastDate.date).getTime());
                //console.log(todayReverse.getTime());
                //console.log(todayReverse.getTime() + 86400000);
                if (new Date(contentLastDate.date).getTime() < (todayReverse.getTime() - 86400000)) {
                    todayReverse = new Date(contentLastDate.date);
                    document.getElementById("todayChartTitle").innerText = `Last day of activity: ${contentLastDate.date}`;
                    document.getElementById("id-last-day-summary-today").innerText = `Summary of ${contentLastDate.date}`;
                } else {
                    document.getElementById("todayChartTitle").innerText = `Today`;
                    document.getElementById("id-last-day-summary-today").innerText = `Summary of Today - ${contentLastDate.date}`;
                }
            } 

            //
            // TodayChartRender
            //
            const generatingLevelsToday = CutTableByDate(generatingLevels, todayReverse);
            const whisperFromToday = CutTableByDate(whisperFrom, todayReverse);
            const whisperToToday = CutTableByDate(whisperTo, todayReverse);
            const gamingSessionsToday = CutTableByDate(gamingSessions, todayReverse);
            const playerHasBeenSlainToday = CutTableByDate(playerHasBeenSlain, todayReverse);
            const playerLevelToday = CutTableByDate(playerLevel, todayReverse);
            const whisperWithoutDirectionToday = CutTableByDate(whisperWithoutDirection, todayReverse);
            
            const todayData = [
                ...TodayChartGeneratingLevelsData(generatingLevelsToday, gamingSessionsToday),
                ...TodayChartWhispersFromData(whisperFromToday),
                ...TodayChartWhispersFromData(whisperToToday),
                ...TodayChartGamingSessionsData(gamingSessionsToday),
                ...TodayChartPlayerHasBeenSlainData(playerHasBeenSlainToday),
                ...TodayChartPlayerLevelTodayData(playerLevelToday),
                ...TodayChartWhisperWithoutDirectionTodayData(whisperWithoutDirectionToday),
            ];
            const todayData2 = todayData.sort((a, b) => {
                const timeA = a.timeStart; // hh:mm:ss
                const timeB = b.timeStart;

                const secondsA = timeToSeconds(timeA);
                const secondsB = timeToSeconds(timeB);

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
            for (let i = gamingSessions.length; i >= 0; i--) {
                if (!gamingSessions[i] || !gamingSessions[i].content) {
                   continue;
                }
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
            // Other charts
            //
            DailyInGameTimeChartRender();
            //SumDailyInGameTimeChartRender(); // evoke in DailyInGameTimeChartRender()
            GeneratedInstancesAllTimeChartRender();
            WhispersChartRender();
            CurrencyInWhispersFromChartRender();
            CurrencyInWhispersToChartRender();
            TradeStatusChartRender();
            PlayerEventChartRender();
            NPCsAndBossesChartRender();


            // Today panel summary
            SetSumTimeToday();
            SetMostVisitedAreaToday(generatingLevelsToday);
            SetDeathsLevelTodayStats(playerHasBeenSlainToday, playerLevelToday);
            SetTradesTodayStats(todayReverse);
            SetAverageTimeForTradeTodayStats();
            SetWhispersTodayStats(whisperFromToday, whisperToToday);
            SetBigestTradeTodayStats(whisperFromToday);
            SetBigestTradeToTodayStats(whisperToToday);
            const tradeCompletedToday = CutTableByDate(playerTradeCompleted, todayReverse);
            SetStrikeTradeWhispersWithoutTradeAccepted(whisperToToday, tradeCompletedToday);
            SetPlayerJoinedTheAreaTodayStat(todayReverse, tradeCompletedToday, generatingLevelsToday);

            // Today chart table
            const debugTab = [...generatingLevelsToday, ...whisperFromToday, ...whisperToToday, ...tradeCompletedToday, ...gamingSessionsToday, ...whisperWithoutDirectionToday];
            const debugTab2 = debugTab.sort((a, b) => {
                const timeA = a.content.time; 
                const timeB = b.content.time;

                const secondsA = timeToSeconds(timeA);
                const secondsB = timeToSeconds(timeB);

                return secondsA - secondsB;
            });
            debugTab2.reverse();
            renderTable(debugTab2);

        };
        reader.readAsText(input.files[0]);
    } else {
        WrongFileAlert();
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

function WrongFileAlert() {
    alert("Please select the Client.txt file. Probably: C:\\Program Files (x86)\\Grinding Gear Games\\Path of Exile\\logs");
}




function parseLogEvents(lines) {
    lines.forEach((line, index) => {
        if (/Generating level/.test(line)) {
            const content = parserGeneratingLevel(line.trim());
            if (content)
            generatingLevels.push({
                lineNumber: index + 1,
                content: content,
            });
        }

        else if (/ @From /.test(line)) {
            const content = parserWhipserFrom(line.trim());
            if (content)
            whisperFrom.push({
                lineNumber: index + 1,
                content: content,
            });
        }

        else if (/ @To /.test(line)) {
            const content = parserWhipserTo(line.trim());
            if (content)
            whisperTo.push({
                lineNumber: index + 1,
                content: content,
            });
        }

        else if (/\*\*\*\*\* LOG FILE OPENING \*\*\*\*\*/.test(line)) {
            if (index > 1) { // last record before close?
                const content = parserGamingSessions(line.trim());
                if (content) {
                    let contentPrevious = parserGamingSessions(lines[index - 1].trim(), false);
                    let i = 2;
                    while (i < 10 && !contentPrevious) {
                        contentPrevious = parserGamingSessions(lines[index - i++].trim(), false);
                    }
                    if (contentPrevious) {
                        gamingSessions.push({
                            lineNumber: index,
                            content: contentPrevious,
                        });
                    }
                }
            } 
            const content = parserGamingSessions(line.trim(), true);
            if (content)
                gamingSessions.push({
                    lineNumber: index + 1,
                    content: content,
                });
        }

        else if (/ : Trade accepted/.test(line)) {
            const content = parserDateTimeOnly(line.trim());;
            if (content)
                tradeAcceptedCounter.push({
                    lineNumber: index + 1,
                    content: content,
                });
        }

        else if (/ : Trade cancelled/.test(line)) {
            const content = parserDateTimeOnly(line.trim());;
            if (content)
                tradeCancelledCounter.push({
                    lineNumber: index + 1,
                    content: content,
                });
        }

        else if (/'PlayerToPlayerTradeCompleted'/.test(line)) {
            const content = parserDateTimeOnly(line.trim());;
            if (content)
                content.message = "PlayerToPlayerTradeCompleted";
                playerTradeCompleted.push({
                    lineNumber: index + 1,
                    content: content,
                });
        }

        else if (/has joined the area./.test(line)) {
            const content = parserDateTimeOnly(line.trim());;
            if (content)
                playerJoinedTheArea.push({
                    lineNumber: index + 1,
                    content: content,
                });
        }

        else if (/has left the area./.test(line)) {
            const content = parserDateTimeOnly(line.trim());;
            if (content)
                playerJoinedTheArea.push({
                    lineNumber: index + 1,
                    content: content,
                });
        }

        else if (/ has been slain./.test(line)) {
            const content = parserPlayerHasBeenSlain(line.trim());;
            if (content)
            playerHasBeenSlain.push({
                lineNumber: index + 1,
                content: content,
            });
        }

        else if (/ is now level/.test(line)) {
            const content = parserPlayerLevel(line.trim());
            if (content)
            playerLevel.push({
                lineNumber: index + 1,
                content: content,
            });
        }
        
        else if (/\[INFO Client/.test(line)) {
            const content = parserMessagesWithoutDirection(line.trim());
            if (content) {
                whisperWithoutDirection.push({
                    lineNumber: index + 1,
                    content: content,
                });
            } else {
                const content = parserMessagesFromMastersAndBosses(line.trim());
                if (content) {
                    messagesFromMastersAndBosses.push({
                        lineNumber: index + 1,
                        content: content,
                    });
                }
            }
        }
        
    });

    if (gamingSessions.length > 2 && lines.length >= 2) {
        let line = parserDateTimeOnly(lines[lines.length - 2]?.trim(), false);
        let i = 2;
        while (i < 10 && (!line || line === undefined)) {
            let index = lines.length - i;

            if (index > 0 && index < lines.length) {
                line = parserDateTimeOnly(lines[index]?.trim(), false);
            }

            i++;
        }
        if (line) {
            const lastSessionStart = gamingSessions[gamingSessions.length - 1];
            const start = timeToDecimal(lastSessionStart.content.time);
            const end = timeToDecimal(line.time);
            
            if (start > end) { // after midnight
                lastSessionStart.content.timeEnd = '24:00:00';

                const nextDayContent = {
                    date: line.date,
                    time: '00:00:00',
                    pattern: "Game closed",
                    dateEnd: "",
                    timeEnd: line.time,
                    seed: -1,
                };

                gamingSessions.push({
                    lineNumber: lines.length - i,
                    content: nextDayContent,
                });
            }
            else {
                gamingSessions[gamingSessions.length - 1].content.timeEnd = line.time;
            }
        }
    }
}






















function renderTable(tab) {
    const outputDiv = document.getElementById("outputForTodayData");
    outputDiv.innerHTML = ""; 

    if (tab.length < 1) {
        outputDiv.innerHTML = "No data from today"; 
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
        if (description.includes('@F')) {
            cell.style.border = "1px solid rgba(255, 255, 255, 0.3)";
            cell.style.paddingLeft = "50px";
        } else if (description.includes('@T')) {
            cell.style.border = "1px solid rgba(128, 128, 255, 0.3)";
            cell.style.textAlign = "right";
        }
        row.appendChild(cell);

        table.appendChild(row);
    });

    outputDiv.appendChild(table);
}




/**
 * 
 * Only for me, should be always comented
 *
 */
//makeWorldAreasUsable();
