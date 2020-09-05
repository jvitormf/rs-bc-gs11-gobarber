import FakeAppointmentsRepository from '@modules/appointments/infra/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 11, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 13, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 15, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 29, 17, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(2020, 4, 30, 10, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'fake-id',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 27, available: true },
        { day: 28, available: true },
        { day: 29, available: false },
        { day: 30, available: true },
      ]),
    );
  });
});
