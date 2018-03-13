<template>
<v-layout row wrap>
  <v-flex x12>
    <doughnut-chart :chart-data="chartData" :options="chartOptions"  :height="300" class=""></doughnut-chart>
  </v-flex>
</v-layout>
</template>

<script>
import DoughnutChart from '@/components/overview/DoughnutChart'
export default {
  name: 'HourlyHeatmap',
  components: {
    DoughnutChart
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
      // segmentShowStroke: false
      chartOptions: {
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        legend: {
          display: false
        }
      },
      chartData: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [{
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          label: 'Hourly',
          backgroundColor: ['rgba(15, 31, 92, 1)', 'rgba(21, 43, 107, 1)', 'rgba(27, 55, 122, 1)', 'rgba(34, 67, 138, 1)', 'rgba(40, 79, 153, 1)', 'rgba(46, 91, 168, 1)', 'rgba(50, 105, 174, 1)', 'rgba(55, 118, 179, 1)', 'rgba(55, 118, 179, 1)', 'rgba(64, 145, 190, 1)', 'rgba(68, 159, 196, 1)', 'rgba(68, 159, 196, 1)', 'rgba(94, 177, 192, 1)', 'rgba(108, 186, 191, 1)', 'rgba(121, 195, 189, 1)', 'rgba(134, 204, 187, 1)', 'rgba(151, 211, 185, 1)', 'rgba(167, 218, 183, 1)', 'rgba(184, 225, 180, 1)', 'rgba(200, 232, 178, 1)', 'rgba(217, 239, 176, 1)', 'rgba(226, 243, 185, 1)', 'rgba(235, 247, 194, 1)', 'rgba(244, 250, 202, 1)']
        }]
      }
    }
  }
}
</script>
<style scoped>
</style>
