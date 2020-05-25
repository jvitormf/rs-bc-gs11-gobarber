import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUsersRepository from '@modules/users/infra/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  current_password?: string;
  password?: string;
}

@injectable()
export default class UpdateUserProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    current_password,
    password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!');
    }

    const userEmailAvailable = await this.usersRepository.findByEmail(email);

    if (userEmailAvailable && userEmailAvailable.id !== user.id) {
      throw new AppError('This e-mail is already in use!');
    }

    user.name = name;
    user.email = email;

    if (password && !current_password) {
      throw new AppError(
        'You must type your current password to create a new one!',
      );
    }

    if (password && current_password) {
      const checkPassword = await this.hashProvider.compareHash(
        current_password,
        user.password,
      );

      if (!checkPassword) {
        throw new AppError('You current passaword does not match!');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.update(user);
  }
}
