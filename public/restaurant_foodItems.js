document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get('restaurantId');
    let foodItems = [];

    if (restaurantId === '1') {
        foodItems = [
            {
                name: 'Classic Chocolate Brownie',
                image: 'images/Brownie.jpg',
                description: 'Delicious Brownie.',
                price: 200
            },
            {
                name: 'Pizza',
                image: 'images/Pizza 1.jpg',
                description: 'Classic pizza with your favorite toppings.',
                price: 129
            },
            {
                name: 'Grill Chicken',
                image: 'images/Grill Chicken.jpg',
                description: 'Delecious Briyani.',
                price: 390
            },
            {
                name: 'French Fries',
                image: 'images/French-Fries.jpg',
                description: 'Snacks Reciepes.',
                price: 99
            }
            // Add more food items as needed
        ];
    } else if (restaurantId === '2') {
        foodItems = [
            {
                name: 'Chicken Briyani',
                image: 'images/Chicken briyani.jpeg',
                description: 'Authentic Briyani.',
                price: 8.99
            },
            {
                name: 'Mutton Briyani',
                image: 'images/Mutton briyani.jpg',
                description: 'Chettinad Special.',
                price: 299
            },
            {
                name: 'Hyderabad Briyani',
                image: 'images/Hyderabad Briyani.jpg',
                description: 'Hyderabad Special.',
                price: 199
            },
            {
                name: 'Mandhi',
                image: 'images/Mandhi.avif',
                description: 'Authentic Style.',
                price: 290
            }
        ];
    } else if (restaurantId === '3') {
        foodItems = [
            {
                name: 'Pongal',
                image: 'images/Pongal.jpg',
                description: 'Authentic pongal.',
                price: 49
            },
            {
                name: 'Chettinad Chicken Curry',
                image: 'images/Chettinad Chicken Curry.jpg',
                description: 'Chettinad Special.',
                price: 169
            },
            {
                name: 'Pepper Chicken',
                image: 'images/Pepper Chicken.jpg',
                description: 'Authentic Style.',
                price: 129
            },
            {
                name: 'Payasam',
                image: 'images/Payasam.jpg',
                description: 'Classic Pyasam.',
                price: 69
            }
        ];
    } else if (restaurantId === '4') {
        foodItems = [
            {
                name: 'Burger',
                image: 'images/blog-1.jpg',
                description: 'Delicious burger with juicy patty.',
                price: 8.99
            },
            {
                name: 'Loaded Nachos',
                image: 'images/Loaded Nachos.webp',
                description: 'Enjoying with your favorite toppings.',
                price: 149
            },
            {
                name: 'Iced Teas',
                image: 'images/Iced Teas.jpg',
                description: 'Classic Bytes.',
                price: 99
            },
            {
                name: 'Cheesecake Bites',
                image: 'images/Cheesecake Bites.jpg',
                description: 'Cheese Bites.',
                price: 99
            }
        ];
    }


    // Display food items on the page
    const foodListContainer = document.getElementById('foodList');

    foodItems.forEach(foodItem => {
        const foodItemElement = document.createElement('div');
        foodItemElement.classList.add('food-item');

        const imgElement = document.createElement('img');
        imgElement.src = foodItem.image;
        imgElement.alt = foodItem.name;

        const detailsElement = document.createElement('div');
        detailsElement.classList.add('food-details');

        const nameElement = document.createElement('h2');
        nameElement.textContent = foodItem.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = foodItem.description;

        const priceElement = document.createElement('p');
        priceElement.textContent = `₹${foodItem.price.toFixed(2)}`;

        const orderButton = document.createElement('button');
        orderButton.classList.add('btn-order');
        orderButton.textContent = 'Order Now';

        detailsElement.appendChild(nameElement);
        detailsElement.appendChild(descriptionElement);
        detailsElement.appendChild(priceElement);
        detailsElement.appendChild(orderButton);

        foodItemElement.appendChild(imgElement);
        foodItemElement.appendChild(detailsElement);

        foodListContainer.appendChild(foodItemElement);
    });
});
