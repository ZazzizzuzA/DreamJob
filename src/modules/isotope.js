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
let paragrRate = document.getElementsByClassName('rates');

function rates(url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json") {
    return fetch(url).then(response => response.json())
        .then(json => {
            let arrJson = [];
            for (var i = 0; i < json.length; i++) {
                if (json[i].cc == "RUB" || json[i].cc == "USD" || json[i].cc == "EUR") {
                    arrJson.push(json[i]);

                }
            }
            return arrJson;
        });
}


console.log(rates());