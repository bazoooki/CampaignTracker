<template>
  <v-layout row wrap>
    <v-flex xs12 ref="container" class="top_b">
      <v-layout row wrap pl-3>
        <v-flex xs6>
          <h5>Använda. A Great F*cking Bag.</h5>
        </v-flex>
        <v-flex xs6 text-xs-right>
          <v-btn outline round dark flat @click="compareCampaign" class="t_btn mr-3">+ Compare</v-btn>
          <v-btn outline round dark flat @click="createAlert" class="t_btn mr-4">Create alert</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs5>
        <v-card class="ma-5 elevation-0" style="background-color:none;border:1px solid rgba(67, 66, 79, 0.3)">
          <v-card-media height="200px" src="https://ksr-ugc.imgix.net/assets/019/735/797/2bdffe6f3c7d35c05b7b1d6d400dabab_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1514792044&auto=format&q=92&s=d5121dc8cc0abdbbdb4295b288ab2728"></v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs7>
        <v-layout row wrap mt-4>
          <v-flex xs12 pt-5 mt-2>
            <div class="data_block">
              <div class="left_ver"></div>
              <div class="time">
                <div class="tblock ml-2">
                  <div class="big">22</div>
                  <div class="txt">Days</div>
                </div>
                <div class="tblock ml-2">
                  <div class="big">03</div>
                  <div class="txt">Hours</div>
                </div>
                <div class="tblock ml-2">
                  <div class="big">14</div>
                  <div class="txt">Minutes</div>
                </div>
              </div>
            </div>
            <div class="data_block ml-5">
              <div class="left_ver"></div>
              <div class="tblock ml-2">
                  <div class="big">$874,658</div>
                  <div class="txt">234% of goal</div>
              </div>
            </div>
            <div class="data_block ml-5">
              <div class="left_ver"></div>
              <div class="tblock ml-2">
                  <div class="big">12,023</div>
                  <div class="txt">Backers</div>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 mt-4 pt-2>
            <p class="mr-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini Descriptor up tp 200 Character limit.
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: 'CampaignInfo',
  mounted () {
  },
  methods: {
    sendData () {
      this.$emit('getHeight', this.$refs.container.clientHeight)
    },
    createAlert () {
      console.log('createAlert')
    },
    compareCampaign () {
      console.log('compareCampaign')
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
p{font-size: 16px;font-weight: 300}
.top_b{height: 60px;line-height: 60px;color: white;background-color: #43424f}
.top_b .t_btn{height:35px;padding:0px 10px;}
h5{font-size: 22px;font-weight: 400}
.data_block{height: 45px;position: relative;display: inline-block;vertical-align: top;}
.data_block .left_ver{height: 100%;width: 4px;background: #60cfd5;    display: inline-block;vertical-align: top;}
.data_block .time{position: relative;display: inline-block;}
.data_block .tblock{position: relative;display: inline-block;vertical-align: middle;line-height: 27px}
.data_block .tblock .big{font-size: 22px;font-weight: 400}
.data_block .tblock .txt{font-size: 14px;font-weight: 300;line-height: 16px;position: relative;}
</style>
