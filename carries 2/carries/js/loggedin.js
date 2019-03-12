
function logged() {

  localStorage.setItem('logged_in',1);

  window.location.href = "index.html";
}
function loggedout() {

  localStorage.setItem('logged_in', 0);

  window.location.href = "index.html";
}
