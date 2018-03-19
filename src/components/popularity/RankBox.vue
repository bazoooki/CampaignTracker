<template>
  <v-layout row wrap>
    <v-flex xs6 lg4 mt-3 pt-2 text-xs-center style="position:relative" hidden-md-and-down>
      <div class="lines" style="width:95px;float:right">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.34 103.52">
          <text transform="translate(7.66 10.27)" style="font-size:12px;fill:#43424f;font-family:Roboto;font-weight:400">
            1<tspan x="-7.66" y="90">5K</tspan>
          </text>
          <line x1="20.86" y1="5.02" x2="94.34" y2="5.02" style="fill:none;stroke:#43424f;stroke-miterlimit:10;stroke-width:0.5px;opacity:0.35"/>
          <line x1="20.86" y1="96.48" x2="94.34" y2="96.48" style="fill:none;stroke:#43424f;stroke-miterlimit:10;stroke-width:0.5px;opacity:0.35"/>
          <line x1="20.86" y1="73.62" x2="94.34" y2="73.62" style="fill:none;stroke:#43424f;stroke-miterlimit:10;stroke-width:0.5px;opacity:0.35"/>
          <line x1="20.86" y1="50.75" x2="94.34" y2="50.75" style="fill:none;stroke:#43424f;stroke-miterlimit:10;stroke-width:0.5px;opacity:0.45"/>
          <line x1="20.86" y1="27.89" x2="94.34" y2="27.89" style="fill:none;stroke:#43424f;stroke-miterlimit:10;stroke-width:0.5px;opacity:0.35"/>
          <circle id="circ_blue" cx="50.63" cy="3" r="3" style="fill:#f76973"/>
          <circle if="circ_red" cx="63.64" cy="3" r="3" style="fill:#60cfd5"/>
        </svg>
      </div>
    </v-flex>
    <v-flex xs6 lg8 text-xs-left>
      <v-flex xs12 style="white-space: nowrap;">
        <div class="big_num backers">
          {{data.backers_rank}}
        </div>
        <div class="det ml-1">
          <span style="font-weight:600">th<Br/> <span>of {{data.backers_total}}</span></span>
        </div>
      </v-flex>
      <v-flex xs12 mt-4 style="white-space: nowrap;">
        <div class="big_num rank">
          247
        </div>
        <div class="det ml-1">
          <span style="font-weight:600">th<Br/> <span>of 8,176</span></span>
        </div>
      </v-flex>
    </v-flex>
    <v-flex xs8 offset-xs1 text-xs-center>
      <p class="mr-2">
        {{rankName}} rank <br/>
        <span>{{data.cat}}</span>
      </p>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'RankBox',
  props: ['rankName', 'data'],
  components: {
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
p span{color: #7b7a8c}
p{}
.big_num{font-size: 40px;height: 40px;line-height: 40px;position: relative;display: inline-block;font-weight: 600;}
.big_num.backers{color: #f76973}
.big_num.rank{color: #60cfd5}
.det{height: 40px;line-height: 40px;position: relative;display: inline-block;vertical-align: top;}
.det span{display: inline-block;font-size: 14px;font-weight: 300;line-height: 20px;position: relative;vertical-align: top;color: #7b7a8c}
</style>
