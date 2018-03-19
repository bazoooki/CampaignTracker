<template>
  <v-layout row wrap pr-5 mt-4>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs6>
          Most *SOMETHING* ever
        </v-flex>
        <v-flex xs6 text-xs-right>
          <div class="clr_cont">
            <span class="clr backers"></span>
            <div class="txt_cont">
              <span class="ml-1">Backers ranking</span><br/>
              <span class="ml-1 numb">938 backers</span>
            </div>

          </div>
          <div class="clr_cont ml-4">
            <span class="clr funding"></span>
            <div class="txt_cont">
              <span class="ml-1">Funding ranking</span><br/>
              <span class="ml-1 numb">$121,154 pledged</span>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 mt-4>
      <v-container fluid grid-list-lg>
        <v-layout row wrap mb-4>
          <v-flex xs4>
            <rank-box rankName="Sub-Category" :data="subCategroyData"></rank-box>
          </v-flex>
          <v-flex xs4>
            <rank-box rankName="Category" :data="categroyData"></rank-box>
          </v-flex>
          <v-flex xs4>
            <rank-box rankName="Kickstarter" :data="KSData"></rank-box>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import RankBox from '@/components/popularity/RankBox'
export default {
  name: 'most-ranked',
  components: {
    RankBox
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
      subCategroyData: {
        cat: 'Wearable',
        backers_rank: 100,
        backers_total: 31030
      },
      categroyData: {
        cat: 'Technology',
        backers_rank: 200,
        backers_total: 2030
      },
      KSData: {
        cat: '',
        backers_rank: 367,
        backers_total: 21030
      }
    }
  }
}
</script>
<style scoped>
.clr_cont span{position: relative;display: inline-block;vertical-align: top;color: #43424f;font-size: 14px;font-weight: 400}
.clr_cont{height: 18px;line-height: 18px;position: relative;display: inline-block;}
.clr_cont span.clr{height: 18px;width: 18px;position: relative;display: inline-block;font-weight: 300}
.clr_cont span.clr.backers{background: #f76973}
.clr_cont span.clr.funding{background: #60cfd5}
.clr_cont span.numb{color:#7b7a8c;font-size:14px}
.txt_cont{position:relative;display:inline-block;text-align:left}
</style>
