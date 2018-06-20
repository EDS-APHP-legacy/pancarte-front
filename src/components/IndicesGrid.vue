<template>
    <b-container fluid>
      <b-row class='mt-3'><b-col><h4>{{msg}}</h4></b-col></b-row>
      <b-row>
      <b-col class='grid-stack'>
          <b-row class='grid-stack-item'
            data-gs-x='0' data-gs-y='0'
            data-gs-width='2' data-gs-height='1'>
            <div class='grid-stack-item-content'>
              <indice :signalConf='signalConf'></indice>
            </div>
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
import Indice from '@/components/Indice'

export default {
  name: 'SignalsGrid',
  components: {
    Indice
  },
  data () {
    return {
      msg: 'Indices secondaires'
    }
  },
  props: ['room', 'signalConf'],
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
