document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product-card");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", function () {

        const searchText = this.value
            .trim()
            .toLowerCase();

        products.forEach(function (product) {

            const productText = product
                .textContent
                .toLowerCase();

            if (productText.includes(searchText)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

    });

});
