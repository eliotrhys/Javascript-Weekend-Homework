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

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var populateGrid = function(BKV_comics){
  var div = document.querySelector("#the_shop");
  var counter = 0

  var populateDescription = function(para){
    var displayDescription = document.querySelector("#the_description");
    displayDescription.innerText = para.innerText;
  }

  var BKV_final = shuffle(BKV_comics);

  for (comic of BKV_final){
    counter ++;
    var subDiv = document.createElement("div");
    var para = document.createElement("p");
    para.innerText = comic.description;
    para.setAttribute("class", "hide");
    para.setAttribute("id", `description${counter}`)
    subDiv.setAttribute("class", "border");
    subDiv.setAttribute("onclick", populateDescription(para));

    var img = document.createElement("img");
    var imgBuilder = comic.thumbnail.path;
    var imgBuilder2 = comic.thumbnail.extension;
    var imgBuilt = `${imgBuilder}/portrait_xlarge.${imgBuilder2}`;
    img.src = imgBuilt;

    var title = document.createElement("p");
    title.innerText = comic.title;

    var button = document.createElement("button");
    button.innerText = "BUY NOW!";

    var button2 = document.createElement("button");
    button2.innerText = "+ to wishlist";
    button2.setAttribute("class", "bluebutton");

    subDiv.appendChild(img);
    subDiv.appendChild(title);
    subDiv.appendChild(para);
    subDiv.appendChild(button);
    subDiv.appendChild(button2);
    div.appendChild(subDiv);
  }
}

var app = function(){
  var url = 'https://gateway.marvel.com:443/v1/public/creators/190/comics?ts=1&limit=15&apikey=6c92e56a5d9dc2a50364be82b90792dd&hash=516fd98028f4197461503a883d78786d';
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
