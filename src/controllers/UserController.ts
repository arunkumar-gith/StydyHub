import { JsonController, Get, Post, Body } from 'routing-controllers';
import { UserService } from '../services/UserService';

@JsonController('/users')
export class UserController {
  private userService = new UserService();

  @Get('/')
  async getAllUsers(): Promise<any> {
    return this.userService.getUsers();
  }

  @Post('/')
  async createUser(@Body() user: any): Promise<{ message: string }> {
    await this.userService.createUser(user);
    return { message: 'User created successfully' };
  }
}
