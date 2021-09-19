// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var lock = false;

$(document).keydown(function (event) {
    if (event.code == "KeyW" && lock==false) {
        document.getElementById('input-direction').value = 'F';
        $(".input-direction").trigger("click");
        lock = true;
    }
    if (event.code == "KeyS" && lock==false) {
        document.getElementById('input-direction').value = 'B';
        $(".input-direction").trigger("click");
        lock = true;
    }
    if (event.code == "KeyA" && lock == false) {
        document.getElementById('input-direction').value = 'L';
        $(".input-direction").trigger("click");
        lock = true;
    }
    if (event.code == "KeyD" && lock == false) {
        document.getElementById('input-direction').value = 'R';
        $(".input-direction").trigger("click");
        lock = true;
    }
    if (event.code == "KeyQ" && lock == false) {
        document.getElementById('input-direction').value = 'S';
        $(".input-direction").trigger("click");
        lock = true;
    }

})
$(document).keyup(function (event) {
    document.getElementById('input-direction').value = 'S';
    $(".input-direction").trigger("click");
    lock = false;
})
