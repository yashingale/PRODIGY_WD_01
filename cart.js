document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const product = button.dataset.product;
        const price = button.dataset.price;

        // Add the product to the cart (you can customize this part to your needs)

        // Display the "Added to Cart" notification
        showAddedToCartNotification(product, price);
    }

    function showAddedToCartNotification(product, price) {
        const notification = document.createElement('div');
        notification.classList.add('added-to-cart-notification');
        notification.innerHTML = `
            <p><strong>${product}</strong> added to cart - $${price}</p>
            <a href="cart.html" class="view-cart-btn">View Cart</a>
        `;
        document.body.appendChild(notification);

        // Automatically remove the notification after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});
