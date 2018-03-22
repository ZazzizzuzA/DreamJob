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

/*      Convector      */

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
            cost.value = USD.innerText * BTC.innerText;
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
        cost.value = USD.innerText * BTC.innerText;
    }
}

/*   Owl_carousels   */

$(document).ready(function() {
    $(".slider-big").owlCarousel({
        items: 1,
        dots: true,
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

Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.global.defaultFontColor = "#3E2723";

let diagrSkills = document.getElementById('diagram_skills');

let mySkillsChart = new Chart(diagrSkills, {
    type: "radar",
    data: {
        labels: ["HTML", "CSS", "SCSS/SASS", "PUG", "Webpack", "Vue.js", "Bootstrap", "JavaScript", "jQuery", "GitHub"],
        datasets: [{
            label: ["Уровень навыка"],
            data: [80, 80, 70, 80, 50, 60, 40, 60, 50, 80],
            backgroundColor: "rgba(224, 131, 60, 0.5)",
            borderColor: "#001dff60",
            pointRadius: 5,
            pointBackgroundColor: "rgba(0, 14, 175, 0.5)",

        }],

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
            text: 'Приблизительный уровень навыков',
            fontColor: "rgb(0, 0, 0)",
            fontSize: 20,
            fontFamily: 'Cormorant',
        },
    }
});
let chartBar = document.getElementById('chartBar');
new Chart(chartBar, {
    type: "line",
    data: {
        labels: ["Ноябрь 2016", "Декабрь 2016", "Январь 2017", "Февраль 2017", "Март 2017", "Апрель 2017", "Май 2017", "Июнь 2017", "Июль 2017", "Август 2017", "Сентябрь 2017", "Октябрь 2017", "Ноябрь 2017", "Декабрь 2017", "Январь 2018", "Февраль 2018", "Март 2018"],
        datasets: [{
            label: "Уровень навык",
            backgroundColor: "rgba(212, 79, 242, 0.6)",
            data: [0, 10, 10, 10, 13, 20, 25, 27, 27, 30, 35, 45, 45, 50, 53, 65, 70],
            pointRadius: 3,
            pointBackgroundColor: "rgba(91, 167, 229, 0.5)",
            tension: 0.2,
            borderColor: "rgba(32, 0, 214, 0.6)",
            borderWidth: 5,

        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(0, 0, 0)'
            },
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Прогресс роста с начала изучения',
            fontColor: "rgb(0, 0, 0)",
            fontSize: 20,
            fontFamily: 'Cormorant',
        },
    }
});


