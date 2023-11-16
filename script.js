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


displayGroceryItems = () => {
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

    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    totalQuantityElement.textContent = `Total Quantity: ${totalQuantity}`;
}

isolateCategory = (category) => {
    groceryItems.innerHTML = '';

    const filteredItems = groceryItems.filter(item => {
        return item.category === category;
    });

    filteredItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price} - ${item.quantity}`;
        filteredItems.appendChild(itemDiv);
    })
}
