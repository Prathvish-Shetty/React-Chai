import express from 'express'
const app = express()

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 899.99,
            imageUrl: "https://m.media-amazon.com/images/I/71DozMyPCBL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 2,
            name: "Smartphone",
            price: 499.99,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUMTUMx5VeIwIkt72fVHmKLeBxm6uAiKHZw&s"
        },
        {
            id: 3,
            name: "Headphones",
            price: 79.99,
            imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
        },
        {
            id: 4,
            name: "Smartwatch",
            price: 199.99,
            imageUrl: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1709018625/Croma%20Assets/Wearable/Wearable%20Devices/Images/305115_zlc7ed.png"
        },
        {
            id: 5,
            name: "Keyboard",
            price: 49.99,
            imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=90&crop=false"
        }
    ];
    // http://localhost:3000/api/products?search=laptop
    if(req.query.search){
        const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
        res.send(filterProducts)
        return;
    }
    setTimeout(() => {
        res.json(products)
    }, 3000);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})