<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-divider class="div"></v-divider>
    </v-flex>
    <v-flex xs12 ref="container" class="pl-5 mt-4">
      <div class="big_title">
        <span>Overview
        <div class="bot_line"></div>
        </span>
      </div>
      <h3 class="mt-4">Daily</h3>
    </v-flex>
    <v-flex xs12 class="pl-5 mt-3">
      <v-layout row wrap>
        <v-flex xs6>
          <ul :class="tabToShow">
            <li class="funding" @click="switchTab('funding')">
              <span>Funding</span>
              <div class="bot_line"></div>
            </li>
            <li class="backers" @click="switchTab('backers')">
              <span>Backers</span>
              <div class="bot_line"></div>
            </li>
          </ul>
        </v-flex>
        <v-flex xs6 text-xs-left>
          <div class="clr_cont">
            <span class="clr pace"></span>
            <span class="ml-1">Pace (daily at this time)</span>
          </div>
          <div class="clr_cont ml-4">
            <span class="clr total"></span>
            <span class="ml-1">Total</span>
          </div>
          <div class="clr_cont ml-4">
            <span class="clr icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>pred_legend</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line x1="1" y1="19" x2="1" y2="1" style="fill:none;stroke:#f76973;stroke-linejoin:round;stroke-width:2px;stroke-dasharray:4,4"/><line x1="20" y1="19" y2="19" style="fill:none;stroke:#f76973;stroke-linejoin:round;stroke-width:2px;stroke-dasharray:4,4"/><line x1="19" x2="19" y2="19" style="fill:none;stroke:#f76973;stroke-linejoin:round;stroke-width:2px;stroke-dasharray:4,4"/><line y1="1" x2="19" y2="1" style="fill:none;stroke:#f76973;stroke-linejoin:round;stroke-width:2px;stroke-dasharray:4,4"/></g></g></svg>
            </span>
            <span class="ml-1">Predicted</span>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 mt-3>
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
    },
    switchTab (v) {
      this.tabToShow = v
    }
  },
  data () {
    return {
      tabToShow: 'funding'
    }
  }
}
</script>
<style scoped>
.clr_cont span{position: relative;display: inline-block;vertical-align: top;color: #43415b;font-size: 14px;font-weight: 400}
.clr_cont{height: 18px;line-height: 18px;position: relative;display: inline-block;}
.clr_cont span.clr{height: 18px;width: 18px;position: relative;display: inline-block;}
.clr_cont span.clr.pace{background: #45829c}
.clr_cont span.clr.total{background: #f76973}
ul.backers li.backers .bot_line, ul.funding li.funding .bot_line{transform: scaleX(1);}
.sep{width: 1px;background: #ececec;position: absolute;top:50px;right: 0px;bottom: 50px}
ul {position: relative;top:0px;height: 50px}
ul li{position:relative;display: inline-block;padding:0px;margin:0px;margin-right: 35px;font-size: 16px;font-weight: 400;cursor: pointer;padding-bottom: 5px;color:#87868e;}
ul li:last-child{margin-right: 0px;}
ul li .bot_line{width: 100%;height: 4px;position: absolute;bottom: 0px;left: 0px;background: #f86973;transition: all 0.2s;transform-origin: bottom center;transform: scaleX(0);}
ul li span{transition: all .25s !important;font-weight:400 !important;color: #43414e;text-transform: uppercase;}
ul li a{color: #45a1c0 !important;direction: ltr;font-weight: 400 !important;text-align: left;font-size: 16px;position: relative;text-decoration: underline;}

</style>
