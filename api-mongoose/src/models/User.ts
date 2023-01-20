import { Schema, model, Model, connection } from "mongoose";

type UserType = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    }
    age: number,
    email: string,
    interesses: [string]
}

const schema = new Schema<UserType>({
   name: {
        firstName:  { type: String, required: true },
        lastName: String
   },
   age: Number,
   email: {
    type: String,
    required: true
   },
   interesses: [String]

});


const modelName: string = 'names';

// se tiver usa se não cria  \/

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType> : model<UserType>(modelName, schema);