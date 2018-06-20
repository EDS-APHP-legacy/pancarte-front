<script>
import { Line } from 'vue-chartjs'
import moment from 'moment'
moment.locale('fr')
export default {
  extends: Line,
  name: 'Trend',
  props: ['signal', 'signalConf'],
  data () {
    return {
      msg: 'Tendance',
      data: {
        signal: this.signal,
        signalConf: this.signalConf,
        datasets: [
          {
            label: this.signal,
            backgroundColor: this.signalConf[0].types[this.signalConf[0].signals[this.signal].type].color,
            data: [
              {
                x: this.newDate(-20),
                y: 10
              },
              {
                x: this.newDate(-19),
                y: 14
              },
              {
                x: this.newDate(-18),
                y: 18
              },
              {
                x: this.newDate(-17),
                y: 16
              },
              {
                x: this.newDate(-16),
                y: 10
              },
              {
                x: this.newDate(-15),
                y: 22
              },
              {
                x: this.newDate(-14),
                y: 24
              },
              {
                x: this.newDate(-13),
                y: 21
              },
              {
                x: this.newDate(-12),
                y: 16
              },
              {
                x: this.newDate(-11),
                y: 23
              },
              {
                x: this.newDate(-10),
                y: 30
              },
              {
                x: this.newDate(-9),
                y: 32
              }
            ]
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                displayFormats: {
                  minute: 'h:mm'
                }
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Date'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'value'
              }
            }
          ]
        },
        legend: {
          display: true,
          fillStyle: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    newDate: function (minutes) {
      return moment().add(minutes, 'm').toDate()
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

/<style scoped>
</style>