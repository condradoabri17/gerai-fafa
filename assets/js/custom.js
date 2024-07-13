document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("inputMobileSearch");
    const modalSearchInput = document.getElementById("inputModalSearch");
    const productCards = document.querySelectorAll(".card-body a.h3");
    
    const searchProducts = (query) => {
        let found = false;
        productCards.forEach(card => {
            const productName = card.textContent.toLowerCase();
            if (productName.includes(query.toLowerCase())) {
                card.closest('.card').style.border = "2px solid red";
                found = true;
            } else {
                card.closest('.card').style.border = "none";
            }
        });
        if (!found) {
            alert("No products found");
        }
    };

    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchProducts(searchInput.value);
        }
    });

    modalSearchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchProducts(modalSearchInput.value);
        }
    });

    document.querySelector("#templatemo_search form").addEventListener("submit", function(event) {
        event.preventDefault();
        searchProducts(modalSearchInput.value);
    });
});


    function addToCart(productName) {
        alert(productName + " has been added to the cart!");
    }


    // Fungsi untuk menambahkan produk ke keranjang
function addToCart() {
    var product = {
        title: document.getElementById('productTitle').value,
        size: document.getElementById('productSize').value,
        quantity: document.getElementById('productQuantity').value
    };

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart successfully.');
}

// Fungsi untuk melakukan pembelian
function buyNow() {
    var product = {
        title: document.getElementById('productTitle').value,
        size: document.getElementById('productSize').value,
        quantity: document.getElementById('productQuantity').value
    };

    // Simpan informasi pembelian sementara di local storage
    localStorage.setItem('purchase', JSON.stringify(product));

    alert('Purchase completed successfully.');
}


