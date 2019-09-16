var YourCounter = 8000;
var EnemyCounter = 8000;

var Mode = "0"; //0 = 1v1, 1 = Commander

function YourIncrease() {
  YourCounter = YourCounter + 100;
  document.getElementById('YourCount').innerHTML = YourCounter;
  saveLife(); 
}

function YourDecrease() {
  YourCounter = YourCounter - 100;
  document.getElementById('YourCount').innerHTML = YourCounter;
  saveLife();
}

function EnemyIncrease() {
  EnemyCounter = EnemyCounter + 100;
  document.getElementById('EnemyCount').innerHTML = EnemyCounter;
  saveLife();
}

function EnemyDecrease() {
  EnemyCounter = EnemyCounter - 100;
  document.getElementById('EnemyCount').innerHTML = EnemyCounter;
  saveLife();
}  

function Reset() {
  if (true) { //confirm("Reset life totals to 8000?")) {
    YourCounter = 8000;
    
    document.getElementById('YourCount').innerHTML = YourCounter;
    document.getElementById('EnemyCount').innerHTML = EnemyCounter;
  }
}

function prepareOnClicks() {
    document.getElementById('YourUp').onclick = function() { YourIncrease(); };
    document.getElementById('YourDown').onclick = function() { YourDecrease(); };
    document.getElementById('EnemyUp').onclick = function() { EnemyIncrease(); };
    document.getElementById('EnemyDown').onclick = function() { EnemyDecrease(); };
    document.getElementById('reset').onclick = function() { Reset(); };
}

window.onload = function() {
  prepareOnClicks();
  var elem = document.querySelector('#YourDown');
  var draggie = new Draggabilly( elem, {
    axis: 'y'
  });
  document.getElementById('YourCount').innerHTML = YourCounter;
  document.getElementById('EnemyCount').innerHTML = EnemyCounter;
};