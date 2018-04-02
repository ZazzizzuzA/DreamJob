import 'bootstrap';
import "./styles/styles";
import "./modules/demo4";
import 'owl.carousel';
import "./controller/ctrl";
import Isotope from "isotope-layout";
import Chart from 'chart.js';

(function() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
    }
})();

/*        Изотоп        */

var elem = document.querySelector('.grid');
var iso = new Isotope(elem, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: "*",
    percentPosition: true,
    fitRows: {
        gutter: 10
    }
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

/*     Меню       */

let icon = document.getElementById('nav-icon');
icon.addEventListener('click', function openMenu() {

    let menu = document.getElementsByClassName('block__menu')[0];
    icon.classList.toggle('open');
    menu.classList.toggle('close_menu');

});

/*      Converter      */

let payment = document.getElementById('myOwnValue');
let usd = document.getElementById('usdRatesFrom');
let eur = document.getElementById('eurRatesFrom');
let rur = document.getElementById('rurRatesFrom');
let btc = document.getElementById('btcRatesFrom');
let divUSD = document.getElementById('USD');
let counter = document.getElementById('countValue');
let fromRates = document.getElementById("ratesFrom"),
    res = document.getElementById('resultOfRates');

counter.onclick = clickButton;
payment.addEventListener('keyup', countValue);

function countValue() {
    if (event.keyCode == 13) {
        if (fromRates.value == usd.value) {
            res.innerText = payment.value * USD.innerText;

        } else if (fromRates.value == rur.value) {
            res.innerText = payment.value * RUR.innerText;

        } else if (fromRates.value == eur.value) {
            res.innerText = payment.value * EUR.innerText;

        } else if (fromRates.value == btc.value) {
            res.innerText = USD.innerText * BTC.innerText;
        }

    }
}

function clickButton() {
    if (fromRates.value == usd.value) {
        res.innerText = payment.value * USD.innerText;

    } else if (fromRates.value == rur.value) {
        res.innerText = payment.value * RUR.innerText;

    } else if (fromRates.value == eur.value) {
        res.innerText = payment.value * EUR.innerText;

    } else if (fromRates.value == btc.value) {
        res.innerText = USD.innerText * BTC.innerText;
    }
}

/*   Owl_carousels   */

$(document).ready(function() {
    $(".slider-big").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            },
            600: {
                items: 1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            },
            1080: {
                items: 1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            },
            1240: {
                items: 1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            }
        }

    });
});


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

/*  Diagrams   */


Chart.defaults.global.defaultFontColor = "#3E2723";
Chart.defaults.global.defaultFontFamily = 'no_name_37_Light';
Chart.defaults.global.defaultFontSize = 16;

let diagrSkills = document.getElementById('diagram_skills');

let mySkillsChart = new Chart(diagrSkills, {
    type: "bar",
    data: {
        labels: ["HTML", "CSS", "SCSS/SASS", "PUG", "Webpack", "Vue.js", "Bootstrap", "JavaScript", "jQuery", "GitHub"],
        datasets: [{
                label: ["My skill level"],
                data: [65, 65, 60, 60, 40, 40, 45, 55, 50, 60],
                backgroundColor: "rgb(10, 141, 143)",
                borderColor: "#000",
                borderWidth: 0.5,
            },
            {
                label: ["Goal"],
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderColor: "#000",
                borderWidth: 0.5,
            }
        ],

    },
    options: {
        legend: {
            labels: {
                fontColor: 'rgb(0, 0, 0)',

            },
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'My skill level and goals',
            fontColor: "rgb(0, 0, 0)",
            fontSize: 24,
            lineHeight: 5
        },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});