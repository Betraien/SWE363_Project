window.onload = function() {


    if(localStorage.getItem('login') == 1) {
        document.getElementById('myorders').style.display = 'none';
        document.getElementById('myaccount').style.display = 'none';
    }
}
