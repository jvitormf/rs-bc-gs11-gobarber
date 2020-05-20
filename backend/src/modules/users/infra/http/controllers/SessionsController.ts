import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SessionUserService from '@modules/users/services/SessionUserService';

export default class SesssionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(SessionUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  }
}
