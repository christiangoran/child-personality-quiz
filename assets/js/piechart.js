const ctx = document.getElementById('myChart');

function buildPie(pieArray) {

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: false,
    datasets: [{
      label: false,
      data: pieArray,
      borderWidth: 0,
      backgroundColor: [
        '#EB4826',
        '#AC4C33',
        '#85422E',
        '#623729',
        '#442B22',
        '#271B16'

      ]
    }]
  },
  options: {
    scales: false
  }
});

}
