/*---------------------JS---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.getElementById("navbarToggle");
    var navigation = document.querySelector(".header-navigation ul");

    navbarToggle.addEventListener("click", function () {
      navigation.classList.toggle("show");
    });
  });