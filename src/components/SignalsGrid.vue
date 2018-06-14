<template>
    <b-container fluid>
      <b-row>  
        {{msg}}
      </b-row>
      <b-row>
      <b-col>
          <b-row v-for='signal in room.available_signals' v-bind:key='signal.id'>
            <signal :signal='signal'></signal>
          </b-row>
    </b-col>
    </b-row>
    </b-container>
</template>


<script>
import moment from 'moment'
moment.locale('fr')
import 'gridstack/dist/gridstack.jQueryUI'
import $ from 'jquery'
import Signal from '@/components/Signal'

export default {
  name: 'SignalsGrid',
  components: {
    Signal: Signal
  },
  data () {
    return {
      msg: 'Temps réel'
    }
  },
  props: ['room'],
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
  }
}
</script>
