
var logged;
window.onload = function() {


    if(logged == true) {
        document.getElementById('authentic1').style.display = 'block';
        document.getElementById('authentic').style.display = 'none';
    } else {
        document.getElementById('authentic').style.display = 'block';
        document.getElementById('authentic1').style.display = 'none';
    }
}

function logged() {

  logged = true;

  window.location.href = "index.html";
}
function loggedout() {

  logged = false;

  window.location.href = "index.html";
}
