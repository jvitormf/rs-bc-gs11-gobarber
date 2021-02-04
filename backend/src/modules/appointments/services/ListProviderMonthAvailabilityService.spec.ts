import { addDays, subDays, addMonths } from 'date-fns';
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
    const appointmentDate = addDays(new Date(), 1);

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(8, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(9, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(10, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(11, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(12, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(13, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(14, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(15, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(16, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(17, 0, 0)),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'fake-id',
      user_id: 'fake-id',
      date: new Date(appointmentDate.setHours(18, 0, 0)),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'fake-id',
      year: appointmentDate.getFullYear(),
      month: appointmentDate.getMonth() + 1,
    });

    const tomorrow = appointmentDate.getDate();

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: tomorrow, available: false },
      ]),
    );
  });
});
