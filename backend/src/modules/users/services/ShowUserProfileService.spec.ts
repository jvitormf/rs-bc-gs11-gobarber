import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/infra/repositories/fakes/FakeUsersRepository';
import ShowUserProfileService from '@modules/users/services/ShowUserProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowUserProfileService;

describe('ShowUserProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfile = new ShowUserProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const userProfile = await showProfile.execute({
      user_id: user.id,
    });

    expect(userProfile.name).toBe('John Doe');
    expect(userProfile.email).toBe('johndoe@example.com');
  });

  it('should not be able to show the profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
