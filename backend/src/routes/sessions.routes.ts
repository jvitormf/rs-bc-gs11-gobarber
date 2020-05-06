import { Router } from 'express';

import SessionUserService from '../services/SessionUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new SessionUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  response.json({ user, token });
});

export default sessionsRouter;
