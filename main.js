function one() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 1;
  }
  else {
    document.getElementById('input').value += 1;
  }
}
function two() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 2;
  }
  else {
    document.getElementById('input').value += 2;
  }
}
function three() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 3;
  }
  else {
    document.getElementById('input').value += 3;
  }
}
function four() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 4;
  }
  else {
    document.getElementById('input').value += 4;
  }
}
function five() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 5;
  }
  else {
    document.getElementById('input').value += 5;
  }
}
function six() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 6;
  }
  else {
    document.getElementById('input').value += 6;
  }
}
function seven() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 7;
  }
  else {
    document.getElementById('input').value += 7;
  }
}
function eight() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 8;
  }
  else {
    document.getElementById('input').value += 8;
  }
}
function nine() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    document.getElementById('input').value = 9;
  }
  else {
    document.getElementById('input').value += 9;
  }
}
function zero() {
  var x = document.getElementById('input').value;
  if (x == 0 ) {
    document.getElementById('input').value = 0;
  }
  else {
    document.getElementById('input').value += 0;
  }
}


function decimal() {
  document.getElementById('input').value += '.';
}
function remove() {
  document.getElementById('input').value = '';
}
function equal() {
  var getInput = document.getElementById('input').value;
  var solver = eval(getInput);
  document.getElementById('input').value = solver;
}
function plus() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    alert('Invalid input. Please enter a number first');
  }
  else {
    document.getElementById('input').value += '+';
  }
}
function minus() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    alert('Invalid input. Please enter a number first');
  }
  else {
    document.getElementById('input').value += '-';
  }
}
function multiply() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    alert('Invalid input. Please enter a number first');
  }
  else {
    document.getElementById('input').value += '*';
  }
}
function divide() {
  var x = document.getElementById('input').value;
  if (x == 0) {
    alert('Invalid input. Please enter a number first');
  }
  else {
    document.getElementById('input').value += '/';
  }
}