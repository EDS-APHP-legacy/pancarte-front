export default {
  sectors: [{
    name: 'Hégoa',
    rooms: [{
      name: 'A1',
      occupied: true,
      available_signals: ['ecg', 'hr', 'abp', 'airflow'],
      patient: {
        firstname: 'John',
        lastname: 'Smith',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-02-17T03:24:00'),
        admit_cause: 'Trauma cranien'
      }
    },
    {
      name: 'A2',
      occupied: true,
      available_signals: ['ecg', 'hr', 'c4_a1', 'icp', 'pbto2'],
      patient: {
        firstname: 'Ethan',
        lastname: 'Hunt',
        birthdate: new Date('1975-04-23T18:36:00'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'Hémorragie méningée'
      }
    },
    {
      name: 'A3',
      occupied: false,
      available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
      patient: {
        firstname: 'Chew',
        lastname: 'Bacca',
        birthdate: new Date('1975-04-23T18:36:00'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'Narcolepsie aigüe'
      }
    },
    {
      name: 'A4',
      occupied: true,
      available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
      patient: {
        firstname: 'Chew',
        lastname: 'Bacca',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'Narcolepsie aigüe'
      }
    },
    {
      name: 'A5',
      occupied: true,
      available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
      patient: {
        firstname: 'John',
        lastname: 'Snow',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'S\'est anesthésié'
      }
    }
    ]
  },
  {
    name: 'Sirroco',
    rooms: [{
      name: 'B1',
      occupied: true,
      available_signals: ['ecg', 'hr', 'abp', 'airflow'],
      patient: {
        firstname: 'John',
        lastname: 'Smith',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-02-17T03:24:00'),
        admit_cause: 'Trauma cranien'
      }
    },
    {
      name: 'B2',
      occupied: true,
      available_signals: ['ecg', 'hr', 'c4_a1', 'icp', 'pbto2'],
      patient: {
        firstname: 'Ethan',
        lastname: 'Hunt',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'Debris dans les poumons'
      }
    },
    {
      name: 'B3',
      occupied: true,
      available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
      patient: {
        firstname: 'Chew',
        lastname: 'Bacca',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'Narcolepsie aigüe'
      }
    },
    {
      name: 'B4',
      occupied: true,
      available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
      patient: {
        firstname: 'Chew',
        lastname: 'Bacca',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'Narcolepsie aigüe'
      }
    },
    {
      name: 'B5',
      occupied: false,
      available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
      patient: {
        firstname: 'John',
        lastname: 'Snow',
        birthdate: new Date('1975-04-23'),
        sex: 'H',
        admit_datetime: new Date('2018-03-01T18:36:00'),
        admit_cause: 'S\'est anesthésié'
      }
    }
    ]
  }
  ]
}
