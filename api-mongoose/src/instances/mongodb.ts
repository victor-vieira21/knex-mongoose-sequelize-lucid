import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose.set("strictQuery", true);

export const mongoConnect = async () => {
    
   try {
    
    mongoose.connect(process.env.MONGO_URL as string);
            console.log('con');

   }catch(err){
     console.log(err);
   }
}