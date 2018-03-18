<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-divider class="div"></v-divider>
    </v-flex>
    <v-flex xs12 ref="container" class="pl-5 mt-4">
      <div class="big_title">
        <span>Popularity
        <div class="bot_line"></div>
        </span>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap pl-5 mt-4>
        <v-flex xs6>
          <ul :class="tabToShow">
            <li class="ks" @click="switchTab('ks')">
              <span>KS RANK</span>
              <div class="bot_line"></div>
            </li>
            <li class="category" @click="switchTab('category')">
              <span>Category rank</span>
              <div class="bot_line"></div>
            </li>
            <li class="sub_category" @click="switchTab('sub_category')">
              <span>sub-Category rank</span>
              <div class="bot_line"></div>
            </li>
          </ul>
        </v-flex>
        <v-flex xs6 text-xs-right pr-5>
          <span style="color:rgba(67, 65, 91, 0.7)">Average position: </span>
          <span>16</span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 pl-5>
      <div class="clr_cont">
        <span class="clr popularity"></span>
        <span class="ml-1">Popularity</span>
      </div>
      <div class="clr_cont ml-4">
        <span class="clr magic"></span>
        <span class="ml-1">Magic</span>
      </div>
    </v-flex>
    <v-flex xs12 pl-5 mt-4>
      <popularity-graph></popularity-graph>
    </v-flex>
  </v-layout>
</template>

<script>
import PopularityGraph from '@/components/popularity/PopularityGraph'
export default {
  name: 'Popularity',
  components: {
    PopularityGraph
  },
  mounted () {
  },
  methods: {
    switchTab (v) {
      this.tabToShow = v
    }
  },
  data () {
    return {
      tabToShow: 'ks'
    }
  }
}
</script>
<style scoped>
.clr_cont span{position: relative;display: inline-block;vertical-align: top;color: #43415b;font-size: 14px;font-weight: 400}
.clr_cont{height: 18px;line-height: 18px;position: relative;display: inline-block;}
.clr_cont span.clr{height: 18px;width: 18px;position: relative;display: inline-block;}
.clr_cont span.clr.popularity{background: #60cfd5}
.clr_cont span.clr.magic{background: #757493}
ul.ks li.ks .bot_line, ul.category li.category .bot_line, ul.sub_category li.sub_category .bot_line{transform: scaleX(1);}
.sep{width: 1px;background: #ececec;position: absolute;top:50px;right: 0px;bottom: 50px}
ul {position: relative;top:0px;height: 50px}
ul li{position:relative;display: inline-block;padding:0px;margin:0px;margin-right: 35px;font-size: 16px;font-weight: 400;cursor: pointer;padding-bottom: 5px;color:#87868e;}
ul li:last-child{margin-right: 0px;}
ul li .bot_line{width: 100%;height: 4px;position: absolute;bottom: 0px;left: 0px;background: #f86973;transition: all 0.2s;transform-origin: bottom center;transform: scaleX(0);}
ul li span{transition: all .25s !important;font-weight:400 !important;color: #43414e;text-transform: uppercase;}
ul li a{color: #45a1c0 !important;direction: ltr;font-weight: 400 !important;text-align: left;font-size: 16px;position: relative;text-decoration: underline;}
</style>
