<template>
<b-container fluid>
  <b-row><b-col><h3>Secteur : {{sectorName}} - Chambre : {{roomName}}</h3></b-col></b-row>
  <b-row>
    <b-col cols='4'><signals-grid :room='room'></signals-grid></b-col>
    <b-col cols='4'><trends-grid :room='room'></trends-grid></b-col>
  </b-row>
</b-container>
</template>

<script>
import moment from 'moment'
import 'gridstack/dist/gridstack.jQueryUI'
import $ from 'jquery'
import sectors from '../roomsdata.js'
import SignalsGrid from '@/components/SignalsGrid'
import TrendsGrid from '@/components/TrendsGrid'
import Signal from '@/components/Signal'

moment.locale('fr')
export default {
  name: 'Room',
  components: {
    SignalsGrid: SignalsGrid,
    TrendsGrid: TrendsGrid,
    Signal: Signal
  },
  data () {
    return {
      msg: 'Vue par chambre',
      sectors: sectors.sectors,
      sectorName: '',
      roomName: '',
      sector: '',
      room: ''
    }
  },

  created () {
    this.sectorName = this.$route.params.sector
    this.roomName = this.$route.params.room
    var sectorName = this.sectorName
    var roomName = this.roomName
    this.sector = this.sectors.find(function (sector) {
      return sector.name === sectorName
    })
    this.room = this.sector.rooms.find(function (room) {
      return room.name === roomName
    })
  },

  methods: {
    enableGrid: function () {
      var options = {
        cellHeight: 180,
        verticalMargin: 0,
        resizable: {
          handles: 'se, s, e, sw, w'
        },
        animate: true,
        removable: true
      }

      $('.grid-stack').gridstack(options)
    }
  },

  mounted: function () {
    this.enableGrid()
  },

  filters: {
    moment: function (value) {
      return moment(value).format('DD/MM/YY')
    },
    sincedays: function (value) {
      return moment().diff(value, 'days')
    },
    ageinyears: function (value) {
      return moment(value).fromNow(true)
    }
  }
}
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
