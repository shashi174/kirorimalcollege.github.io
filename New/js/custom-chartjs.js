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

  //   // 5. Pie Chart
  //   var pieData = [
  //     {
  //       value: 30,
  //       color: $yellow
  //     },
  //     {
  //       value : 50,
  //       color : $info
  //     },
  //     {
  //       value : 100,
  //       color : $success
  //     }

  //   ];

  //   var myPie = new Chart(document.getElementById("pieChart").getContext("2d")).Pie(pieData);


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


  // 1. Bar Charts
  // var data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       fillColor: "rgba(220,220,220,0.5)",
  //       strokeColor: "rgba(220,220,220,0.8)",
  //       highlightFill: "rgba(220,220,220,0.75)",
  //       highlightStroke: "rgba(220,220,220,1)",
  //       data: [65, 59, 80, 81, 56, 55, 40]
  //     },
  //     {
  //       label: "My Second dataset",
  //       fillColor: "rgba(151,187,205,0.5)",
  //       strokeColor: "rgba(151,187,205,0.8)",
  //       highlightFill: "rgba(151,187,205,0.75)",
  //       highlightStroke: "rgba(151,187,205,1)",
  //       data: [28, 48, 40, 19, 86, 27, 90]
  //     }
  //   ]
  // };

  // var ctx4 = document.getElementById("chart-area4").getContext("2d");
  // var myBarChart = new Chart(ctx4).Bar(data, options);


  // var doughnutData = [
  //   {
  //     value: 30,
  //     color: $yellow
  //   },
  //   {
  //     value : 50,
  //     color : $success
  //   },
  //   {
  //     value : 100,
  //     color : $info
  //   },
  //   {
  //     value : 40,
  //     color : $warning
  //   },
  //   {
  //     value : 120,
  //     color : $gplus,
  //   }

  // ];

  // var myDoughnut = new Chart(document.getElementById("doughnutChart").getContext("2d")).Doughnut(doughnutData);


  // bar chart data
  var barData = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
      {
        fillColor : "#48A497",
        strokeColor : "#48A4D1",
        data : [456,479,324,569,702,600]
      },
      {
        fillColor : "rgba(73,188,170,0.4)",
        strokeColor : "rgba(72,174,209,0.4)",
        data : [364,504,605,400,345,320]
      }
    ]
  }
  // get bar chart canvas
  var income = document.getElementById("income").getContext("2d");
  // draw bar chart
  new Chart(income).Bar(barData);


  // Custom chart Js code ends here


  var ctx1 = document.getElementById("chart-area1").getContext("2d");
  window.myDoughnut = new Chart(ctx1).Doughnut(doughnutData1, {responsive : true});

  var ctx2 = document.getElementById("chart-area2").getContext("2d");
  window.myDoughnut = new Chart(ctx2).Doughnut(doughnutData2, {responsive : true});

  var ctx3 = document.getElementById("chart-area3").getContext("2d");
  window.myPie = new Chart(ctx3).Pie(pieData1, {responsive : true});


  window.onload = function(){
    ctx1();
    ctx2();
    ctx3();
    ctx4();
  };


  var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
  }
  var width = $('canvas').parent().width();
  $('canvas').attr("width",width);
  new Chart(ctx).Line(data,options);
  window.onresize = function(event){
    var width = $('canvas').parent().width();
    $('canvas').attr("width",width);
    new Chart(ctx).Line(data,options);
  };

  size(true);

}());
