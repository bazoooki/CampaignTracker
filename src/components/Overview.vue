<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-divider class="div"></v-divider>
    </v-flex>
    <v-flex xs12 ref="container" class="pa-5">
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
    <v-flex xs6 class="pa-5" style="position:relative">
      <h3 class="mt-4 pl-4">Hourly heatmap</h3>
      <hourly-heat-map></hourly-heat-map>
      <div class="sep"></div>
    </v-flex>
    <v-flex xs6 class="pa-5">
      <h3 class="mt-4 pl-4">Stats</h3>
      <stats></stats>
    </v-flex>
  </v-layout>
</template>

<script>
import HourlyHeatMap from '@/components/overview/HourlyHeatMap'
import DailyChart from '@/components/overview/DailyChart'
import Stats from '@/components/overview/Stats'
export default {
  name: 'Overview',
  components: {
    DailyChart, HourlyHeatMap, Stats
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
.sep{width: 1px;background: #ececec;position: absolute;top:50px;right: 0px;bottom: 50px}
</style>
