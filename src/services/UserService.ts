
import User from '../models/UserModel';

export class UserService {
  async getUsers(): Promise<any> {
    const usersList = await User.find().lean();
    return usersList;
  }

  async createUser(user: any): Promise<void> {
    await User.create(user);
  }
}