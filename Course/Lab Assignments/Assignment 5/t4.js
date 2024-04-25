function calculateBill() {
    let coffeeSelect = document.getElementById("coffeeSelect");
    let dessertSelect = document.getElementById("dessertSelect");
    let order = document.getElementById("order");
    let total = 0;
    let orderText = "";

    for (let option of coffeeSelect.options) {
        if (option.selected) {
            total += parseFloat(option.value);
            orderText += option.text + "\n";
        }
    }

    for (let option of dessertSelect.options) {
        if (option.selected) {
            total += parseFloat(option.value);
            orderText += option.text + "\n";
        }
    }

    orderText += "\nTotal: $" + total.toFixed(2);
    order.value = orderText;
}
