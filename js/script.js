// Tooltip script
$(document).ready(function () { $('[data-toggle="tooltip"]').tooltip(); });

// RNG
function random() {
    document.getElementById("myNum").innerHTML = Math.floor(Math.random() * (250 - 100) + 100);
}