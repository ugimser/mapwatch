let tradeAcceptedCounter = [];
let tradeCancelledCounter = [];
let tradeStatusChartInstance = null;

function TradeStatusChartRender() {
    const ctx = document.getElementById('tradeStatusChart').getContext('2d');

    if (tradeStatusChartInstance) {
        tradeStatusChartInstance.destroy();
    }

    const data = {
        labels: ['Trade accepted', 'Trade cancelled'],
        datasets: [
            {
                label: 'Number of events',
                data: [tradeAcceptedCounter.length, tradeCancelledCounter.length],
                backgroundColor: [colors[0], colors[1]],
                borderColor: '#1e1e1e',
                borderWidth: 4,
                offset: 0,
            }
        ],
    };

    const config = {
        type: 'pie',
        data: data,
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


    tradeStatusChartInstance = new Chart(ctx, config);
}












