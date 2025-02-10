let NPCsAndBossesChartInstance = null;
const instanceWithNPCs = new Map();

const tooltipContainer = document.getElementById("npcAndBossesVoiceTooltip");
tooltipContainer.addEventListener("mouseleave", () => {
    tooltipContainer.classList.remove("show");
});

function NPCsAndBossesChartRender() {
    const ctx = document.getElementById('npcAndBossesVoice').getContext('2d');

    if (NPCsAndBossesChartInstance) {
        NPCsAndBossesChartInstance.destroy();
    }

    const dataNPC = {};

    messagesFromMastersAndBosses.forEach((content) => {
        const date = content.content.date;
        const label = content.content.name;

        if (dataNPC[label]) {
            const dateEntry = dataNPC[label].data.find((entry) => entry.x === date);

            if (dateEntry) {
                dateEntry.y += 1;
            } else {
                dataNPC[label].data.push({ x: date, y: 1});
            }

        } else {
            dataNPC[label] = {
                label,
                data: [{ x: date, y: 1 }],
                backgroundColor: null
            };
        }
    });

    Object.values(dataNPC).forEach((item, index) => {
        if (index < colors.length) {
            item.backgroundColor = colors[index];
        } else {
            const hue = (index * 137) % 360; 
            item.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        }
    });

    const datasets = {
        datasets: Object.values(dataNPC)
    };

    const config = NPCsAndBossesChartConfig;
    config.data = datasets;

    NPCsAndBossesChartInstance = new Chart(ctx, config);


    // Compare Generating levels to NPCs messages
    const bothTabs = [...generatingLevels, ...messagesFromMastersAndBosses].sort((a, b) => new Date(`${a.content.date} ${a.content.time}`) - new Date(`${b.content.date} ${b.content.time}`));
    
    instanceWithNPCs.clear(); // Zlicza liczbê map dla ka¿dego NPC
    const npcSeenInInstance = new Set(); // Œledzi NPC w aktualnej instancji
    let lastInstanceSeed = -2;

    bothTabs.forEach((record) => {
        const currentSeed = record.content.seed;
        if (currentSeed === 1) {
            return;
        }
        const npcName = record.content.name;

        if (currentSeed !== -1 && currentSeed !== lastInstanceSeed) {
            // Nowa instancja mapy - resetujemy zbiór NPC
            lastInstanceSeed = currentSeed;
            npcSeenInInstance.clear();
        }

        // Jeœli NPC jeszcze nie zosta³ zliczony na tej mapie, dodaj go
        if (npcName && !npcSeenInInstance.has(npcName)) {
            npcSeenInInstance.add(npcName);
            instanceWithNPCs.set(npcName, (instanceWithNPCs.get(npcName) || 0) + 1);
        }
    });
}

const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById("npcAndBossesVoice-chart-legend");
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexWrap = 'wrap';
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;

        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};

const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }        

        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.marginLeft = '10px';

            li.onclick = () => {
                const { type } = chart.config;
                if (type === 'pie' || type === 'doughnut') {
                    // Pie and doughnut charts only have a single dataset and visibility is per item
                    chart.toggleDataVisibility(item.index);
                } else {
                    chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                chart.update();
            };

            li.addEventListener("mouseenter", (event) => {
                tooltipContainer.innerHTML = SetNPCsAdditionalData (item.text);
                tooltipContainer.classList.add("show");

                const rect = event.target.getBoundingClientRect();
                tooltipContainer.style.top = `${rect.top + window.scrollY - 5}px`;
                tooltipContainer.style.left = `${rect.left + 75 + window.scrollX}px`;
            });

            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + 'px';
            boxSpan.style.display = 'inline-block';
            boxSpan.style.flexShrink = 0;
            boxSpan.style.height = '20px';
            boxSpan.style.marginRight = '10px';
            boxSpan.style.width = '20px';

            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
        });
    }
};

function SetNPCsAdditionalData(name) {
    let html = `<h4>${name} - <a href="https://www.poewiki.net/wiki/${name.replaceAll(' ', '_')}" target="_blank" rel="noopener noreferrer">wiki</a></h4><br />`;

    let uniqMessages = new Map();
    messagesFromMastersAndBosses.forEach(record => {
        if (record.content.name === name) { // Filtrowanie po NPC
            const message = record.content.message;
            uniqMessages.set(message, (uniqMessages.get(message) || 0) + 1);
        }
    });

    uniqMessages = new Map([...uniqMessages.entries()].sort((a, b) => b[1] - a[1]));

    let messagesText = "";
    let messagesCounter = 0;
    uniqMessages.forEach((count, message) => {
        messagesCounter += count;
        messagesText += `<p>${count}x ${message}</p>`;
    });
    const allCounter = messagesFromMastersAndBosses.length;
    html += `<h5>Type of message: ${uniqMessages.size}</h5>
            <h5>All messages: ${messagesCounter} / ${allCounter} (${(messagesCounter / allCounter * 100).toFixed(2)}%)</h5>
            <h5>You have met ${instanceWithNPCs.get(name)} times so far.</h5><br />`;
    return html + messagesText;
}


const NPCsAndBossesChartData = {
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                { x: '2025/01/20', y: 2 },
                { x: '2025/01/21', y: 3 },
            ],
        },
        {
            label: 'Dataset 2',
            data: [
                { x: '2025/01/20', y: 1 },
                { x: '2025/01/21', y: 3 },
            ],
        }
    ]
};


const NPCsAndBossesChartConfig = {
    type: 'bar',
    data: NPCsAndBossesChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            }
        },
        responsive: true,
        scales: {
            x: {
                type: 'category',
                display: true,
                stacked: true,
                title: {
                    display: false,
                    text: 'Dates'
                }
            },
            y: {
                stacked: true,
                display: true,
                title: {
                    display: false,
                    text: 'Values'
                }
            }
        }
    },
    plugins: [htmlLegendPlugin],
};


