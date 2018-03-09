<template lang="pug">
    div
        div#nav-icon.close( @click="openMenu" )
            span
            span
            span
            span
            span
            span
        div.item__exchangeRates
            div
                p <span>{{exchangeRates[51].cc}}</span> : {{exchangeRates[51].rate}}
            div     
                p <span>{{exchangeRates[59].cc}}</span> : {{exchangeRates[59].rate}}
            div
                p <span>{{exchangeRates[3].cc}}</span> : {{exchangeRates[3].rate}}
        transition
            div.block__menu(v-show="show" name="slide")
                ul
                    li(v-for="title in titles") {{title.name}}
    
</template>

<script>
export default {
  data () {
      return {
          titles: [
          {
               name: "Обо мне"
          },
          {
              name: "О работе-мечте"
          },
          {
              name: "Пожелания"
          },
          {
              name: "Требования"
          },
          {
              name: "Мои навыки"
          },
          {
              name: "Контакты"
          },
          ],
          show: false,
          exchangeRates: []
      }
  },
  methods: {
    openMenu: function() {
            let icon = document.getElementById('nav-icon');
            icon.classList.toggle('open');
            this.show = !this.show;
    },
    getExchangeRates: function(url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json") {
        return fetch(url).then( response => response.json() ).then( json => this.exchangeRates = json );
        }
  },
    created: function() {
    this.getExchangeRates()
  },
}
</script>

<style lang="scss">
@import '../styles/_var';
@import '../styles/_reset';

.close {
    width: 30px;
    height: 30px;
    position: fixed;
    left: 25px;
    top: 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    span {
        display: block;
        position: absolute;
        height: 5px;
        width: 50%;
        background: #C6FF00;
        opacity: 1;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
    span:nth-child(even) {
        left: 50%;
        border-radius: 0 9px 9px 0;
    }
    span:nth-child(odd) {
        left: 0px;
        border-radius: 9px 0 0 9px;
    }
    span:nth-child(1),
    span:nth-child(2) {
        top: 0px;
    }
    span:nth-child(3),
    span:nth-child(4) {
        top: 10px;
    }
    span:nth-child(5),
    span:nth-child(6) {
        top: 20px;
    }
}
.open {
    span:nth-child(1),
    span:nth-child(6) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    span:nth-child(2),
    span:nth-child(5) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    span:nth-child(1) {
        left: 2px;
        top: 7px;
    }
    span:nth-child(2) {
        left: calc(50% - 5px);
        top: 7px;
    }
    span:nth-child(3) {
        left: -50%;
        opacity: 0;
    }
    span:nth-child(4) {
        left: 100%;
        opacity: 0;
    }
    span:nth-child(5) {
        left: 2px;
        top: 29px;
    }
    span:nth-child(6) {
        left: calc(50% - 5px);
        top: 29px;
    }
}
.block__menu{
    position: fixed;
    left: 0px;
    top: 120px;
    width: 15%;
    background-color: $bg_light_white;
    color: #1B5E20;
    @include padding(60px, 5px);
    ul{
        text-align: center;
        li{
            font-size: 1.5em;
            @include padding(10px, 0px);
            cursor: pointer;        
        }
    }
}
.v-enter-active{
    transition: all .4s ease-out;
}
.v-leave-active{
    transition: all .4s ease-out;
}
.v-enter, .v-leave-to {
    transform: translateY(calc(-100% - 120px) );
}
.item__exchangeRates{
    box-sizing: border-box;
    width: 30%; 
    border: 1px groove #004D40;
    background-color: #039BE5;
    text-align: center;
    @include padding(0px, 5px);
    margin-left: 80px;
    div{
        display: inline-block;
    }
        p{
            margin: 0px;
            @include padding(5px, 10px);
            span{
                font-weight: 700;
            }
        }
}
</style>


