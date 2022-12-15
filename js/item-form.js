import { ItemsController } from "./itemsController.js";
const itemsController = new ItemsController(0);

const newProductForm = document.getElementById("newProductForm");
const updateProductForm = document.getElementById("updateProductForm");
const deleteProductForm = document.getElementById("deleteProductForm");

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

updateProductForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const idElementToUpdate = document.getElementById("idToUpdate");
    const nameElementToUpdate = document.getElementById("nameToUpdate");
    const descriptionElementToUpdate = document.getElementById("descriptionToUpdate");
    const imageElementToUpdate = document.getElementById("imageToUpdate");
    const priceElementToUpdate = document.getElementById("priceToUpdate");
    const dateElementToUpdate = document.getElementById("dateToUpdate");

    const id = idElementToUpdate.value.trim();
    const name = nameElementToUpdate.value.trim();
    const description = descriptionElementToUpdate.value.trim();
    const image = imageElementToUpdate.value.trim();
    const price = priceElementToUpdate.value.trim();
    const date = dateElementToUpdate.value.trim();

    //form validation
    if (id === "" | name === "" || description === "" || image === "" || date === ""){
        alert("Input can not be all whitespace, please try again");
        return;
    }else if (isNaN(price)){
        alert("Price must be a number, please try again.");
        return;
    }

    

    itemsController.update(id, name, description, image, price, date);

    idElementToUpdate.value = "";
    nameElementToUpdate.value = "";
    descriptionElementToUpdate.value = "";
    imageElementToUpdate.value = "";
    priceElementToUpdate.value = "";
    dateElementToUpdate.value = "";


    // const addProductToLocalStorage = 
    //     {
    //         'name': name,
    //         'img': image,
    //         'description': description,
    //         'price': '$' + price,
    //         'createdAt': date
    //     }
    

    // let products = JSON.parse(localStorage.getItem('products')) || [];
    // products.push(addProductToLocalStorage);
    // localStorage.setItem("products", JSON.stringify(products));

});

deleteProductForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const idToDelete = document.getElementById("idToDelete");


    const id = idToDelete.value.trim();
 

    //form validation
    if (id === ""){
        alert("ID can not be all whitespace, please try again");
        return;
    }

    

    itemsController.delete(id);

    idToDelete.value = "";
 


});





