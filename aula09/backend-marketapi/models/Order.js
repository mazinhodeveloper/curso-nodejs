const mongoose = require('mongoose'); 

const orderSchema = new mongoose.Schema({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref:  'User' }, 
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], 
    total: Number, 
    date: { type: Date, default: Date.now } 
}); 

module.exports = mongoose.mongoose.model('Order', orderSchema); 
