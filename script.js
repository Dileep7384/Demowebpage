// Cart functionality
let cart = [];

function addToCart(productId) {
    // Dummy products
    const products = [
        { id: 1, name: "Product 1", price: 25 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 40 }
    ];
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length;
}

// Profile modal
document.getElementById("profile-btn").addEventListener("click", () => {
    document.getElementById("profile-modal").style.display = "flex";
});

function closeProfileModal() {
    document.getElementById("profile-modal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target === document.getElementById("profile-modal")) {
        closeProfileModal();
    }
}
