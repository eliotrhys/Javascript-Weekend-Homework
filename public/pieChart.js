var NYC = function(name, y, color){
  this.name = name;
  this.y = y;
  this.color = color;
}
//
// var fire = new NYC("Fire", 36, "#ffac33");
// var water = new NYC("Water", 14, "#2b2b2b");
// var grass = new NYC("Grass", 18, "#00ba2f");
//
// var makeObjects = function(array){
//   var items = [50, 20, 14, 100, 78];
//   var item = items[Math.floor(Math.random()*items.length)];
//
//   var colours = ["green", "blue", "red", "orange", "yellow"];
//   var color = items[Math.floor(Math.random()*items.length)];
//
//   for (x of array){
//     var object = new NYC(x, item, color);
//   }
// }
//
// var objects = makeObjects(array);
//
// console.log(objects);

var PieChart = function(){
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      backgroundColor: "black",
      renderTo: container
    },
    title: {
      text: 'Comic Sales By Type'
    },
    series: [{
      name: 'Comic Type',
      data: [{
        name: 'Trade Paperback',
        y: 74,
        color: '#f7a33d'
      },
      {
        name: "Compendium",
        y: 25,
        color: "#30dcff",
        sliced: true
      },
      {
        name: "Single Issue",
        y: 20,
        color: "black"
      }]
    }]
  });

}
