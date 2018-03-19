<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-divider class="div"></v-divider>
    </v-flex>
    <v-flex xs12 ref="container" class="pl-5 mt-4">
      <div class="big_title">
        <span>Community
        <div class="bot_line"></div>
        </span>
      </div>
      <h3 class="mt-4">Backers by countries</h3>
    </v-flex>
    <v-flex xs12 pl-5 mt-5>
      <v-layout row wrap>
        <v-flex xs6 mb-4>
          <vue-world-map :countryData="getCountryData" lowColor="#B3E5FC" highColor="#0288D1" countryStrokeColor="#818181"></vue-world-map>
        </v-flex>
        <v-flex xs5 style="position:relative" mb-4>
          <div class="sep"></div>
          <v-layout row wrap v-for="country in flagsData" mt-1 :key="country.iso">
            <v-flex xs3>
            </v-flex>
            <v-flex xs7>
              <div class="flag_c">
                <flag :iso="country.iso" />
              </div>
              <div class="c_name ml-3">
                {{country.name}}
              </div>
            </v-flex>
            <v-flex xs2>
              <div class="value">
                {{country.value}}%
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 pa-5>
      <v-divider></v-divider>
    </v-flex>
    <v-flex xs12 pl-5>
      <v-layout row wrap>
        <v-flex xs6>New vs. returning</v-flex>
        <v-flex xs6>Engagement</v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import VueWorldMap from 'vue-world-map'
export default {
  name: 'Community',
  components: {
    VueWorldMap
  },
  mounted () {
  },
  computed: {
    getCountryData () {
      let cd = {}
      this.flagsData.map(obj => {
        cd[obj.iso] = obj.value
      })
      return cd
    }
  },
  methods: {
  },
  data () {
    return {
      flagsData: [
        {
          name: 'United States',
          iso: 'US',
          value: 24
        },
        {
          name: 'Canada',
          iso: 'CA',
          value: 18
        },
        {
          name: 'United Kingdom',
          iso: 'GB',
          value: 17
        },
        {
          name: 'Germany',
          iso: 'DE',
          value: 14
        },
        {
          name: 'Italy',
          iso: 'IT',
          value: 8
        },
        {
          name: 'France',
          iso: 'FR',
          value: 6
        },
        {
          name: 'Sweden',
          iso: 'SE',
          value: 3.5
        },
        {
          name: 'Denemark',
          iso: 'DK',
          value: 3
        },
        {
          name: 'Israel',
          iso: 'IL',
          value: 1.5
        }

      ]
    }
  }
}
</script>
<style scoped>
.sep{width: 1px;background: #ececec;position: absolute;top: 20px;left: 50px;bottom: 40px;}
.flag_c{font-size: 24px;position: relative;display: inline-block;}
.c_name{color: #272b37;font-size: 18px;font-weight: 400;position: relative;display: inline-block;}
.value{font-size: 24px;color: #4597b6;font-weight: 500}
</style>
