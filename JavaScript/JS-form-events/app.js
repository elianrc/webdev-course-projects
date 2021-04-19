const form = document.querySelector('form');

// Listen for the form submission
form.addEventListener("submit", (e) => {
    // prevent the def behavior
    e.preventDefault();
    // grab the values
    const quantity = form.elements.qty;
    const product = form.elements.product;
    //Create <li> element and include the values
    const elem = document.createElement("li");
    elem.innerText = `${quantity.value} ${product.value}`;
    //append the new <li>
    document.querySelector("ul").appendChild(elem);
    // reset the inputs
    quantity.value = "";
    product.value = "";
    
});