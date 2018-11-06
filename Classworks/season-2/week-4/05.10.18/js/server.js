const express = require('express');
const app = express();

let id = 0;
let products = [ {name: 'Apple', id: id++, price: 4400}, {name : 'strawbery', id: id++, price:3000}];

app.get('/products', (req, res) => {
    res.send( 
        products.map( product => {
            return `<h2 id="product-${product.name}"
            data-id="${product.id}"
            onclick="window.location.replace('http://localhost:3000/products/${product.id}')">
            ${ product.name}
            </h2>`
        }).join(' ')
    );
})

app.get('/products/:productId', (req, res) => {
    const id = req.params.productId;
    const Product = products.find( prod => prod.id === id );

    
    const response = `
    <a href="http://localhost:3000/products/">Go Back</a>
    <h1>${Product.name}</h1>
    <hr>
    <h2>Price $${Product.price}, id - ${Product.id}</h2>
    `

    res.send(response);
})


app.post('/products/:id/:name/:price', (req, res) => {
    let product = {
        id: req.params.id,
        name:req.params.name,
        price: req.params.price
    }
    products.push(product);
    res.json( { message: "product created", product});
})

app.get('/', (res, send) => {
    res.send('Hello');
})

app.listen(3000);