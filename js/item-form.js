import { ItemsController } from "./itemsController.js";
const itemsController = new ItemsController(0);

const newProductForm = document.getElementById("newProductForm");

newProductForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");
    const imageElement = document.getElementById("image");
    const priceElement = document.getElementById("price");
    const dateElement = document.getElementById("date");

    const name = nameElement.value.trim();
    const description = descriptionElement.value.trim();
    const image = imageElement.value.trim();
    const price = priceElement.value.trim();
    const date = dateElement.value.trim();

    //form validation
    if (name === "" || description === "" || image === "" || date === ""){
        alert("Input can not be all whitespace, please try again");
        return;
    }else if (isNaN(price)){
        alert("Price must be a number, please try again.");
        return;
    }


    itemsController.addItem(name, description, image, price, date);

    nameElement.value = "";
    descriptionElement.value = "";
    imageElement.value = "";
    priceElement.value = "";
    dateElement.value = "";


    const addProductToLocalStorage = 
        {
            'name': name,
            'img': image,
            'description': description,
            'price': '$' + price,
            'createdAt': date
        }
    

    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(addProductToLocalStorage);
    localStorage.setItem("products", JSON.stringify(products));

});




