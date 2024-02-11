// Get the id from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Use the productId as needed
console.log(productId); 

// Function to find a product by its ID
function findProductById(id, products) {
    return products.find(product => product.id === id);
}

async function getProductDetails(productId) {
    try {
       // Fetch product data from the API
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        
        console.log(products);

        // Find the product with the matching id
        const product = findProductById(parseInt(productId), products);
        let price = parseFloat(product.price);

        // Applying discount based on price
        if (price > 75) {
            price *= 0.9; // 10% discount for prices over $75
        } else if (price > 30) {
            price *= 0.95; // 5% discount for prices over $30
        }

        // Formatting price as USD currency
        let formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
        //let lineThroughClass = price > 30 ? 'line-through' : '';
        let displayStyle = price > 30 ? 'block' : 'none';
        // Example of accessing other properties of the product
        if (product) {
            const imgProducts = product.image;
            const imgElement = document.getElementById('imgP') as HTMLImageElement;
            imgElement.src = imgProducts;
            console.log(imgProducts);

            // Accessing other properties of the product
            const categoryElement = document.getElementById('p-catagary');
            const nameElement = document.getElementById('p-nam');
            const priceElement = document.getElementById('p-price');
            const descriptionElement = document.getElementById('p-description');
            const ratingElement = document.getElementById('p-rating');

            // Setting innerHTML if elements exist
            if (categoryElement) categoryElement.innerHTML = product.category;
      
            if (nameElement) nameElement.innerHTML = product.title;
            if (priceElement) priceElement.innerHTML =  formattedPrice;
            if (descriptionElement) descriptionElement.innerHTML = product.description;
            if (ratingElement) ratingElement.innerHTML = product.rating;
        } else {
            console.log("Product not found!");
        }
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}

// Call the function to fetch and display product details
getProductDetails(productId);
