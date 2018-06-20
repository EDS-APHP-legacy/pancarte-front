<script>
import { Bar } from 'vue-chartjs'
import moment from 'moment'
moment.locale('fr')
export default {
  extends: Bar,
  data () {
    return {
      msg: 'Hémodynamique',
      data: {
        datasets: [
          {
            label: 'Diurèse',
            backgroundColor: 'green',
            data: [
              {
                x: this.newDate(-24),
                y: 400
              },
              {
                x: this.newDate(-20),
                y: 250
              },
              {
                x: this.newDate(-16),
                y: 320
              },
              {
                x: this.newDate(-12),
                y: 340
              },
              {
                x: this.newDate(-8),
                y: 240
              },
              {
                x: this.newDate(-4),
                y: 160
              },
              {
                x: this.newDate(-0),
                y: 50
              }
            ]
          },
          {
            label: 'Pression artérielle',
            yaxisID: '2ndAxis',
            type: 'line',
            borderColor: 'red',
            data: [
              {
                x: this.newDate(-24),
                y: 120
              },
              {
                x: this.newDate(-20),
                y: 140
              },
              {
                x: this.newDate(-16),
                y: 145
              },
              {
                x: this.newDate(-12),
                y: 146
              },
              {
                x: this.newDate(-8),
                y: 135
              },
              {
                x: this.newDate(-4),
                y: 136
              },
              {
                x: this.newDate(-0),
                y: 138
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
                  hour: 'hh'
                }
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Date'
              }
            }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: true
          },
          {
            type: 'linear',
            id: '2ndAxis',
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],
          legend: {
            display: true,
            fillStyle: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    newDate: function (minutes) {
      return moment().add(minutes, 'h').toDate()
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
