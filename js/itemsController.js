class ItemsController{
    constructor(currentId = 0){
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, description, img, price, createdAt){
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,            
            price: price,
            createdAt: createdAt

        }
        this.items.push(item);
        this.save(name, description, img, price);
        
    }

    loadProductsFromLocalStorage() {

        const storeProducts = localStorage.getItem("products")
        if (storeProducts) {
            const products = JSON.parse(storeProducts)
            for (let i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.items.push(product);
            }
        }


/*         try{
            const response = await fetch("http://localhost:8080/api/items");
            const products = await response.json();
            
            for (let i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.items.push(product);
            }
            
        }catch(e){
            console.log("oh, no " + e.message);
        } */

    }

    save(name, description, imageUrl, price){
        const data = { "name": name,  "description": description, "imageUrl": imageUrl, "price": price};

        fetch('http://localhost:8080/api/items', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    update(id, name, description, imageUrl, price){
        const data = { "name": name,  "description": description, "imageUrl": imageUrl, "price": price};

        fetch('http://localhost:8080/api/items/' + id, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    delete(id){
        

        fetch('http://localhost:8080/api/items/' + id, {
        method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }


}

export {ItemsController};


//testing
// const newItem = new ItemsController();
// newItem.addItem("little shoe","this is a girl shoe","www.google.com/img.jpg","11-12-2022");
// console.log(newItem.items);
// newItem.addItem("little shoe 2","this is a girl shoe 2","www.google.com/img2.jpg","11-12-2022");
// console.log(newItem.items);