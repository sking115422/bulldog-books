const { Schema, model } = require('mongoose')

const OBJECT_ID = MONGOOSE.Schema.Types.ObjectId;

const bookOrderListSchema = Schema({
    books: [{ type: OBJECT_ID, ref: 'Book' }],
    bookQuantities: [{ type: Number, required: true }],
    order: { type: OBJECT_ID, ref: 'Order' },
    shoppingCart: { type: OBJECT_ID, ref: 'ShoppingCart' }
})
    
module.exports = model('BookOrderList', bookOrderListSchema)