<template>
  <v-layout row wrap justify-center>
    <v-flex xs10>
      <hourly-chart></hourly-chart>
    </v-flex>
  </v-layout>
</template>

<script>
import HourlyChart from '@/components/overview/HourlyChart'
export default {
  name: 'HourlyHeatmap',
  components: {
    HourlyChart
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
