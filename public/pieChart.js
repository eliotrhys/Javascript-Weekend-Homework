var NYC = function(name, y, color){
  this.name = name;
  this.y = y;
  this.color = color;
}

var fire = new NYC("Fire", 36, "#ffac33");
var water = new NYC("Water", 14, "#2b2b2b");
var grass = new NYC("Grass", 18, "#00ba2f");

var makeObjects = function(array){
  var items = [50, 20, 14, 100, 78];
  var item = items[Math.floor(Math.random()*items.length)];

  var colours = ["green", "blue", "red", "orange", "yellow"];
  var color = items[Math.floor(Math.random()*items.length)];

  for (x of array){
    var object = new NYC(x, item, color);
  }
}

var objects = makeObjects(array);

console.log(objects);

var PieChart = function(array){
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: 'Comics By Price'
    },
    series: [{
      name: 'Type',
      data: objects
    }]
  });

}
