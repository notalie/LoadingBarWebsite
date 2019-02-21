$(document).ready(function(){
    var wantedImage = prompt("Any Images? (please either put the local image address or a web address");
    /*var milliseconds = prompt("Please Enter how many milliseconds");
    var size = prompt("Please Enter how big");
    if(milliseconds && size) {
        findTime(milliseconds,size);
    }*/
    var wantedSeconds = prompt("Enter How Many Seconds You'd Like");
    
    if (wantedSeconds && wantedImage) {
        document.body.style.backgroundImage = "url(" + wantedImage + ")";
        enterTime(wantedSeconds);
    } else if(wantedImage) {
        document.body.style.backgroundImage = "url(" + wantedImage + ")";
    } else if (wantedSeconds) {
        enterTime(wantedSeconds);
    }
   
    
});

function move(milliseconds,size) {
    var elem = document.getElementById("myBar"); 
    var percentage = document.getElementById("progressPercent"); 
    var myProgress = document.getElementById("myProgress"); 
    var loadingSection = document.getElementById("loadingSection"); 
    var h1 = document.getElementsByTagName("h1")[0];
    var width = 1;
    var id = setInterval(frame, milliseconds);
    var milliseconds = parseInt(milliseconds);
    var size = parseFloat(size);
   
    function frame() {
      if (width + size >= 100) {
        clearInterval(id);
        percentage.style.visibility = "hidden";
        h1.innerHTML = "Stream Starting!!";
        myProgress.remove();
        //loadingSection.style.marginTop = "300px";
        // If you want it to flash 
        //var id = setInterval(animateThing(), 10000);
      } else {
        width+=size; 
        var temp = width;
        percentage.style.visibility = "visible";
        elem.style.width = width + '%'; 
        percentage.innerHTML = parseInt(temp * 1) + '%';
    
      }
    }
}

function animateThing() {
    $("h1").blast({ delimiter: "word" });
    var letters = document.getElementsByClassName("blast");
    console.log(letters);
    for(var i = 0;i<letters.length;i++) {
        var colour = randomColour[Math.floor((Math.random() * 5) + 0)];
        console.log(colour);
        letters[i].style.color = colour;
    }
}

function enterTime(seconds) {
    var refreshRate = parseFloat(seconds/((100/.1)/1000));
    move(refreshRate,.1);
}


function findTime(milliseconds, size) {
    var milliseconds = milliseconds;
    var size = size;
    var time = milliseconds * (100/size) / 1000;
    
    var answer = confirm("Going at " + milliseconds + " increasing by " + size + " gives " + time + " (s). Is this Ok?");
    if(answer) {
        move(milliseconds,size);
    } 
    
}

function start() {
    var milliseconds =  document.getElementById("milliseconds").value; 
    var size = document.getElementById("size").value; 
    findTime(milliseconds,size);
}

function done() {
    var elem = document.getElementById("myProgress"); 
    var i = 0;
    while(i<5) {
        //var random = Math.random(Math.random()*5);
        elem.style.backgroundColor = randomColour[0];
        sleep(100);
        elem.style.backgroundColor = randomColour[1];
        sleep(100);
        elem.style.backgroundColor = randomColour[2];
        console.log(colour);
        i++;
    }
    
}

var randomColour = [
    "#4286f4",
    "#9e5eff",
    "#b5dae0",
    "#ffc711",
    "#ff8432"
]

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }