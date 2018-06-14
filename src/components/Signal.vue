<template>
    <canvas id='mycanvas' style='width:100%; height:80%'></canvas>
</template>

<script>
import {TimeSeries, SmoothieChart} from 'smoothie'
export default {
  name: 'Signal',
  data () {},
  props: ['signal'],
  mounted: function () {
    // Data
    var line1 = new TimeSeries()

    // Add a random value to each line every second
    setInterval(function () {
      line1.append(new Date().getTime(), Math.random())
    }, 1000)

    // Add to SmoothieChart
    var smoothie = new SmoothieChart({
      grid: {
        strokeStyle: 'rgb(125, 0, 0)',
        fillStyle: 'rgb(0, 0, 0)',
        lineWidth: 0,
        millisPerLine: 250,
        verticalSections: 0
      }
    })
    smoothie.addTimeSeries(line1, {
      strokeStyle: 'rgb(0, 255, 0)',
      fillStyle: 'rgba(0, 255, 0, 0.4)',
      lineWidth: 3
    })
    smoothie.streamTo(document.getElementById('mycanvas'), 1000)
  }
}
</script>

