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
  populateGrid(fuckArray);
}

var populateGrid = function(BKV_comics){
  var div = document.querySelector("#the_shop");

  for (comic of BKV_comics){
    var subDiv = document.createElement("div");
    subDiv.setAttribute("class", "border");
    subDiv.setAttribute("style", "hover: ");
    // subDiv.setAttribute("onclick", "setDescription(comic.description)");

    var img = document.createElement("img");
    var imgBuilder = comic.thumbnail.path;
    var imgBuilder2 = comic.thumbnail.extension;
    var imgBuilt = `${imgBuilder}/portrait_xlarge.${imgBuilder2}`;
    img.src = imgBuilt;
    img.setAttribute("style", "")

    var button = document.createElement("button");
    button.innerText = "BUY NOW!";

    subDiv.appendChild(img);
    subDiv.appendChild(button);
    div.appendChild(subDiv);
  }
}

// var setDescription = function(description){
//   var div = document.querySelector("#the_description");
//   div.innerText = description;
// }

var app = function(){
  var url = 'https://gateway.marvel.com:443/v1/public/creators/190/comics?ts=1&limit=15&apikey=6c92e56a5d9dc2a50364be82b90792dd&hash=516fd98028f4197461503a883d78786d';
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
