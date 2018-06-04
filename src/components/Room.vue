<template>
<b-container fluid>

<div class="grid-stack">
  <grid-stack-item v-for="signal in sectors.sectors.sector.room.available_signals" v-bind:key="signal.id" :></grid-stack-item>
    <div class="grid-stack-item" >

    <div class="grid-stack-item"
        data-gs-x="0" data-gs-y="0"
        data-gs-width="4" data-gs-height="2">
            <div class="grid-stack-item-content">{{msg}}</div>
    </div>
    <div class="grid-stack-item"
        data-gs-x="4" data-gs-y="0"
        data-gs-width="4" data-gs-height="4">
            <div class="grid-stack-item-content">{{msg}}</div>
    </div>
</div>
</template>

<script>
import moment from "moment";
import gridstack from "gridstack";
import "gridstack/dist/gridstack.jQueryUI";
import $ from "jquery";
import jquery from "jquery";
import sectors from '../roomsdata.js'
import signalConf from '../signalsdata.js'
import protocoles from '../protocoles.js'

moment.locale("fr");
export default {
  name: "Room",
  data() {
    return {
      msg: "Vue par chambre",
      sectors: sectors,
      sector: '',
      room: ''
    };
  },

  created() {
      this.sector = this.$route.params.sector;
      this.room = this.$route.params.room;
  },

  methods: {
    enableGrid: function() {
      var options = {
        cellHeight: 180,
        verticalMargin: 0,
        resizable: {
          handles: "se, s, e, sw, w"
        },
        animate: true,
        removable: true
      };

      $(".grid-stack").gridstack(options);
    }
  },

  mounted: function() {
    this.enableGrid();
    this.$root.$on("update", props => {
      console.log(props);
    });
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
