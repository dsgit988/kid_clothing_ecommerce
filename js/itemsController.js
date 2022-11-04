class ItemsController{
    constructor(currentId = 0){
        this.items = [];
        this.currentId = currentId;
    }

    addItem(name, description, img, createdAt){
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt            
        }
        this.items.push(item);
    }
}


//testing
// const newItem = new ItemsController();
// newItem.addItem("little shoe","this is a girl shoe","www.google.com/img.jpg","11-12-2022");
// console.log(newItem.items);
// newItem.addItem("little shoe 2","this is a girl shoe 2","www.google.com/img2.jpg","11-12-2022");
// console.log(newItem.items);