function redirectToHomePage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    var logoElements = document.getElementsByClassName("logo");

    for (var i = 0; i < logoElements.length; i++) {
        logoElements[i].addEventListener("click", redirectToHomePage);
    }
});
var mojeKontoLink = document.getElementById('myProfileOption');
    mojeKontoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'moje_konto.html';
    });

var mojeKontoLink = document.getElementById('supportPageOption');
    mojeKontoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'wsparcie.html';
    });
var mojeKontoLink = document.getElementById('aboutPageOption');
    mojeKontoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'o_nas.html';
    });    
    
var mojeKontoLink = document.getElementById('mainPageOption');
    mojeKontoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });    
    