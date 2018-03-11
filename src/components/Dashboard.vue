<template>
  <div>
    <v-toolbar app fixed clipped-left class="toolbar_wrp elevation-0" dark>
    </v-toolbar>
    <!-- Content -->
    <v-content>
      <v-container fluid pa-0>
        <v-layout justify-center align-center>
          <v-flex xs12>
            <v-layout row wrap justify-center>
              <v-flex  xs2 text-xs-right mt-5 pt-5 accent style="position: fixed;top: 0;left: 0;right: 0;bottom:0">
                 <ul class="mr-2 pt-5">
                   <li v-for="view in views" :key="view.name"><span>{{view.name}}</span></li>
                 </ul>
              </v-flex>
              <v-flex xs8  offset-xs2>
                <component v-for="view in views" :is="view.view" @getHeight="getHeight" :key="view.name"></component>
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
export default {
  name: 'HelloWorld',
  components: {
    Overview, Pledges, Popularity
  },
  methods: {
    getHeight (data) {
      console.log('data: ', data)
    }
  },
  data () {
    return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar_wrp{background-color: #272b37 !important}
.list_l{width: 100%;background-color: blue;position: fixed;}
ul li {margin:10px;cursor: pointer;}
ul li:hover span{color: #5fced4}
ul li span{font-size: 16px;font-weight: 300}
</style>
