var shoppingCart = [];

var product = {
    name: "Product Name",
    description: "Description",
    imageName: "Image Name",
    quantity: 1,
    price: 9.99,
    productSubtotal: 0.00
}

function nameMatches(toCheck){}

function addProduct(selectedProduct){
    shoppingCart.push(selectedProduct);
    //document.getElementById()
    document.getElementById("shopping-cart-textbox").multiple=true;
    var cartItem = document.createElement("option");
    cartItem.text = "a thing" + Math.floor(Math.random() * 100);
    document.getElementById("shopping-cart-textbox").options.add(cartItem);

}

function IncrementQuantity(caller)
{
    var qtyBoxNode = caller.parentNode.querySelector("#qtyInputField");//parentNode.getElementById("qtyInputField");
    qtyBoxNode.value++;
    //if (document.getElementById("qtyInputField").value === "") {document.getElementById("qtyInputField").value = 0;}
    //var quantity = parseInt(document.getElementById("qtyInputField").value);
    //document.getElementById("qtyInputField").value = ++quantity;
}

function DecrementQuantity(caller) {
    var qtyBoxNode = caller.parentNode.querySelector("#qtyInputField");
    if (qtyBoxNode.value === "") { qtyBoxNode.value = 0;}
    qtyBoxNode.value--;
    //var quantity = parseInt(qtyBoxNode.value);
    if (qtyBoxNode.value < 0) { qtyBoxNode.value = 0;}
    //document.getElementById("qtyInputField").value = quantity;
}

