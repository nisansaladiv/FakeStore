// Get the id from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
let imgProducts:any=document.getElementById('imgP')!as HTMLImageElement;
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

        // Example of accessing other properties of the product
        if (product) {
            const imgProducts = product.image; // Corrected line
            const imgElement = document.getElementById('imgP') as HTMLImageElement;
             imgElement.src = imgProducts;
            console.log(imgProducts); // Log the image URL
            console.log("Product Id:", product.id);
            console.log("Product Name:", product.title);
            console.log("Product Price:", product.price);
            console.log("Product Category:", product.description);
            // You can access other properties of the product here
        } else {
            console.log("Product not found!");
        }
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}

// Get the id from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Call the function to fetch and display product details
getProductDetails(productId);
