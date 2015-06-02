// (function(){


//   bar chart data
//   var barData = {
//     labels : ["January","February","March","April","May","June"],
//     datasets : [
//       {
//         fillColor : "#48A497",
//         strokeColor : "#48A4D1",
//         data : [456,479,324,569,702,600]
//       },
//       {
//         fillColor : "rgba(73,188,170,0.4)",
//         strokeColor : "rgba(72,174,209,0.4)",
//         data : [364,504,605,400,345,320]
//       }
//     ]
//   }
//   // get bar chart canvas
//   var income = document.getElementById("income").getContext("2d");
//   // draw bar chart
//   new Chart(income).Bar(barData);


//   window.onload = function(){
//     income();
//   };
//   // // var pieOptions = {
//   // //   segmentShowStroke : false,
//   // //   animateScale : true
//   // // };
//   var width = $('canvas').parent().width();
//   $('canvas').attr("width",width);
//   new Chart(ctx).Line(data,options);
//   window.onresize = function(event){
//     var width = $('canvas').parent().width();
//     $('canvas').attr("width",width);
//     new Chart(ctx).Line(data,options);
//   };

//   size(true);

// }());


(function createChart(){

  //Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");

  //Create the data object to pass to the chart
  var data = {
    labels : ["2015","2014","2013","2012","2011","2010","2009"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        data : [28,48,40,19,96,27,100]
      }
    ]
  };

  //The options we are going to pass to the chart
  options = {
    barDatasetSpacing : 15,
    barValueSpacing: 10,
    scaleShowVerticalLines: true,
    barShowStroke : true,
    scaleFontColor: "#000",
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  };

  //Create the chart
  new Chart(ctx).Bar(data, options);
}());
