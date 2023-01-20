import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        // get() {
        //     const raw = this.getDataValue('name');
        //     return raw.toUpperCase();                  // transforma todos os nomes que virão do banco em maiusculo
        // }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        // set(value: number){
        //     if(value < 18){             // transforma todos os ages menores que 18 que irão para o banco como 18
        //       value = 18;
        //     }
        //     this.setDataValue('age', value)
        // }
    }
    // firstLetterOfName: {
    //     type: DataTypes.VIRTUAL,        /// campo virtual: campo criado no projeto com dado que não possuí 
    //                                        no banco, para usar no projeto, nesse caso, a consulta no bd 
    //    get() {                                              iria vir com esse campo virtual (firstLette...)
    //         let name: string = this.getDataValue('name');
    //         return name.charAt(0);
    //     }
    // }                 //dps ele fez um exemplo pegando first name e last name e transformou em fullName
},
    {
        tableName: 'users',
        timestamps: false
    }

);