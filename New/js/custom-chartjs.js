// var $grid_color = "#eee";

// var $dark_blue = "#005387";
// var $info = "#87CEEB";
// var $danger = "#F56B6B";
// var $warning = "#F38733";
// var $success = "#2ecc71";
// var $yellow = "#fdd922";
// var $facebook = "#3b5999";
// var $twitter = "#00acee";
// var $linkedin = "#1a85bd";
// var $gplus = "#dc4937";

(function(){
  // var t;
  // function size(animate){
  //   if (animate == undefined){
  //     animate = false;
  //   }
  //   clearTimeout(t);
  //   t = setTimeout(function(){
  //     $("canvas").each(function(i,el){
  //       $(el).attr({
  //         "width":$(el).parent().width(),
  //         "height":$(el).parent().outerHeight()
  //       });
  //     });
  //     redraw(animate);
  //     var m = 0;
  //     $(".chartJS").height("");
  //     $(".chartJS").each(function(i,el){ m = Math.max(m,$(el).height()); });
  //     $(".chartJS").height(m);
  //     }, 30);
  //   }
  // $(window).on('resize', function(){ size(false); });

  // function redraw(animation){
  //   var options = {};
  //   if (!animation){
  //       options.animation = false;
  //   } else {
  //       options.animation = true;
  //   }

  //   // Custom chart Js code starts here


  //   // 2 Line Chart
  //   var lineChartData = {
  //     labels : ["January","February","March","April","May","June","July"],
  //     datasets : [
  //       {
  //         fillColor : $info,
  //         strokeColor : "rgba(220,220,220,1)",
  //         pointColor : $yellow,
  //         pointStrokeColor : "#fff",
  //         data : [65,59,90,81,56,55,40]
  //       },
  //       {
  //         fillColor : $dark_blue,
  //         strokeColor : "rgba(151,187,205,1)",
  //         pointColor : $gplus,
  //         pointStrokeColor : "#fff",
  //         data : [28,48,40,19,96,27,100]
  //       }
  //     ]

  //   }

  //   var myLine = new Chart(document.getElementById("lineChart").getContext("2d")).Line(lineChartData);

  //   //3. Polar Area Chart
  //   var chartData = [
  //     {
  //       value : Math.random(),
  //       color: $yellow
  //     },
  //     {
  //       value : Math.random(),
  //       color: $info
  //     },
  //     {
  //       value : Math.random(),
  //       color: $success
  //     },
  //     {
  //       value : Math.random(),
  //       color: $warning
  //     },
  //     {
  //       value : Math.random(),
  //       color: $gplus
  //     },
  //     {
  //       value : Math.random(),
  //       color: $twitter
  //     }
  //   ];
  //   var myPolarArea = new Chart(document.getElementById("polarAreaChart").getContext("2d")).PolarArea(chartData);

  //   // 4. Radar Chart
  //   var radarChartData = {
  //     labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
  //     datasets : [
  //       {
  //         fillColor : "rgba(220,220,220,0.5)",
  //         strokeColor : "rgba(220,220,220,1)",
  //         pointColor : "rgba(220,220,220,1)",
  //         pointStrokeColor : "#fff",
  //         data : [65,59,90,81,56,55,40]
  //       },
  //       {
  //         fillColor : "rgba(151,187,205,0.5)",
  //         strokeColor : "rgba(151,187,205,1)",
  //         pointColor : "rgba(151,187,205,1)",
  //         pointStrokeColor : "#fff",
  //         data : [28,48,40,19,96,27,100]
  //       }
  //     ]
  //   }
  //   var myRadar = new Chart(document.getElementById("radarChart").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});

  // 6. Doughnut

  var doughnutData1 = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }

  ];

  var ctx1 = document.getElementById("chart-area1").getContext("2d");
  window.myDoughnut1 = new Chart(ctx1).Doughnut(doughnutData1, options1);

  // End of donought#1

  // Donough #2
  var doughnutData2 = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }

  ];

  var ctx2 = document.getElementById("chart-area2").getContext("2d");
  window.myDoughnut2 = new Chart(ctx2).Doughnut(doughnutData2, {responsive : true});

  // End of Doughnut#2

  // Doughnut#3

  var doughnutData3 = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }

  ];

  var ctx3 = document.getElementById("chart-area3").getContext("2d");
  window.myDoughnut3 = new Chart(ctx3).Doughnut(doughnutData3, {responsive : true});

  // End of Doughnut 3

  // Pie Charts

  // Piechart#1
  var pieData1 = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }

  ];

 var ctx4 = document.getElementById("chart-area4").getContext("2d");
  window.myPie = new Chart(ctx4).Pie(pieData1, {responsive : true});

  // End of pie chart 1

  // Piechart#2
  var pieData2 = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }

  ];

 var ctx5 = document.getElementById("chart-area5").getContext("2d");
  window.myPie2 = new Chart(ctx5).Pie(pieData2, {responsive : true});

  // End of pie chart 2

  // Piechart#3
  var pieData3 = [
    {
      value: 300,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    },
    {
      value: 40,
      color: "#949FB1",
      highlight: "#A8B3C5",
      label: "Grey"
    },
    {
      value: 120,
      color: "#4D5360",
      highlight: "#616774",
      label: "Dark Grey"
    }

  ];

 var ctx6 = document.getElementById("chart-area6").getContext("2d");
  window.myPie3 = new Chart(ctx6).Pie(pieData3, {responsive : true});

  // End of pie chart 3


  // Custom chart Js code ends here

  window.onload = function(){
    ctx1();
    ctx2();
    ctx3();
    ctx4();
    ctx5();
    ctx6();
  };

  var options1 = {
    segmentShowStroke : false,
    animateScale : true,
    responsive : true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  };


  var width = $('canvas').parent().width();
  $('canvas').attr("width",width);
  new Chart(ctx).Line(data,options);
  window.onresize = function(event){
    var width = $('canvas').parent().width();
    $('canvas').attr("width",width);
    new Chart(ctx).Line(data,options);
  };

  size(true);


  // var legendHolder = document.getElementById('my-doughnut-legend')
  // legendHolder.innerHTML = myDoughnut1.generateLegend();
  // // Include a html legend template after the module doughnut itself
  // helpers.each(legendHolder.firstChild.childNodes, function(legendNode, index){
  //   helpers.addEvent(legendNode, 'mouseover', function(){
  //     var activeSegment = myDoughnut1.segments[index];
  //     activeSegment.save();
  //     activeSegment.fillColor = activeSegment.highlightColor;
  //     myDoughnut1.showTooltip([activeSegment]);
  //     activeSegment.restore();
  //   });
  // });
  // helpers.addEvent(legendHolder.firstChild, 'mouseout', function(){
  //   myDoughnut1.draw();
  // });
  // canvas.parentNode.parentNode.appendChild(legendHolder.firstChild);


  // myDoughnut1.generateLegend();
  // document.getElementById('my-doughnut-legend').innerHTML = myDoughnut1.generateLegend();

}());
