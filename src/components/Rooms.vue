<template>
<div>
<div v-for="sector in sectors" v-bind:key="sector.id" class="sector container-fluid">
    <h2>{{msg}}</h2>
    <h3>{{sector.name}}</h3>
    <div class="row">
        <div v-for="room in sector.rooms" v-bind:key="room.id" class="patient float-left">
        <router-link :to="{ name: 'room', params: { sector: sector.name, room: room.name } }">
            <div class="row h-100">
                <div class="col-8" style="padding-right: 0px;">
                    <div class="container-fluid patient-header">
                    <p class="patient-header-line">{{ room.name }}</p>
                    <p v-if="room.occupied" class="patient-header-line text-center">{{ room.patient.firstname }} {{ room.patient.lastname }}</p>
                    <p v-else class="patient-header-line text-center">----</p>
                    </div>
                    <div v-if="room.occupied" class="patient-body">
                    <p><i class="far fa-hospital"></i> le {{ room.patient.admit_datetime | ddmmyy }} [J{{ room.patient.admit_datetime | sincedays }}]</p>
                    <p><i class="far fa-clipboard"></i> {{ room.patient.admit_cause }} </p>
                    <i class="far fa-dot-circle"></i>
                    </div>
                </div>
                <div class="col-4" style="padding-left: 0px;">
                <ul class="patient-signals">
                    <div v-if="room.occupied" class="d-flex justify-content-center patient-signals-header" style="color:red;"><i class="fas fa-heartbeat fa-lg"></i></div>
                        <div v-else class="d-flex justify-content-center patient-signals-header" style="color:black;"><i class="fas fa-heartbeat fa-lg"></i></div>
                        <li  v-if="room.occupied" v-for="sig in room.available_signals" v-bind:key="sig.id" :style="{color: signalConf.types[signalConf.signals[sig].type].color}"><i class="fas fa-circle-notch fa-xs fa-spin"></i> {{ sig }}</li>
                        </ul>
                        </div>
                    </div>
        </router-link>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Rooms',
  data () {
    return {
      msg: 'Available rooms',
      sectors: [
          {
              name: 'Hégoa',
              rooms: [
                {
                    name: 'A1',
                    occupied: true,
                    available_signals: ['ecg', 'hr', 'abp', 'airflow'],
                    patient: 
                    {
                        firstname: 'John',
                        lastname: 'Smith',
                        admit_datetime: new Date('2018-02-17T03:24:00'),
                        admit_cause: 'Trauma cranien'
                        }
                },
                {
                    name: 'A2',
                    occupied: true,
                    available_signals: ['ecg', 'hr', 'c4_a1', 'icp', 'pbto2'],
                    patient: 
                    {
                        firstname: 'Ethan',
                        lastname: 'Hunt',
                        admit_datetime: new Date('2018-03-01T18:36:00'),
                        admit_cause: 'Debris dans les poumons'
                        }
                },
                {
                    name: 'A3',
                    occupied: false,
                    available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
                    patient: 
                    {
                        firstname: 'Chew',
                        lastname: 'Bacca',
                        admit_datetime: new Date('2018-03-01T18:36:00'),
                        admit_cause: 'Narcolepsie aigüe'
                    }
                },
                {
                    name: 'A4',
                    occupied: true,
                    available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
                    patient: 
                    {
                        firstname: 'Chew',
                        lastname: 'Bacca',
                        admit_datetime: new Date('2018-03-01T18:36:00'),
                        admit_cause: 'Narcolepsie aigüe'
                    }
                },
                {
                    name: 'A5',
                    occupied: true,
                    available_signals: ['ecg', 'abp', 'sp02', 'pleth'],
                    patient: 
                    {
                        firstname: 'John',
                        lastname: 'Snow',
                        admit_datetime: new Date('2018-03-01T18:36:00'),
                        admit_cause: 'S\'est anesthésié'
                    }
                }
                    ]
            }
                ],
                signalConf: {
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
}

}
}
}
</script>

<style scoped>
    .patient-header {
        color: #373a3c;
        width: 100%;
        margin-bottom: 0;
        background-color: rgba(0,0,0,0.03);
        border-bottom: 1px solid rgba(0,0,0,0.125);
        padding: 0.3rem;
        }
    .patient-header-line {
        font-weight: bold;
        margin-bottom: 0rem;
        }
    .patient-body {
        padding: 0.3rem;
        font-size: 0.8em;
    }
    .patient {
        display: block;
        width: 14rem;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,0.125);
        margin-right: 1em;
        margin-bottom: 1em;
    }
    .patient-signals {
        color: #373a3c;
        min-height: 155px;
        padding: 0.5rem 0.2rem 0.2rem 0.2rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,0.03);
        border-left: 1px solid rgba(0,0,0,0.125);
        list-style-type: none;
        text-shadow: -0.5px -0.5px 0.5px #e5e5e5;
    }
    .patient-signals-header {
        padding-bottom: 0.5rem;
    }
</style>
