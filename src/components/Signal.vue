<template>
  <canvas :id='signal' style='width:100%; height:80%'></canvas>
</template>

<script>
import {TimeSeries, SmoothieChart} from 'smoothie'
export default {
  name: 'Signal',
  data () {
    return {
    }
  },
  props: ['signal', 'signalConf'],
  mounted: function () {
    // Data
    var line1 = new TimeSeries()
    var signalConf = this.signalConf
    var signal = this.signal

    // Add a random value to each line every second
    setInterval(function () {
      line1.append(new Date().getTime(), Math.random())
    }, 1000)

    // Add to SmoothieChart
    var smoothie = new SmoothieChart({
      responsive: true
    })
    smoothie.addTimeSeries(line1, {
      strokeStyle: signalConf[0].types[signalConf[0].signals[signal].type].color,
      fillStyle: 'rgb(0, 0, 0)',
      lineWidth: 1
    },
)
    smoothie.streamTo(document.getElementById(this.signal), 1000)
  }
}
</script>

<style scoped>
</style>


