
document.addEventListener('DOMContentLoaded', function () {
    // Data from your CSV file
    const parties = ['SPD', 'CDU', 'GRÜNE', 'DIE LINKE', 'AfD'];
    const counts = [97, 21, 370, 90, 16];
    const counts2 = [52, 57, 79, 88, 55];
    const percentages = [12.9, 2.8, 49.1, 12.0, 2.1];
    const percentages2 = [40, 20, 49.1, 12.0, 2.1];

    // Bar Chart for Counts
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctxBar, {
        type: 'pie',
        data: {
            labels: parties,
            datasets: [{
                label: 'Count',
                data: counts2,
                backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
            }]
        },
        // options: {
        //     scales: {
        //         y: {
        //             beginAtZero: true
        //         }
        //     }
        // }
    });

    // Pie Chart for Percentages
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: parties,
            datasets: [{
                label: 'Percentage',
                data: percentages,
                backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
            }]
        }
    });

    const ctxPiesecond = document.getElementById('pieChartsecond').getContext('2d');
    const pieChartsecond = new Chart(ctxPiesecond, {
        type: 'pie',
        data: {
            labels: parties,
            datasets: [{
                label: 'Percentage',
                data: percentages2,
                backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
            }]
        }
    });
});
