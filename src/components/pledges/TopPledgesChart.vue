<template>
  <v-layout row wrap mt-5>
    <v-flex xs12 mt-5>
      <doughnut-chart :chart-data="chartData" :options="chartOptions"  :height="300" style="position:relative;left:0px" class="mt-4"></doughnut-chart>
    </v-flex>
  </v-layout>
</template>

<script>
import DoughnutChart from '@/components/overview/DoughnutChart'
export default {
  name: 'TopPledgesChart',
  components: {
    DoughnutChart
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
      selectedHour: null,
      chartOptions: {
        onClick: this.chartOnClick,
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
        labels: ['Reward 1', 'Reward 2', 'Reward 3', 'Reward 4', 'Reward 5'],
        datasets: [{
          data: [55, 130, 25, 13, 35],
          label: 'Hourly',
          backgroundColor: ['rgba(246, 105, 114, 1)', 'rgba(67, 65, 91, 1)', 'rgba(7, 113, 186, 1)', 'rgba(95, 206, 212, 1)', 'rgba(242, 167, 59, 1)']
        }]
      }
    }
  }
}
</script>
<style scoped>
</style>
