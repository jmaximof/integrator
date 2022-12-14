const path = require('path');
const fs = require('fs');

const pathJson = path.resolve(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(pathJson, 'utf-8');
const products = JSON.parse(productsJson);

let algo = {
    id: 100,
    name: 'Raffi',
    price: 'Invaluable',
    discount: 5,
    category: 'in-sale',
    description: 'Deja que la música dance cobre vida con EXTRA BASS™ Anima el ambiente con EXTRA BASS™1. Un radiador pasivo trabaja con el parlante monoaural para potenciar los tonos bajos y mejorar los graves, a pesar del tamaño compacto. ',
    image: 'img-parlante-sony.jpg'
}


let controller = {
    detail: (req, res) => {
        // obtenemos el id del producto
        let product = products.find(product => {
            return product.id == req.params.id;
        });

        res.render('products/detail', { producto: product });
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: (req, res) => {
        res.render('products/edit');
    }
}

module.exports = controller;












// products.push(algo)
//         let jsonProducts = JSON.stringify(products)

//         fs.writeFileSync(pathJson, jsonProducts, null, 4)

//         res.render('detail');