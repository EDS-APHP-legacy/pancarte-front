<template>
<b-card style="max-width: 20rem;" border-variant="primary" header-border-variant="primary" header-text-variant="white" align="center">
                <div slot="header">
                    <router-link :to="{ name: 'Room', params: { sector: sector, room: room.name } }">
                    <h5><b>{{ room.name }}</b> - {{ room.patient.firstname }} {{ room.patient.lastname }} 
                    <br/> {{ room.patient.sex | patientsex }} - {{ room.patient.birthdate | ageinyears }}</h5>
                    </router-link>
                </div>
                <b-card-body>
                    <b-row no-gutters>
                    <b-col cols="6" class="w-75">
                        <p><i class="far fa-hospital"></i> <b>Admission le</b>  {{ room.patient.admit_datetime | moment}} (J{{ room.patient.admit_datetime | sincedays }})</p>
                        <p><i class="far fa-clipboard"></i><b> Motif</b><br> {{ room.patient.admit_cause }} </p>
                    </b-col>
                    <b-col cols="6">
                        <ul>
                            <b-row v-if="room.occupied" style="color:red"><b-col class="fas fa-heartbeat fa-lg"></b-col></b-row>
                            <b-row v-else style="color:black"><b-col class="fas fa-heartbeat fa-lg"></b-col></b-row>
                                <b-row  v-if="room.occupied" v-for="sig in room.available_signals" v-bind:key="sig.id" :style="{color: signalConf.types[signalConf.signals[sig].type].color}">
                                    <b-col class="fas fa-xs fa-spin"></b-col><b-col class="patient-signals">{{ sig }}</b-col>
                                </b-row>
                        </ul>
                    </b-col>
                    </b-row>
                    <b-row v-if="room.occupied">
                        <b-col cols="6">
                            <b-btn v-b-modal="'modal' + room.name + 'E'" variant="outline-danger">Enregistrement</b-btn>
                        </b-col>
                        <b-col cols="6">
                            <b-btn v-b-modal="'modal' + room.name + 'A'" variant="outline-success">Note</b-btn>
                        </b-col>
                    </b-row>
                    <b-row v-else>
                        <b-col>
                            <b-btn disabled variant="outline">Enregistrement</b-btn>
                        </b-col>
                        <b-col>
                            <b-btn disabled variant="outline">Note</b-btn>
                        </b-col>
                    </b-row>
                        <b-modal :id="'modal' + room.name + 'E'">
                            <div slot="modal-header"><h4><b>Enregistrement</b></h4></div>
                            <b-form-group>
                            <h5><b>Protocole</b></h5>
                            <b-btn-group>
                                <b-btn v-b-toggle.noprotocol variant="outline-secondary"> Pas de Protocole </b-btn>
                                <b-btn v-b-toggle.newprotocol variant="outline-secondary"> Nouveau Protocole </b-btn>
                                <b-btn v-b-toggle.existingprotocol variant="outline-secondary"> Protocole existant </b-btn>
                            </b-btn-group>
                            <b-collapse accordion='myaccordion' id='noprotocol'>
                                <br/>
                                <p> Cet enregistrement ne sera pas référencé dans un protocole </p>
                            </b-collapse>
                            <b-collapse accordion='myaccordion' id='newprotocol'>
                                <br/>
                                <b-input-group prepend="Nom du protocole">
                                    <b-form-input></b-form-input>
                                </b-input-group>
                            </b-collapse>
                            <b-collapse accordion='myaccordion' id='existingprotocol'>
                                <br/>
                                <b-form-select v-model="protocoles" :options="options" class="mb-3" />
                            </b-collapse>
                            </b-form-group>
                            <b-form-group>
                            <h5><b>Durée d'enregistrement (en minutes)</b></h5>
                                <b-form-radio-group buttons button-variant="outline-secondary">
                                    <b-form-radio value="NA">Pas de durée</b-form-radio>
                                    <b-form-radio value="10">10</b-form-radio>
                                    <b-form-radio value="20">20</b-form-radio>
                                    <b-form-radio value="30">30</b-form-radio>
                                    <b-form-radio value="60">60</b-form-radio>
                                    <b-form-radio value="120">120</b-form-radio>
                                    <b-form-radio value="240">240</b-form-radio>
                                </b-form-radio-group>
                            </b-form-group>
                            <b-form-group>
                            <h5><b>Signaux enregistrés</b></h5>
                                <b-form-checkbox-group buttons button-variant="outline-secondary" stacked v-for="sig in room.available_signals" v-bind:key="sig.id" checked="true">
                                    <b-form-checkbox>{{sig}}</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </b-modal>
                        <b-modal :id="'modal' + room.name + 'A'">
                            <div slot="modal-header"><h4><b>Note</b></h4></div>
                            <b-form-input></b-form-input>
                        </b-modal>
                </b-card-body>
            </b-card>
</template>

<script>
import moment from "moment";
moment.locale("fr");
export default {
  name: "RoomPreview",
  data() {
    return {
      msg: "Vue par chambre"
    };
  },
  props: ["room", "sector", "signalConf"],
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
