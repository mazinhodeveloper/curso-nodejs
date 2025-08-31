const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const authRoutes = require('./routes/authRoutes'); 
const productRoutes = require('./routes/productRoutes'); 
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes'); 

dotenv.config(); 
const app = express(); 
app.use(express.json()); 

app.use('/auth', authRoutes); 
app.use('/products', productRoutes); 
app.use('/categories', categoryRoutes); 
app.use('/orders', orderRoutes); 


// Rota padrão (evita erro "Connot GET /") 
app.get('/', (req, res) => { 
    res.send('API Market está funcionando'); 
}); 

// MongoDB Connection 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => 
        console.log(`Servidor rodando na porta ${process.env.PORT}.`)
    ); 
})
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err)); 
