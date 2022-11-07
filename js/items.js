import { ItemsController } from "./itemsController.js";
const itemsController = new ItemsController(0);


function addItemCard(item) {
    const itemHTML = `<div class="col col-12 col-md-6 col-xl-4">
                        <div class="card product mb-5 mx-1">
                            <img src="${item.img}" class="card-img-top img-fluid" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-danger">${item.price}</h5>
                                <p class="card-text">${item.description}</p>
                                <div class="text-center mt-5">
                                    <a href="#" class="btn btn-warning">Add to Card</a>
                                </div>
                                </div>
                        </div>
                    </div>`;


    const productsContainer = document.getElementById("list-items");
    productsContainer.innerHTML += itemHTML;
}


function loadSampleProducts() {
    if(!localStorage.getItem("products")){
        const sampleProducts = [
            {
                'name': 'girl clothes',
                'img': './img/products/pic10.jpg',
                'description': 'Mommy And Me Plaid Dress',
                'price': '$29',
                'createdAt': '11-4-2022'
            },
            {
                'name': 'girl clothes',
                'img': './img/products/pic11.jpg',
                'description': 'Boys Corduroy Pants',
                'price': '$19',
                'createdAt': '11-4-2022'
            },
            {
                'name': 'girl clothes',
                'img': './img/products/pic12.jpg',
                'description': 'Plaid Oxford Button Down Shirt',
                'price': '$39',
                'createdAt': '11-4-2022'
            },
    
        ];
    
        localStorage.setItem("products", JSON.stringify(sampleProducts));
    }



}

function loadCardsListFromItemsController() {
    for (var i = 0, size = itemsController.items.length; i < size; i++) {
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

loadSampleProducts();
itemsController.loadProductsFromLocalStorage();
loadCardsListFromItemsController();





//testing
// itemsController.addItem("shoe", "this is a bag1", "./img/home/boysale.jpeg", "$10", "11-20-2022");
// itemsController.addItem("shoe", "this is a bag2", "./img/home/boysale.jpeg", "$10", "11-20-2022");
// itemsController.addItem("shoe", "this is a bag3", "./img/home/boysale.jpeg", "$10", "11-20-2022");
// itemsController.addItem("shoe", "this is a bag4", "./img/home/boysale.jpeg", "$10", "11-20-2022");

// addItemCard(itemsController.items[0]);
// addItemCard(itemsController.items[1]);
// addItemCard(itemsController.items[2]);
// addItemCard(itemsController.items[3]);

