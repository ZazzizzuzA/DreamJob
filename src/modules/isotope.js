import Isotope from "isotope-layout";

var elem = document.querySelector('.grid');
var iso = new Isotope(elem, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: "*",
})
let butAll = document.getElementById("filters");
let button = Array.from(butAll.getElementsByTagName("button"));
button.forEach((item) => {
    item.onclick = () => {
        let data = item.getAttribute("data-filter");
        iso.arrange({
            filter: data
        })
    }
});
let icon = document.getElementById('nav-icon');
icon.addEventListener('click', function openMenu() {

    let menu = document.getElementsByClassName('block__menu')[0];
    icon.classList.toggle('open');
    menu.classList.toggle('close_menu');

});
let exchangeRates = document.getElementsByClassName('exchangeRates')[0];
let paragrRate = Array.from(document.getElementsByClassName('rates'));

fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then(response => response.json())
    .then(json => {
        let arrJson = [];
        for (var i = 0; i < json.length; i++) {
            if (json[i].cc == "RUB" || json[i].cc == "USD" || json[i].cc == "EUR") {
                arrJson.push(json[i].exchangedate + " - " + json[i].cc + ": " + json[i].rate);

            }
        }
        paragrRate.forEach(function(item, i) { item.innerHTML = arrJson[i]; })
    });


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: ["Previous", "Next"],
        navClass: ["owl-button-prev", "owl-button-next"],

    });
});