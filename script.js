const groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
];

const groceryList = document.querySelector('#groceryList');

const totalCostElement = document.querySelector('#totalCost');

const totalQuantityElement = document.querySelector('#totalQuantity');


function displayGroceryItems() {
    groceryList.innerHTML = '';

    let totalCost = 0;
    let totalQuantity = 0;

    groceryItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity}`;
        groceryList.appendChild(itemDiv);

        totalCost += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
    totalQuantityElement.textContent = `${totalQuantity}`;
}


function isolateCategory(category) {
    groceryList.innerHTML = '';

    const filteredItems = groceryItems.filter(item => {
        return item.category === category;
    });

    filteredItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity}`;
        groceryList.appendChild(itemDiv);
    });
}


function showAllCategories() {
    return displayGroceryItems();
}


function orderItemsByCost() {
    groceryItems.sort((a, b) => b.price - a.price);
    return displayGroceryItems();
}

function addItemPrompt() {
    const alertInt = alert('Please be sure to enter each input. Thank you!');
    const name = prompt('What is your item? (e.g. Apple, Carrot, Milk, etc.)');
    const category = prompt('What category? (e.g. Fruits, Vegetables, Dairy, etc.)');
    const price = prompt('What is the price? (e.g. 2.00, 3.25, etc.)');
    const quantity = prompt('What is the quantity? (e.g. 1, 2, 3, etc.');

    if (name === '' || category === '' || price === '' || quantity === '') {
        alert('You are missing information. Please add the item again.')
        return; 
    }

    const priceValue = parseFloat(price);

    const quantityValue = parseInt(quantity);

    if (isNaN(priceValue) || isNaN(quantityValue)) {
        alert('Price or Quantity is not an numeric value. Please add again.');
        return;
    }

    const newItem = {
        name: name,
        category: category,
        price: priceValue,
        quantity: quantityValue,
    };

    groceryItems.push(newItem);

    displayGroceryItems();
}

displayGroceryItems();
