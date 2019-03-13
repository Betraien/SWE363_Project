window.onload = function() {


    if(localStorage.getItem('login') == 0) {
        document.getElementById('myorders').style.display = 'none';
        document.getElementById('myaccount').style.display = 'none';
    }
}
