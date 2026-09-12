const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = this.value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card");

    products.forEach(function (product) {

        const productName =
            product.querySelector("h3")?.textContent.toLowerCase() || "";

        const productDescription =
            product.querySelector(".product-description")?.textContent.toLowerCase() || "";

        if (
            productName.includes(searchText) ||
            productDescription.includes(searchText)
        ) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

});
