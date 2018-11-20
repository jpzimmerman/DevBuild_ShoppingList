var shoppingCart = [];
const SALES_TAX_MI = 0.06;

var product = {
    name: "Product Name",
    description: "Description",
    imageName: "Image Name",
    quantity: 1,
    price: 9.99,
    productSubtotal: 0.00
}

var finalCost = {
    subTotal: 0.00,
    taxTotal: 0.00,
    grandTotal: 0.00
};

function nameMatches(toCheck){}

function GetQuantityValueForNode(caller){
    var qtyBoxNode = caller.parentNode.querySelector("#qtyInputField");
    if (qtyBoxNode.value === "") { qtyBoxNode.value = 0;}
    return parseInt(qtyBoxNode.value, 10);
}
function BuildCartItems(){
    var cartDisplay = [];
    var tmpSubtotal = 0.00;
    for (var i = 0; i < shoppingCart.length; i++)
    {
        shoppingCart[i].productSubtotal = shoppingCart[i].price * shoppingCart[i].quantity;
        tmpSubtotal += shoppingCart[i].productSubtotal;
        var cartItem = document.createElement("option");
    }

    finalCost.subTotal = tmpSubtotal;
    finalCost.taxTotal = (tmpSubtotal * SALES_TAX_MI);
    finalCost.grandTotal = finalCost.subTotal + finalCost.taxTotal;
}

function UpdateTotalsDisplay() {
    document.getElementById("subtotal-display-field").innerText     = "$" + finalCost.subTotal.toFixed(2);
    document.getElementById("tax-display-field").innerText          = "$" + finalCost.taxTotal.toFixed(2);
    document.getElementById("grand-total-display-field").innerText  = "$" + finalCost.grandTotal.toFixed(2);
}

function addProduct(caller, selectedProduct){
    var quantityValue = GetQuantityValueForNode(caller);
    if (quantityValue === 0) {
        alert ("Quantity value of item is at 0. Please add at least one of selected item.")
        return;
    }
    selectedProduct.productSubtotal = selectedProduct.price * quantityValue;
    document.getElementById("shopping-cart-textbox").multiple=true;
    var cartItem = document.createElement("option");
    cartItem.name = selectedProduct.name;
    cartItem.description = selectedProduct.description;
    cartItem.imageName = selectedProduct.imageName;
    cartItem.quantity = quantityValue;
    cartItem.price = selectedProduct.price;
    cartItem.productSubtotal = selectedProduct.productSubtotal;
    cartItem.text = quantityValue + " " + selectedProduct.name + " @ " + selectedProduct.price.toString(10) +  '............' + selectedProduct.productSubtotal.toFixed(2);
    shoppingCart.push(cartItem);
    document.getElementById("shopping-cart-textbox").options.add(cartItem);
    BuildCartItems();
    UpdateTotalsDisplay();
}

function IncrementQuantity(caller)
{
    var qtyBoxNode = caller.parentNode.querySelector("#qtyInputField");
    qtyBoxNode.value++;
}

function DecrementQuantity(caller) {
    var qtyBoxNode = caller.parentNode.querySelector("#qtyInputField");
    if (qtyBoxNode.value === "") { qtyBoxNode.value = 0;}
    qtyBoxNode.value--;
    if (qtyBoxNode.value < 0) { qtyBoxNode.value = 0;}
}

function DisplayCheckoutInfo()
{
    var cartString = "";
    var cartElement = document.getElementById("shopping-cart-textbox").options;

    for (var i = 0; i < cartElement.length; i++)
    {
        cartString += cartElement[i].text + "\n";
    }

    alert("RECEIPT\n" + cartString + "\n\n" + 
            "Subtotal: $" + finalCost.subTotal.toFixed(2) + "\n" +
            "Tax @ " + (SALES_TAX_MI * 100).toFixed(2) + "% : $" + finalCost.taxTotal.toFixed(2) + "\n" +
            "Total: $" + finalCost.grandTotal.toFixed(2));
}
