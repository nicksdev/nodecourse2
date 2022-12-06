const express = require('express');
const app = express();


app.use('/add-product', (req, res, next) => {
   console.log('Log Add Product Route')
   res.send('<h1>Add Product Route</h1>');
});



app.use('/', (req, res, next) => {
   console.log('Log Default Route')
   res.send('<h1>Default Route</h1>');
});


app.listen(3001);


