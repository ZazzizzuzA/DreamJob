import './styles/styles';
import "./modules/demo4";
import navigation from "./modules/menu.vue";
import Vue from "vue";

let menuVue = new Vue({
    el: "#menu",
    template: "<navigation/>",
    components: {
        navigation: navigation
    }
})