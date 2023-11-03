function redirectToHomePage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    var logoElements = document.getElementsByClassName("logo");

    for (var i = 0; i < logoElements.length; i++) {
        logoElements[i].addEventListener("click", redirectToHomePage);
    }
});
