
window.onload = function() {


    if(localStorage.getItem('login') == 1) {

        document.getElementById('authentic').style.display = 'none';
    } else {

        document.getElementById('authentic1').style.display = 'none';
    }
}

function login(v) {

 localStorage.setItem('login', v);

  history.back();

}
