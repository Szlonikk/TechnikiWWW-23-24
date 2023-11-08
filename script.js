function redirectToHomePage() {
    window.location.href = "index.html";
}
function redirectToAboutPage() {
    window.location.href = "o_nas.html";
}
function redirectToMyProfilePage() {
    window.location.href = "moje_konto.html";
}
function redirectToSupportPage() {
    window.location.href = "wsparcie.html";
}
document.addEventListener("DOMContentLoaded", function () {
    var logoElements = document.getElementsByClassName("logo");

    for (var i = 0; i < logoElements.length; i++) {
        logoElements[i].addEventListener("click", redirectToHomePage);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var logoElements = document.getElementsByClassName("material-icons-sharp");

    for (var i = 0; i < logoElements.length; i++) {
        logoElements[i].addEventListener("click", redirectToMyProfilePage);
    }
});
