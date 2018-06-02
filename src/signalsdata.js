export default {
  signalConf: [{
    types: {
      bp: {
        name: 'Blood pressure',
        color: '#ED4024'
      },
      co: {
        name: 'Cardiac output',
        color: '#000000'
      },
      co2: {
        name: 'Carbon dioxide',
        color: '#00abb0'
      },
      ecg: {
        name: 'Electrocardiogram',
        color: '#00F900'
      },
      eeg: {
        name: 'Electroencephalogram',
        color: '#000000'
      },
      emg: {
        name: 'Electromyogram',
        color: '#000000'
      },
      eog: {
        name: 'Electrooculogram',
        color: '#000000'
      },
      flow: {
        name: 'Air flow',
        color: '#00F6FC'
      },
      hr: {
        name: 'Heart rate',
        color: '#b300b3'
      },
      o2: {
        name: 'Oxygen',
        color: '#D6DD04'
      },
      pleth: {
        name: 'Plethysmogram',
        color: '#000000'
      },
      resp: {
        name: 'respiration',
        color: '#000000'
      },
      temp: {
        name: 'temperature',
        color: '#000000'
      }
    },
    signals: {
      ecg: {
        name: 'Electrocardiogram',
        type: 'ecg'
      },
      hr: {
        name: 'Heart rate derived from ecg',
        type: 'hr'
      },
      hrabp: {
        name: 'Heart rate derived from arterial blood pressure',
        type: 'hr'
      },
      airflow: {
        name: 'Air flow',
        type: 'flow'
      },
      sp02: {
        name: 'Peripheral oxygen saturation',
        type: 'o2'
      },
      pap: {
        name: 'Pulmonary arterial pressure',
        type: 'bp'
      },
      abp: {
        name: 'Arterial blood pressure',
        type: 'bp'
      },
      sabp: {
        name: 'Systolic arterial blood pressure',
        type: 'bp'
      },
      pleth: {
        name: 'Plethysmogram',
        type: 'pleth'
      },
      icp: {
        name: 'Intracranial blood pressure',
        type: 'bp'
      },
      pbto2: {
        name: 'Brain tissue partial pressure of oxygen',
        type: 'bp'
      },
      c3_a2: {
        name: 'Electroencephalogram between C3 and A2',
        type: 'eeg'
      },
      c3_o1: {
        name: 'Electroencephalogram between C3 and O1',
        type: 'eeg'
      },
      c4_a1: {
        name: 'Electroencephalogram between C4 and A1',
        type: 'eeg'
      }
    }
  }]
}
