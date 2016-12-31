console.log("hi")
var cow = document.getElementById('new');
var train = cow.getContext("2d");
train.moveTo(0,0);
train.lineTo(1000,500);

train.moveTo(1000,0);

train.lineTo(0,500);

train.moveTo(500,0)
train.lineTo(500,500)
train.lineWidth=10

// train.stroke();
// var cow1 = document.getElementById('new1');
// var train1 = cow1.getContext("2d");
// train.beginPath(0,0);
// train.arc(95,50,40,0,2*Math.PI);
// train.stroke();

var cow1a = document.getElementById('new1a');
var train1a = cow1a.getContext("2d");
train1a.font = "30px Arial";
train1a.fillText("Hello people of the planet earth", 20, 20)
train1a.stroke();

// var cow1b = document.getElementById('new');
// var train1b = cow1b.getContext("2d");
// train1b.font = "30px Arial";
// train1b.strokeText("Hello people of the planet earth", 20, 20)
// train1b.stroke();

var cow1c = document.getElementById('new1c')
var train1c = cow1c.getContext("2d")
train1c.
