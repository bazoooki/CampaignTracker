<template>
  <v-layout row wrap>
    <v-flex xs9>
      <hourly-chart></hourly-chart>
    </v-flex>
    <v-flex xs1 offset-xs1 pl-4 text-xs-right>
      <div class="hourly_legend">
        <div class="leg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21.47 374.5"><defs><linearGradient id="linear-gradient" x1="10.73" x2="10.73" y2="374.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#112060"/><stop offset="0.21" stop-color="#2e5ba8"/><stop offset="0.41" stop-color="#449fc4"/><stop offset="0.61" stop-color="#86ccbb"/><stop offset="0.81" stop-color="#d9efb0"/><stop offset="1" stop-color="#fdfed3"/></linearGradient></defs><title>hourly_legend</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect width="21.47" height="374.5" style="fill:url(#linear-gradient)"/></g></g></svg>
          <div class="most">Most <br/> backed</div>
          <div class="least">Least <br/> backed</div>
        </div>
      </div>
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
.hourly_legend {position: relative;}
.hourly_legend .leg{width: 21px}
.hourly_legend .most{position: absolute;left: 30px;top: 0px;text-align: left}
.hourly_legend .least{position: absolute;left: 30px;bottom: 0px;text-align: left}

</style>
