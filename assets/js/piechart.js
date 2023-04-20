document.addEventListener('DOMContentLoaded', function() {

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Popular', 11],
    ['Creative', 2],
    ['Collector',2],
    ['Tech', 2],
    ['Adventure',5],
    ['Fashion', 2],
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