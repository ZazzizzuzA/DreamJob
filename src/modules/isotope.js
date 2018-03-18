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
let payment = document.getElementById('myOwnValue');
let cost = document.getElementById('valueOfRates');
let usd = document.getElementById('usdRates');
let eur = document.getElementById('eurRates');
let rur = document.getElementById('rurRates');
let btc = document.getElementById('btcRates');
let divUSD = document.getElementById('USD');
let counter = document.getElementById('countValue');

counter.onclick = clickButton;
payment.addEventListener('keyup', countValue);

function countValue() {
    if (event.keyCode == 13) {
        if (usd.checked) {
            cost.value = payment.value * USD.innerText;

        } else if (rur.checked) {
            cost.value = payment.value * RUR.innerText;

        } else if (eur.checked) {
            cost.value = payment.value * EUR.innerText;

        } else if (btc.checked) {
            cost.value = payment.value * BTC.innerText;
        }

    }
}

function clickButton() {
    if (usd.checked) {
        cost.value = payment.value * USD.innerText;

    } else if (rur.checked) {
        cost.value = payment.value * RUR.innerText;

    } else if (eur.checked) {
        cost.value = payment.value * EUR.innerText;

    } else if (btc.checked) {
        cost.value = payment.value * BTC.innerText;
    }
}


$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: ["Previous", "Next"],
        navClass: ["owl-button-prev", "owl-button-next"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                navText: ["Previous", "Next"],
                navClass: ["owl-button-prev", "owl-button-next"],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            },
            600: {
                items: 1,
                nav: true,
                navText: ["Previous", "Next"],
                navClass: ["owl-button-prev", "owl-button-next"],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            },
            1080: {
                items: 1,
                nav: true,
                navText: ["Previous", "Next"],
                navClass: ["owl-button-prev", "owl-button-next"],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            },
            1240: {
                items: 1,
                nav: true,
                navText: ["Previous", "Next"],
                navClass: ["owl-button-prev", "owl-button-next"],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            }
        }

    });
});