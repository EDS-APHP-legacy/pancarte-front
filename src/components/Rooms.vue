<template>
<b-container fluid>
<br/>
<h2><b>{{msg}}</b></h2>
<br/>
<b-row flu v-for="sector in sectors.sectors" :key="sector.id" class="sector">
    <b-col>
        <h3>{{sector.name}}</h3>
        <room-preview></room-preview>
        <b-row no-gutters>
        <b-col v-for="room in sector.rooms" v-bind:key="room.id" class="patient h-100" md="auto">
          <room-preview :sector="sector.name" :room="room" :signalConf="signalConf.signalConf" :protocoles="protocoles.protocoles" :options="protocoles.options"></room-preview>            
        </b-col>
        </b-row>
    </b-col>
</b-row>
</b-container>
</template>

<script>
import moment from "moment";
import RoomPreview from "./RoomPreview.vue";
moment.locale("fr");
import sectors from '../roomsdata.js'
import signalConf from '../signalsdata.js'
import protocoles from '../protocoles.js'

export default {
  name: "Rooms",
  components: {
    roomPreview: RoomPreview
  },
  data() {
    return {
      msg: "Réanimation chirurgicale - Hopital Bicêtre",
      sectors: sectors,
      signalConf: signalConf,
      protocoles: protocoles,
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
