let tradeAcceptedCounter = 0;
let tradeCancelledCounter = 0;
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
                data: [tradeAcceptedCounter, tradeCancelledCounter],
            }
        ]
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












