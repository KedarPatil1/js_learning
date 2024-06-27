const productList= await fetch("https://fakestoreapi.com/products")
const products=await productList.json();

for (const product of products) {
    console.log(`Id: ${product.id},   price: ${product.price}`);
}