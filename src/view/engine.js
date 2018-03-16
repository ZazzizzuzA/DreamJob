export default {
    render: function(data) {
        let exchangeRates = document.getElementsByClassName('item__exchangeRates')[0];

        data.map(el => {
            let box = document.createElement("div");
            let title = document.createElement("h3");
            let buy = document.createElement("p");
            let sale = document.createElement("p");
            let valueSale = document.createElement("span");
            let valueBuy = document.createElement("span");
            valueSale.id = el.ccy;
            title.innerText = el.ccy;
            valueSale.innerText = el.sale;
            valueBuy.innerText = el.buy;
            buy.innerText = "Покупка: ";
            sale.innerText = "Продажа: ";
            box.appendChild(title);
            box.appendChild(buy);
            box.appendChild(sale);
            buy.appendChild(valueBuy);
            sale.appendChild(valueSale);

            return box;
        }).forEach(el => {
            exchangeRates.appendChild(el);
        });
    }
}