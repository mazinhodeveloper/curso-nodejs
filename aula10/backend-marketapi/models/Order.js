const mongoose = require('mongoose'); 

const orderSchema = new mongoose.Schema({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref:  'user' }, 
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }], 
    total: Number, 
    date: { type: Date, default: Date.now } 
}); 

module.exports = mongoose.mongoose.model('order', orderSchema); 
