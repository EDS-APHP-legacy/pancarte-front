<template>
    <b-container fluid>
      <b-row>
      <b-col class='grid-stack' data-gs-width='12'>
          <div class='grid-stack-item' data-gs-x='0' data-gs-y='0' data-gs-width='6' data-gs-height='6'>
            <hd-card class='grid-stack-item-content'></hd-card>
          </div>
          <div class='grid-stack-item' data-gs-x='6' data-gs-y='0' data-gs-width='6' data-gs-height='6'>
            <resp-card class='grid-stack-item-content'></resp-card>
          </div>
          <div class='grid-stack-item' data-gs-x='0' data-gs-y='6' data-gs-width='6' data-gs-height='6'>
            <neuro-card class='grid-stack-item-content'></neuro-card>
          </div>
          <div class='grid-stack-item' data-gs-x='6' data-gs-y='6' data-gs-width='6' data-gs-height='6'>
            <metab-card class='grid-stack-item-content'></metab-card>
          </div>
      </b-col>
      </b-row>
    </b-container>
</template>


<script>
import moment from 'moment'
moment.locale('fr')
import 'gridstack/dist/gridstack.jQueryUI'
import $ from 'jquery'
import hdCard from '@/components/hdCard'

export default {
  name: 'PancarteGrid',
  components: {
    hdCard
  },
  data () {
    return {
      msg: 'Pancarte de réanimation'
    }
  },
  props: ['room', 'signalConf'],
  methods: {
    enableGrid: function () {
      var options = {
        cellHeight: 80,
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
