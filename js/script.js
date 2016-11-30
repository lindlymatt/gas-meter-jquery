var segment = 0;
var gasTank = $('.gas-tank');
var gas1 = $('.gas-1');
var gas2 = $('.gas-2');
var gas3 = $('.gas-3');
var gas4 = $('.gas-4');

var car = {
  gasTankFull: true,
  moving: false
}

$(document).ready(function () {
  window.setInterval(changeGas, 2560);
});

function changeGas() {
  segment++;
  if (segment !== 4) {
    car.gasTankFull = false;
    car.moving = true;
    if (segment === 1) {
      gas1.css('background-color', 'black');
    } else if (segment === 2) {
      gas2.css('background-color', 'black');
    } else if (segment === 3) {
      gas3.css('background-color', 'black');
    }
  } else {
    segment = 0;
    car.gasTankFull = true;
    car.moving = false;
    gas1.css('background-color', 'red');
    gas2.css('background-color', 'red');
    gas3.css('background-color', 'red');
    gas4.css('background-color', 'red');
  }
}
