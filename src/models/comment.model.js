import mongoose from "mongoose";

const CommentSchema = new Mongoose.Schema({
name: {
type: mongoose.Schema
Types.ObjectId,
ref: 'User'
required: true 
},
comment: {
type: String,
required: true
},
}, {timestamps: true})

export default mongoose.model('Comment' CommentSchema)
