// 1. Create a variable to keep track of the number of items in the cart
let cartCount = 0;

// 2. Find ALL the "Add to Cart" buttons on our webpage
const cartButtons = document.querySelectorAll('button');

// 3. Loop through every button we found and tell it what to do when clicked
cartButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        // Increase the cart count by 1
        cartCount = cartCount + 1;
        
        // Pop up a message telling the user it worked!
        alert("Awesome! An item was added to your cart. Total items: " + cartCount);
    });
    
});