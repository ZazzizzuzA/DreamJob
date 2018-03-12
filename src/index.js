import './styles/styles';
import "./modules/demo4";
import navigation from "./modules/menu.vue";
// import abilities from "./modules/isotope.js";
import Vue from "vue";


let menuVue = new Vue({
    el: "#menu",
    template: "<navigation/>",
    components: {
        navigation: navigation
    }
});
// let isotopeVue = new Vue({
//     el: "#skills",
//     template: "<abilities/>",
//     components: {
//         abilities: abilities
//     }
// })