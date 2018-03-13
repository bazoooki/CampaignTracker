<template>
  <div>
    <v-toolbar app fixed clipped-left class="toolbar_wrp elevation-0" dark>
    </v-toolbar>
    <v-content>
      <v-container fluid pa-0 mt-4 v-scroll="onScroll">
        <v-layout justify-center align-center>
          <v-flex xs12>
            <v-layout row wrap justify-center >
              <v-flex  xs2 text-xs-right mt-5 pt-5 class="fixed_pl">
                hooo {{offsetTop}}
                 <ul class="mr-3 pt-5">
                   <li v-for="view in views" :key="view.name" :class="{'current': currentShowedView === view.view}"><span>{{view.name}}</span></li>
                 </ul>
              </v-flex>
              <v-flex xs8  offset-xs2 style="background-color: white">
                <campaign-info></campaign-info>
                <component v-for="view in views" :is="view.view" @getHeight="getHeight" :key="view.name" class="mt-5"></component>
              </v-flex>
              <v-flex xs2></v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Overview from '@/components/Overview'
import Pledges from '@/components/Pledges'
import Popularity from '@/components/Popularity'
import Community from '@/components/Community'
import Mentions from '@/components/Mentions'
import Trust from '@/components/Trust'
import Creators from '@/components/Creators'
import CrossPromotions from '@/components/CrossPromotions'
import Cancellations from '@/components/Cancellations'
import CampaignInfo from '@/components/CampaignInfo'
export default {
  name: 'HelloWorld',
  components: {
    Overview, Pledges, Popularity, CampaignInfo
  },
  methods: {
    getHeight (data) {
      console.log('data: ', data)
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      console.log('onScroll: ', e.target.scrollTop)
    }
  },
  data () {
    return {
      offsetTop: 0,
      currentShowedView: Overview,
      drawer: true,
      views: [{
        view: Overview,
        name: 'Overview'
      }, {
        view: Pledges,
        name: 'Pledges'
      }, {
        view: Popularity,
        name: 'Popularity'
      }, {
        view: Community,
        name: 'Community'
      }, {
        view: Trust,
        name: 'Trust'
      }, {
        view: Mentions,
        name: 'Mentions'
      }, {
        view: Creators,
        name: 'Creators only'
      }, {
        view: CrossPromotions,
        name: 'Cross promotions'
      }, {
        view: Cancellations,
        name: 'Cancellations'
      }]
    }
  }
}
</script>

<style scoped>
.fixed_pl{position: fixed;top: 0;left: 0;right: 0;bottom:0}
.toolbar_wrp{background-color: #272b37 !important;height:50px;}
.list_l{width: 100%;background-color: blue;position: fixed;}
ul li {margin:10px;cursor: pointer;}
ul li.current span{font-weight: 500}
ul li:hover span{color: #5fced4}
ul li span{font-size: 16px;font-weight: 300}
</style>
