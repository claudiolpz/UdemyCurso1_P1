import mongoose from "mongoose";

export const connectDB = async () =>  {
    try {

        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(`conectado MongoDB en ${url}`) 

    } catch (error) {
        console.log(error.mensage)
        process.exit(1) // 1 = error, 0 = exit successfully
    }
}