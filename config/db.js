import mongoose from "mongoose"

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://huxh7500:Sabika12@cluster0.ygfxh.mongodb.net/proshop?retryWrites=true&w=majority')
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB