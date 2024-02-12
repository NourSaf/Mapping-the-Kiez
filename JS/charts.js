
// document.addEventListener('DOMContentLoaded', function () {
//     const parties = ['SPD', 'CDU', 'GRÜNE', 'DIE LINKE', 'AfD'];
//     const counts = [97, 21, 370, 90, 16];
//     const counts2 = [52, 57, 79, 88, 55];
//     const percentages = [12.9, 2.8, 49.1, 12.0, 2.1];
//     const percentages2 = [40, 20, 49.1, 12.0, 2.1];

//     const marrige = ['Lebendgeborene gesamt','Lebendgeborene männlich', 'weiblich' ]
//     const marrigeNumbers = [199, 100, 99 ]

//     const ctxBar = document.getElementById('barChart').getContext('2d');
//     const barChart = new Chart(ctxBar, {
//         type: 'pie',
//         data: {
//             labels: parties,
//             datasets: [{
//                 label: 'Count',
//                 data: counts2,
//                 backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
//             }]
//         },
//     });
//     const ctxBar1 = document.getElementById('maribar').getContext('2d');
//     const maribar = new Chart(ctxBar1, {
//         type: 'bar',
//         data: {
//             labels: marrige,
//             datasets: [{
//                 label: 'marrigeNumbers',
//                 data: marrigeNumbers,
//                 backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
//             }]
//         },
//     });

//     // Pie Chart for Percentages
//     const ctxPie = document.getElementById('pieChart').getContext('2d');
//     const pieChart = new Chart(ctxPie, {
//         type: 'pie',
//         data: {
//             labels: parties,
//             datasets: [{
//                 label: 'Percentage',
//                 data: percentages,
//                 backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
//             }]
//         }
//     });

//     const ctxPiesecond = document.getElementById('pieChartsecond').getContext('2d');
//     const pieChartsecond = new Chart(ctxPiesecond, {
//         type: 'pie',
//         data: {
//             labels: parties,
//             datasets: [{
//                 label: 'Percentage',
//                 data: percentages2,
//                 backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
//             }]
//         }
//     });

//     const ctxPieseconds = document.getElementById('pieChartseconds').getContext('2d');
//     const pieChartseconds = new Chart(ctxPieseconds, {
//         type: 'pie',
//         data: {
//             labels: parties,
//             datasets: [{
//                 label: 'Percentage',
//                 data: percentages2,
//                 backgroundColor: ['red', 'blue', 'green', 'purple', 'yellow']
//             }]
//         }
//     });
// });


const marriageData = {
    labels: ['Lebendgeborene gesamt', 'Lebendgeborene männlich', 'weiblich'],
    datasets: [{
      صlabel: 'Population',
      data: [199, 100, 99],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  };
  
  function generateChart(data, chartId) {
    const ctx = document.getElementById(chartId).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    });
  }
  
  // Initialize the chart
  generateChart(marriageData, 'myChart');
  
  
  const marriageDataForBubble = {
    datasets: [{
      label: 'Population',
      data: [
        { x: 1, y: 199, r: 199/10 }, // Divided by 10 for visual proportionality
        { x: 2, y: 100, r: 100/10 },
        { x: 3, y: 99, r: 99/10 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
    }]
  };
  
  function generateBubbleChart(chartId) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
      type: 'bubble',
      data: marriageDataForBubble,
      options: {
        scales: {
          x: {
            // Assuming a categorical-like approach for x-axis
            ticks: {
              // Custom function to return label for each category
              callback: function(val, index) {
                const labels = ['Lebendgeborene gesamt', 'Lebendgeborene männlich', 'weiblich'];
                return labels[index];
              }
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Initialize the chart
  generateBubbleChart('myBubbleChart');
  