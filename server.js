// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

const reviews = [
    {
        id: 1,
        product: 'Samsung Galaxy S23',
        review: 'An amazing phone with fantastic camera quality!',
        rating: 5,
        image: '610Q2I5Or8L._SL1500_.jpg',
    },
    {
        id: 2,
        product: 'iPhone 14 Pro',
        review: 'Top-notch performance and sleek design.',
        rating: 5,
        image: '61bK6PMOC3L._SX679_.jpg',
    },
    {
        id: 3,
        product: 'Google Pixel 7',
        review: 'Great software experience and excellent photography.',
        rating: 4,
        image: 'Google Pixel 7.webp',
    },
    {
        id: 4,
        product: 'OnePlus 11',
        review: 'Fast charging and a smooth interface.',
        rating: 4,
        image: 'OnePlus 11.jpg',
    },
    {
        id: 5,
        product: 'Xiaomi Mi 13',
        review: 'Value for money with impressive specs.',
        rating: 4,
        image: 'Xiaomi Mi 13.webp',
    },
    {
        id: 6,
        product: 'Sony Xperia 1 IV',
        review: 'Great for multimedia and professional use.',
        rating: 5,
        image: 'Sony Xperia 1 IV.jpg',
    },
    {
        id: 7,
        product: 'Oppo Find N2',
        review: 'Innovative foldable design with solid performance.',
        rating: 5,
        image: 'Oppo Find N2.webp',
    },
    {
        id: 8,
        product: 'Realme GT 2 Pro',
        review: 'Fast performance and good battery life.',
        rating: 4,
        image: 'Realme GT 2 Pro.jpg',
    },
    {
        id: 9,
        product: 'Nokia G50',
        review: 'Affordable option with decent features.',
        rating: 3,
        image: 'Nokia G50.webp',
    },
    {
        id: 10,
        product: 'Motorola Edge 40',
        review: 'Impressive display and battery backup.',
        rating: 4,
        image: 'Motorola Edge 40.jpg',
    },
    {
        id: 11,
        product: 'Vivo X80 Pro',
        review: 'Amazing camera capabilities for photography lovers.',
        rating: 5,
        image: 'Vivo X80 Pro.jpg',
    },
    {
        id: 12,
        product: 'Asus Zenfone 9',
        review: 'Compact design with powerful performance.',
        rating: 4,
        image: 'Asus Zenfone 9.jpg',
    },
];


app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

app.post('/api/reviews', (req, res) => {
    const { product, review, rating, image } = req.body;

  
    const newReview = { id: reviews.length + 1, product, review, rating, image };
    
    
    reviews.push(newReview);
    
    
    res.status(201).json(newReview);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
