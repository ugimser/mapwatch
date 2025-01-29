let currencyInWhispersFromChartInstance = null;
let currencyInWhispersToChartInstance = null;

function CurrencyInWhispersFromChartRender() {
    const ctx = document.getElementById('currencyInWhispersFromChart').getContext('2d');

    if (currencyInWhispersFromChartInstance) {
        currencyInWhispersFromChartInstance.destroy();
    }

    let mirr = 0, d = 0, ex = 0, c = 0;
    let mirrCount = 0, dCount = 0, exCount = 0, cCount = 0;
    whisperFrom.forEach((record) => {
        if (!record.content) {
            return;
        }
        const message = record.content.message;
        if (message.includes(' to buy ')) {
            const matchMirr = message.match(/(\d+)\s+mirror/i);
            if (matchMirr) {
                mirr += Number(matchMirr[1]);
                mirrCount++;
            }

            const matchD = message.match(/(\d+)\s+divine/i);
            if (matchD) {
                d += Number(matchD[1]);
                dCount++;
            }

            const matchEx = message.match(/(\d+)\s+exalted/i);
            if (matchEx) {
                ex += Number(matchEx[1]);
                exCount++;
            }

            const matchC = message.match(/(\d+)\s+chaos/i);
            if (matchC) {
                c += Number(matchC[1]);
                cCount++;
            }

            //console.log(message);
        }
    });

    const newData = {
        labels: ['Mirrors', 'Divine Orbs', 'Exalted Orbs', 'Chaos Orbs'],
        datasets: [
            {
                label: 'Currency amount',
                data: [mirr, d, ex, c],
                offset: 10,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',  // Teal
                    'rgba(255, 99, 132, 1)',  // Red
                    'rgba(54, 162, 235, 1)',  // Blue
                    'rgba(255, 206, 86, 1)',  // Yellow
                ]
            }
        ]
    };
    //currencyInWhispersFromChartData.datasets[0].data = [mirr, d, ex, c];
    newData.datasets.push({
        label: 'Whisper amount',
        data: [mirrCount, dCount, exCount, cCount],
        backgroundColor: newData.datasets[0].backgroundColor,
        offset: 10,
    });
    currencyInWhispersFromChartConfig.data = newData;

    currencyInWhispersFromChartInstance = new Chart(ctx, currencyInWhispersFromChartConfig);
}

function CurrencyInWhispersToChartRender() {
    const ctx = document.getElementById('currencyInWhispersToChart').getContext('2d');

    if (currencyInWhispersToChartInstance) {
        currencyInWhispersToChartInstance.destroy();
    }

    let mirr = 0, d = 0, ex = 0, c = 0;
    let mirrCount = 0, dCount = 0, exCount = 0, cCount = 0;
    whisperTo.forEach((record) => {
        if (!record.content) {
            return;
        }
        const message = record.content.message;
        if (message.includes(' to buy ')) {
            const matchMirr = message.match(/(\d+)\s+mirror/i);
            if (matchMirr) {
                mirr += Number(matchMirr[1]);
                mirrCount++;
            }

            const matchD = message.match(/(\d+)\s+divine/i);
            if (matchD) {
                d += Number(matchD[1]);
                dCount++;
            }

            const matchEx = message.match(/(\d+)\s+exalted/i);
            if (matchEx) {
                ex += Number(matchEx[1]);
                exCount++;
            }

            const matchC = message.match(/(\d+)\s+chaos/i);
            if (matchC) {
                c += Number(matchC[1]);
                cCount++;
            }

            //console.log(message);
        }
    });

    const privateData = structuredClone(currencyInWhispersFromChartData);
    privateData.datasets[0].data = [mirr, d, ex, c];
    privateData.datasets[1] = {
        label: 'Whisper amount',
        data: [mirrCount, dCount, exCount, cCount],
        backgroundColor: privateData.datasets[0].backgroundColor,
        offset: 10,
    };
    const privateConfig = structuredClone(currencyInWhispersFromChartConfig);
    privateConfig.data = privateData;

    currencyInWhispersToChartInstance = new Chart(ctx, privateConfig);
}

const currencyInWhispersFromChartData = {
    labels: [ 'Mirrors', 'Divine Orbs', 'Exalted Orbs', 'Chaos Orbs'],
    datasets: [
        {
            label: 'Currency amount',
            data: [1, 2, 3, 4],
            offset: 10,
            backgroundColor: [
                'rgba(75, 192, 192, 1)',  // Teal
                'rgba(255, 99, 132, 1)',  // Red
                'rgba(54, 162, 235, 1)',  // Blue
                'rgba(255, 206, 86, 1)',  // Yellow
            ]
        }
    ]
};

const currencyInWhispersFromChartConfig = {
    type: 'pie',
    data: currencyInWhispersFromChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Pie Chart'
            }
        }
    },
};











