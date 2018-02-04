var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var requestComplete = function(){
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var BKVInfo = JSON.parse(jsonString);
    fuckArray = BKVInfo.data.results;
    // console.log(fuckArray);
    // populateList(fuckArray);
    populateGrid(fuckArray);

  }

// var populateList = function(BKV_comics){
//   var ul = document.querySelector("#testlist");
//
//   for (comic of BKV_comics){
//     var li = document.createElement("li");
//     // li.innerText = comic.title;
//
//     var img = document.createElement("img");
//     var imgBuilder = comic.thumbnail.path;
//     var imgBuilder2 = comic.thumbnail.extension;
//     var imgBuilt = `${imgBuilder}/portrait_medium.${imgBuilder2}`;
//     img.src = imgBuilt;
//     ul.appendChild(li);
//     ul.appendChild(img);
//   }
// }

var populateGrid = function(BKV_comics){
  var div = document.querySelector("#the_shop");

  for (comic of BKV_comics){
    var subDiv = document.createElement("div");
    subDiv.setAttribute("class", "border");

    var img = document.createElement("img");
    var imgBuilder = comic.thumbnail.path;
    var imgBuilder2 = comic.thumbnail.extension;
    var imgBuilt = `${imgBuilder}/portrait_medium.${imgBuilder2}`;
    img.src = imgBuilt;
    console.log(subDiv);
    console.log(div);

    subDiv.appendChild(img);
    div.appendChild(subDiv);
  }
}


var app = function(){
    var url = 'https://gateway.marvel.com:443/v1/public/creators/190/comics?ts=1&limit=25&apikey=6c92e56a5d9dc2a50364be82b90792dd&hash=516fd98028f4197461503a883d78786d';
    makeRequest(url, requestComplete);
  }

window.addEventListener('load', app);
