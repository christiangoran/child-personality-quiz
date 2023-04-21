document.addEventListener('DOMContentLoaded', function() {

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(result) {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Popular', 11],
    ['Creative', 9],
    ['Collector', 6],
    ['Tech', 3],
    ['Adventure',2],
    ['Fashion', 1],
  ]);

  var options = {
    title: '',  
    
    width: '100%',
    height: '100%',
    legend: {
      alignment: 'center',
      position: 'left',
      textStyle: { color: '#EB4826', fontSize: 11 }
    },
    backgroundColor: 'transparent',
    pieSliceBorderColor: 'transparent',
    pieSliceBorderWidth: 0,
    colors: 'red',
    enableInteractivity: false,
    pieSliceText: 'none',
    colors: ['#EB4826', '#AC4C33', '#85422E', '#623729', '#442B22', '#271B16'],
    animation: {
      duration: 800,
      easing: 'out',
      startup: true
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));


    chart.draw(data, options);


};

});