<template>
  <v-layout row wrap pa-5>
    <v-flex xs12>
      <bar-chart :chart-data="chartData" :options="chartOptions" :height="120"></bar-chart>
    </v-flex>
    <v-flex xs12>
      <v-divider></v-divider>       
    </v-flex>
  </v-layout>
</template>

<script>
import BarChart from '@/components/overview/BarChart'
export default {
  name: 'popularity',
  components: {
    BarChart
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
      chartOptions: {
        tooltips: {
          mode: 'label'
        },
        bezierCurve: false,
        scales: {
          yAxes: [{
            stacked: false,
            ticks: {
              padding: 3,
              scaleFontSize: 12,
              beginAtZero: true
            }
          }],
          xAxes: [{
            stacked: true,
            barPercentage: 0.9,
            categoryPercentage: 0.88,
            ticks: {
              beginAtZero: false,
              maxRotation: 0,
              fontSize: 12
            },
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false
        }
      },
      chartData: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: 'Popularity',
            data: [25, 23, 24, 24, 42, 31, 30, 20, 23, 18, 49, 36, 18, 43, 20, 23, 18, 19, 36, 21, 34, 20, 19, 36, 21, 34, 20, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(65, 239, 222, 0.4)',
            borderColor: 'rgba(65, 239, 222, 1)',
            hoverBackgroundColor: 'rgba(45, 45, 50, .8)',
            pointHoverRadius: 'rgba(0, 0, 0, 0)',
            pointHoverRadius: 0,
            borderWidth: 0,
            lineTension: 0,
            radius: 1,
            type: 'line'
          }, {
            label: 'Magic',
            backgroundColor: 'rgba(117, 116, 147, 1)',
            data: [65, 63, 18, 19, 36, 21, 30, 20, 23, 18, 19, 36, 21, 23, 20, 23, 18, 19, 36, 21, 34, 20, 19, 36, 21, 34, 20, 0, 0, 0, 0, 0, 0, 0],
            borderColor: 'rgba(89, 89, 124, 1)',
            hoverBackgroundColor: 'rgba(45, 45, 50, .8)',
            pointHoverRadius: 'rgba(0, 0, 0, 0)',
            pointHoverRadius: 5,
            borderWidth: 0,
            lineTension: 0,
            radius: 1,
            type: 'line'
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
</style>
