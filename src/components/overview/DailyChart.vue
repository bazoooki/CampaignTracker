<template>
  <v-layout row wrap justify-center>
    <v-flex xs11>
      <bar-chart :chart-data="chartData" :options="chartOptions" :height="120"></bar-chart>
    </v-flex>
  </v-layout>
</template>

<script>
import BarChart from './BarChart'
export default {
  name: 'Chart',
  components: {
    BarChart
  },
  data () {
    return {
      chartOptions: {
        tooltips: {
          mode: 'label'
        },
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
            label: 'Total',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(247, 105, 115, 1)',
            data: [5, 8.5, 11.5, 14.8, 18.9, 22.1, 25.5, 28.7, 30.4, 32.8, 34.9, 35, 36, 37, 38, 39, 40, 44, 46, 48, 52, 54, 56, 58, 60, 62],
            type: 'line'
          },
          {
            label: 'At this time',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: 'rgba(69, 130, 156, 0.6)',
            borderColor: 'rgba(69, 130, 156, 1)',
            data: [5, 5.5, 6, 5.8, 5.9, 6.1, 5.5, 5.7, 6.4, 5.8, 4.9, 5, 5, 5.5, 5.8, 5.3, 5.44, 5.9, 6, 5.1, 4.8, 5.9, 6, 5.1, 4.8, 5.9, 6],
            type: 'bar'
          },
          {
            label: 'Backers',
            data: [65, 63, 18, 19, 36, 21, 30, 20, 23, 18, 19, 36, 21, 23, 20, 23, 18, 19, 36, 21, 34, 20, 19, 36, 21, 34, 20, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: 'rgba(96, 207, 213, 1)',
            borderColor: 'rgba(123, 120, 140, 1)',
            hoverBackgroundColor: 'rgba(45, 45, 50, .8)',
            pointHoverRadius: 5,
            borderWidth: 0
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .chart_container{position: relative;display: inline-block;width: 100%}
  .clr_box{position: relative;display: inline-block;color: #7b7a8c;font-size: 14px;margin-left: 15px;}
  .clr_box span.color{width: 13px;height: 13px;background: red;position: relative;display: inline-block;}
  .clr_box span.color.after{background: rgba(67, 66, 91, 1)}
  .clr_box span.color.before{background: rgba(142, 140, 156, 1)}
  span.bold{font-weight: 600}
</style>
