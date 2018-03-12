

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