const sideMenu = document.querySelector('aside');
const darkMode = document.querySelector('.dark-mode');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

function redirectToHomePage() {
    window.location.href = "index.html";
}

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});


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
    
    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode-variables');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    })
    