<template>
<b-container fluid>
<br/>
<h2><b>{{msg}}</b></h2>
<br/>
<b-row flu v-for="sector in sectors" :key="sector.id" class="sector">
    <b-col>
        <h3>{{sector.name}}</h3>
        <room></room>
        <b-row no-gutters>
        <b-col v-for="room in sector.rooms" v-bind:key="room.id" class="patient h-100" md="auto">
          <room-preview :sector="sector.name" :room="room" :signalConf="signalConf"></room-preview>            
        </b-col>
        </b-row>
    </b-col>
</b-row>
</b-container>
</template>

<script>
import moment from "moment";
import Room from "@/components/Room";
import Navbar from "@/components/Navbar";
import RoomPreview from "./RoomPreview.vue";
moment.locale("fr");
export default {
  name: "Rooms",
  components: {
    navbar: Navbar,
    roomPreview: RoomPreview
  },
  data() {
    return {
      msg: "Réanimation chirurgicale - Hopital Bicêtre",
      protocoles: "a",
      options: [
        { value: "a", text: "Choisssez le protocole" },
        { value: "b", text: "Autorégulation cérébrale" },
        { value: "c", text: "CAPLEAK" }
      ],
      sectors: [
        {
          name: "Hégoa",
          rooms: [
            {
              name: "A1",
              occupied: true,
              available_signals: ["ecg", "hr", "abp", "airflow"],
              patient: {
                firstname: "John",
                lastname: "Smith",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-02-17T03:24:00"),
                admit_cause: "Trauma cranien"
              }
            },
            {
              name: "A2",
              occupied: true,
              available_signals: ["ecg", "hr", "c4_a1", "icp", "pbto2"],
              patient: {
                firstname: "Ethan",
                lastname: "Hunt",
                birthdate: new Date("1975-04-23T18:36:00"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "Hémorragie méningée"
              }
            },
            {
              name: "A3",
              occupied: false,
              available_signals: ["ecg", "abp", "sp02", "pleth"],
              patient: {
                firstname: "Chew",
                lastname: "Bacca",
                birthdate: new Date("1975-04-23T18:36:00"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "Narcolepsie aigüe"
              }
            },
            {
              name: "A4",
              occupied: true,
              available_signals: ["ecg", "abp", "sp02", "pleth"],
              patient: {
                firstname: "Chew",
                lastname: "Bacca",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "Narcolepsie aigüe"
              }
            },
            {
              name: "A5",
              occupied: true,
              available_signals: ["ecg", "abp", "sp02", "pleth"],
              patient: {
                firstname: "John",
                lastname: "Snow",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "S'est anesthésié"
              }
            }
          ]
        },
        {
          name: "Sirroco",
          rooms: [
            {
              name: "B1",
              occupied: true,
              available_signals: ["ecg", "hr", "abp", "airflow"],
              patient: {
                firstname: "John",
                lastname: "Smith",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-02-17T03:24:00"),
                admit_cause: "Trauma cranien"
              }
            },
            {
              name: "B2",
              occupied: true,
              available_signals: ["ecg", "hr", "c4_a1", "icp", "pbto2"],
              patient: {
                firstname: "Ethan",
                lastname: "Hunt",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "Debris dans les poumons"
              }
            },
            {
              name: "B3",
              occupied: true,
              available_signals: ["ecg", "abp", "sp02", "pleth"],
              patient: {
                firstname: "Chew",
                lastname: "Bacca",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "Narcolepsie aigüe"
              }
            },
            {
              name: "B4",
              occupied: true,
              available_signals: ["ecg", "abp", "sp02", "pleth"],
              patient: {
                firstname: "Chew",
                lastname: "Bacca",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "Narcolepsie aigüe"
              }
            },
            {
              name: "B5",
              occupied: false,
              available_signals: ["ecg", "abp", "sp02", "pleth"],
              patient: {
                firstname: "John",
                lastname: "Snow",
                birthdate: new Date("1975-04-23"),
                sex: "H",
                admit_datetime: new Date("2018-03-01T18:36:00"),
                admit_cause: "S'est anesthésié"
              }
            }
          ]
        }
      ],
      signalConf: {
        types: {
          bp: {
            name: "Blood pressure",
            color: "#ED4024"
          },
          co: {
            name: "Cardiac output",
            color: "#000000"
          },
          co2: {
            name: "Carbon dioxide",
            color: "#00abb0"
          },
          ecg: {
            name: "Electrocardiogram",
            color: "#00F900"
          },
          eeg: {
            name: "Electroencephalogram",
            color: "#000000"
          },
          emg: {
            name: "Electromyogram",
            color: "#000000"
          },
          eog: {
            name: "Electrooculogram",
            color: "#000000"
          },
          flow: {
            name: "Air flow",
            color: "#00F6FC"
          },
          hr: {
            name: "Heart rate",
            color: "#b300b3"
          },
          o2: {
            name: "Oxygen",
            color: "#D6DD04"
          },
          pleth: {
            name: "Plethysmogram",
            color: "#000000"
          },
          resp: {
            name: "respiration",
            color: "#000000"
          },
          temp: {
            name: "temperature",
            color: "#000000"
          }
        },
        signals: {
          ecg: {
            name: "Electrocardiogram",
            type: "ecg"
          },
          hr: {
            name: "Heart rate derived from ecg",
            type: "hr"
          },
          hrabp: {
            name: "Heart rate derived from arterial blood pressure",
            type: "hr"
          },
          airflow: {
            name: "Air flow",
            type: "flow"
          },
          sp02: {
            name: "Peripheral oxygen saturation",
            type: "o2"
          },
          pap: {
            name: "Pulmonary arterial pressure",
            type: "bp"
          },
          abp: {
            name: "Arterial blood pressure",
            type: "bp"
          },
          sabp: {
            name: "Systolic arterial blood pressure",
            type: "bp"
          },
          pleth: {
            name: "Plethysmogram",
            type: "pleth"
          },
          icp: {
            name: "Intracranial blood pressure",
            type: "bp"
          },
          pbto2: {
            name: "Brain tissue partial pressure of oxygen",
            type: "bp"
          },
          c3_a2: {
            name: "Electroencephalogram between C3 and A2",
            type: "eeg"
          },
          c3_o1: {
            name: "Electroencephalogram between C3 and O1",
            type: "eeg"
          },
          c4_a1: {
            name: "Electroencephalogram between C4 and A1",
            type: "eeg"
          }
        }
      }
    };
  },
  methods: {
    patientsex: function(value) {
      return (value = str.replace("H", "Homme"));
      return (value = str.replace("F", "Femme"));
    }
  },

  filters: {
    moment: function(value) {
      return moment(value).format("DD/MM/YY");
    },
    sincedays: function(value) {
      return moment().diff(value, "days");
    },
    ageinyears: function(value) {
      return moment(value).fromNow(true);
    }
  }
};
</script>

<style scoped>
.patient-header {
  color: #373a3c;
  width: 100%;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
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
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-right: 1em;
  margin-bottom: 1em;
}
.patient-signals {
  text-align: right;
  text-shadow: -0.5px -0.5px 0.5px #e5e5e5;
}
.patient-signals-header {
  padding-bottom: 0.5rem;
}
</style>
