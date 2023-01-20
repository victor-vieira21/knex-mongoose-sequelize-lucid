import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeders extends BaseSeeder {
  public static developmentOnly = true

  // public async run(): Promise<void> {
  //   await User.create({
  //     email: 'victordev@dev.com',
  //     password: 'secret',
  //   })
  // }

  public async run(): Promise<void> {
    await User.createMany([
      {
        name: 'Admin',
        email: 'admin@dev.com',
        password: 'secret',
        role: 'admin',
      },
      {
        name: 'Normal',
        email: 'normal@dev.com',
        password: 'secret',
        role: 'normal',
      },
    ])
  }
}
