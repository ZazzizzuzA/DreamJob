<!-- <template lang="pug">
    div.skills_item
        div#filters
            button(data-filter="*" ) Показать все
            button(data-filter=".html") Верстка
            button(data-filter=".js" ) Программирование
        div.grid
            div.skills_item_frame.grid-item( v-for="skill in skills" v-bind:class="skill.class")
                div.skill_image_box
                    img.skill_image( v-bind:src="skill.imgSrc" )
                div.skill_text {{skill.title}}

</template>

<script>
import Isotope from "isotope-layout";

export default {
    data() {
        return {
            skills: [
                {
                    title: "HTML & CSS",
                    imgSrc: "./assets/images/htmlCSS.png",
                    class: "html"
                },
                {
                    title: "Scss",
                    imgSrc: "./assets/images/scss.png",
                    class: "html"
                    
                },
                {
                    title: "JavaScript",
                    imgSrc: "./assets/images/js.png",
                    class: "js"
                    
                },
                {
                    title: "jQuery",
                    imgSrc: "./assets/images/jquery.png",
                    class: "js"
                    
                },
                {
                    title: "Vue.js",
                    imgSrc: "./assets/images/vue.png",
                    class: "js"                  
                },
                {
                    title: "BEM",
                    imgSrc: "./assets/images/bem.png",
                    class: "html"
                },
                {
                    title: "Node.js",
                    imgSrc: "./assets/images/node.png",
                    class: "js"                    
                },
                {
                    title: "GitHub",
                    imgSrc: "./assets/images/git.png",
                    class: "js"                    
                },
                {
                    title: "Webpack",
                    imgSrc: "./assets/images/Webpack.png",
                    class: "js"                    
                },
                {
                    title: "NPM",
                    imgSrc: "./assets/images/npm.png",
                    class: "js"                    
                },
                {
                    title: "Pug",
                    imgSrc: "./assets/images/Pug.jpg",
                    class: "html"                    
                },
                {
                    title: "Ajax",
                    imgSrc: "./assets/images/ajax.png",
                    class: "js"                
                },
            ]
        }
    },
    mounted: () => {

            var elem = document.querySelector('.grid');       
            
            var iso = new Isotope(elem, {
                itemSelector: '.grid-item',
                layoutMode: 'fitRows',
                filter: "*",
            });
            let butAll = document.getElementById("filters");
            let button = Array.from(butAll.getElementsByTagName("button"));
            button.forEach((item) => {
                item.onclick = () => {

                    let data = item.getAttribute("data-filter");
                    iso.arrange({
                        filter: data
                    })
                }
            })
        }
}
</script>

<style lang="scss">
@import '../styles/_var';
@import '../styles/_reset';

    .skills_item {
        height: 600px;
        width: 100%;
        @include padding(15px, 10px);
        background: $bg_light_green;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: row wrap;
        .grid{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-flow: row wrap;            
        }
        .skills_item_frame{
            width: 23%;
            text-align: center;
            @include margin(5px, 10px);
            .skill_image_box{
                border-radius: 5px 5px 0px 0px;
                background-color: blueviolet;
                @include padding(25px, 10px);
                img{
                height: 100px;
                }
            }
            .skill_text{
                border-radius: 0px 0px 5px 5px;
                background-color: $first_white;
                @include padding(5px, 0px);
            }

        }
    }
#filters{
    width: 100%;
    text-align: center;
}

</style>


 -->