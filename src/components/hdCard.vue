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
            label: 'PAS',
            type: 'line',
            borderColor: 'red',
            yAxisID: 'PArterielle',
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
          },
          {
            label: 'PAD',
            type: 'line',
            borderColor: 'red',
            yAxisID: 'PArterielle',
            data: [
              {
                x: this.newDate(-24),
                y: 80
              },
              {
                x: this.newDate(-20),
                y: 90
              },
              {
                x: this.newDate(-16),
                y: 95
              },
              {
                x: this.newDate(-12),
                y: 90
              },
              {
                x: this.newDate(-8),
                y: 80
              },
              {
                x: this.newDate(-4),
                y: 75
              },
              {
                x: this.newDate(-0),
                y: 77
              }
            ]
          },
          {
            label: 'PAM',
            type: 'line',
            borderColor: 'red',
            yAxisID: 'PArterielle',
            data: [
              {
                x: this.newDate(-24),
                y: 100
              },
              {
                x: this.newDate(-20),
                y: 105
              },
              {
                x: this.newDate(-16),
                y: 107
              },
              {
                x: this.newDate(-12),
                y: 104
              },
              {
                x: this.newDate(-8),
                y: 101
              },
              {
                x: this.newDate(-4),
                y: 101
              },
              {
                x: this.newDate(-0),
                y: 99
              }
            ]
          },
          {
            label: 'Diurèse',
            backgroundColor: 'green',
            type: 'bar',
            yAxisID: 'Diurese',
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
            type: 'linear',
            id: 'Diurese',
            position: 'left',
            ticks: {
              beginAtZero: true,
              max: 1000,
              min: 0
            }
          },
          {
            type: 'linear',
            id: 'PArterielle',
            position: 'right',
            ticks: {
              beginAtZero: true,
              max: 200,
              min: 0
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
