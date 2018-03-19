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
Chart.defaults.scale.ticks.beginAtZero = true;

let diagrSkills = document.getElementById('diagram_skills');
let mySkillsChart = new Chart(diagrSkills, {
    type: "radar",
    data: {
        labels: ["HTML", "CSS", "SCSS/SASS", "PUG", "Webpack", "Vue.js", "Bootstrap", "JavaScript", "jQuery", "GitHub"],
        datasets: [{
            label: ["Уровень навыка"],
            data: [80, 80, 70, 80, 50, 60, 40, 60, 50, 80],
            backgroundColor: "rgba(221, 255, 0, 0.3)",
            borderColor: "#001dff60",
        }]
    }
})