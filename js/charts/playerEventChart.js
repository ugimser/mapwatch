let playerEventChartInstance = null;




function PlayerEventChartRender() {
    const ctx = document.getElementById('playerEventChart').getContext('2d');

    if (playerEventChartInstance) {
        playerEventChartInstance.destroy();
    }

    // deaths
    let lastDay = "";
    let yCounter = 0; 

    const deathsData = [];
    let playerDeaths = {}; // Obiekt przechowuj¹cy licznik zgonów dla graczy
    playerHasBeenSlain.forEach((record) => {
        if (!record.content) {
            return;
        }

        const currentDay = record.content.date;
        const playerName = record.content.playerName;

        if (lastDay === currentDay) {
            yCounter++;

            // Zwiêksz licznik zgonów dla danego gracza
            if (playerDeaths[playerName]) {
                playerDeaths[playerName]++;
            } else {
                playerDeaths[playerName] = 1;
            }
        } else {
            if (lastDay) {
                // Dodaj dane dla poprzedniego dnia
                deathsData.push({
                    x: lastDay,
                    y: yCounter,
                    players: { ...playerDeaths } // Kopia licznika zgonów dla graczy
                });
            }

            // Zresetuj liczniki dla nowego dnia
            lastDay = currentDay;
            yCounter = 1;
            playerDeaths = { [playerName]: 1 }; // Inicjalizuj licznik dla pierwszego gracza
        }
    });
    if (lastDay) {
        deathsData.push({
            x: lastDay,
            y: yCounter,
            players: { ...playerDeaths }
        });
    }
    //console.log(deathsData);
    const playerEventChartData = {
        datasets: [],
    };
    deathsData.forEach((day, index) => {
        // Iteruj przez graczy w danym dniu
        Object.entries(day.players).forEach(([playerName, count]) => {
            // ZnajdŸ istniej¹cy dataset dla gracza
            let playerDataset = playerEventChartData.datasets.find((dataset) => dataset.label === `${playerName} deaths`);

            if (!playerDataset) {
                const c = colors[index % (colors.length / 2)];
                playerDataset = {
                    label: `${playerName} deaths`,
                    data: [], 
                   // showLine: false,
                    pointStyle: "triangle",
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    borderColor: c,
                    backgroundColor: c,
                };
                playerEventChartData.datasets.push(playerDataset);
            }

            // Dodaj dane dla gracza w danym dniu
            playerDataset.data.push({ x: day.x, y: count });
        });
    });

    // level
    lastDay = "";
    yCounter = 0; 
    const levelData = [];
    let levelPlayers = {};
    playerLevel.forEach((record) => {
        if (!record.content) {
            return;
        }

        const currentDay = record.content.date;
        const playerName = record.content.playerName;

        if (lastDay === currentDay) {
            yCounter++;

            if (levelPlayers[playerName]) {
                levelPlayers[playerName]++;
            } else {
                levelPlayers[playerName] = 1;
            }
        } else {
            if (lastDay) {
                levelData.push({
                    x: lastDay,
                    y: yCounter,
                    players: { ...levelPlayers }
                });
            }

            lastDay = currentDay;
            yCounter = 1;
            levelPlayers = { [playerName]: 1 }; 
        }
    });
    if (lastDay) {
        levelData.push({
            x: lastDay,
            y: yCounter,
            players: { ...levelPlayers }
        });
    }

    levelData.forEach((day, index) => {
        // Iteruj przez graczy w danym dniu
        Object.entries(day.players).forEach(([playerName, count]) => {
            // ZnajdŸ istniej¹cy dataset dla gracza
            let playerDataset = playerEventChartData.datasets.find((dataset) => dataset.label === `${playerName} level up`);

            if (!playerDataset) {
                const c = colors[index % colors.length];
                playerDataset = {
                    label: `${playerName} level up`,
                    data: [],
                    //showLine: false,
                    pointStyle: "circle",
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    borderColor: c,
                    backgroundColor: c,
                };
                playerEventChartData.datasets.push(playerDataset);
            }

            // Dodaj dane dla gracza w danym dniu
            playerDataset.data.push({ x: day.x, y: count });
        });
    });

    playerEventChartData.datasets.sort((a, b) => {
        const sumA = a.data.reduce((sum, entry) => sum + entry.y, 0);
        const sumB = b.data.reduce((sum, entry) => sum + entry.y, 0);
        return sumB - sumA; // Sortuj malej¹co wed³ug sumy `y`
    });

    //console.log(levelData);
    //playerEventChartData.datasets[0].data = deathsData;
    //playerEventChartData.datasets[1].data = levelData;
    playerEventChartConfig.data = playerEventChartData;// playerEventChartData;

    playerEventChartInstance = new Chart(ctx, playerEventChartConfig);
}


const playerEventChartData = {
    datasets: [
        {
            label: 'Deaths',
            data: [
                { x: '2025/01/20', y: 2 },
                { x: '2025/01/21', y: 3 },
            ],
            showLine: false,
            pointStyle: "rect",
            pointRadius: 15,
            pointHoverRadius: 20,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
        },
        {
            label: 'Level Up',
            data: [
                { x: '2025/01/20', y: 1 },
                { x: '2025/01/21', y: 4 },
            ],
            showLine: false,
            pointStyle: "triangle",
            pointRadius: 15,
            pointHoverRadius: 20,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
        }
    ]
};

const playerEventChartConfig = {
    type: 'line',
    data: playerEventChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    parser: 'yyyy/MM/dd', // Format daty
                    tooltipFormat: 'PP', // Format daty w tooltipie
                    unit: 'day' // Jednostka na osi (np. dzieñ, miesi¹c)
                },
                title: {
                    display: true,
                    text: 'Date',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Events',
                },
                ticks: {
                    stepSize: 1, // Skok co 1
                    precision: 0, // Brak u³amków
                },
            }
        }
    },
};




