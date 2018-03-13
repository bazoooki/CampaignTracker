<template>
  <v-layout row wrap>
    <v-flex xs12 class="pa-3" ref="container">
      <div class="big_title">
        <span>Overview
        <div class="bot_line"></div>
        </span>
      </div>
      <h3 class="mt-4">Daily</h3>
    </v-flex>
    <v-flex xs12>
      <daily-chart></daily-chart>
    </v-flex>
    <v-flex xs6>
      <hourly-heat-map></hourly-heat-map>
    </v-flex>
    <v-flex xs6>2</v-flex>
  </v-layout>
</template>

<script>
import HourlyHeatMap from '@/components/overview/HourlyHeatMap'
import DailyChart from '@/components/overview/DailyChart'
export default {
  name: 'Overview',
  components: {
    DailyChart, HourlyHeatMap
  },
  mounted () {
  },
  methods: {
    sendData () {
      this.$emit('getHeight', this.$refs.container.clientHeight)
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
