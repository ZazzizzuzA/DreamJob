let exchange;
export default exchange = {
    data: [],
    init: function(url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5") {

        return fetch(url).then((response) => response.json())

        .then(json => exchange.data = json)
    }
}