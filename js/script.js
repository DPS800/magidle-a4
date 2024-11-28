// Tooltip script
$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip();});

// RNG
var link = document.getElementById('getNumber');
onclick = getNumber;

function getNumber() {
    var minNumber = 100;
    var maxNumber = 250;
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    $('#myNumber').html(randomnumber);
    return false;
}