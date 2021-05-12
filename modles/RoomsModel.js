const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const RoomSchema = new Schema({
    id: { type: ObjectId },
    img: { type: String },
    name: { type: String},
    price: { type: String },
    tienich: { type: String },
    date: { type: Date },
    time:  { type: String },
    LoaiPhong: { type: Schema.Types.ObjectId,
         ref: 'Category' },
    
})

module.exports = mongoose.model('Room', 
RoomSchema)