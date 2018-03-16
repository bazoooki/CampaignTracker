<template>
  <v-layout row wrap justify-center>
    <v-flex xs12>
      <v-divider class="div"></v-divider>
    </v-flex>
    <v-flex xs12 pa-5>
      <v-layout row wrap>
        <v-flex xs7 ref="container">
          <div class="left_big_title_container">
            <div class="big_title">
              <span>Pledges
              <div class="bot_line"></div>
              </span>
            </div>
            <h3 class="mt-4">Average pledge: $XXX</h3>
          </div>
          <div class="top_pledges" >
            <div class="big_title" style="font-size:18px">
              <span>Top plegdes
              </span>
            </div>
            <v-divider class="mb-4" style="height:2px;background-color:#9c9cb3"></v-divider>
              <v-flex xs6 pa-2>
                <div class="perk r1">
                  <div class="perc mr-3">25%</div>
                  <div class="sep"></div>
                  <div class="val ml-3">
                    <span>
                        <span style="font-weight:500">Reward name (price)</span><br/>
                      $123,485 pledged <br/>
                      1,234 backers<br/>
                    </span>
                  </div>
                </div>
              </v-flex>
              <v-flex xs6 pa-2>
                <div class="perk r2">
                  <div class="perc mr-3">25%</div>
                  <div class="sep"></div>
                  <div class="val ml-3">
                    <span>
                        <span style="font-weight:500">Reward name (price)</span><br/>
                      $123,485 pledged <br/>
                      1,234 backers<br/>
                    </span>
                  </div>
                </div>
              </v-flex>
              <v-flex xs6 pa-2>
                <div class="perk r3">
                  <div class="perc mr-3">25%</div>
                  <div class="sep"></div>
                  <div class="val ml-3">
                    <span>
                        <span style="font-weight:500">Reward name (price)</span><br/>
                      $123,485 pledged <br/>
                      1,234 backers<br/>
                    </span>
                  </div>
                </div>
              </v-flex>
          </div>
        </v-flex>
        <v-flex xs5>
          pie goes here :)
        </v-flex>
      </v-layout>
      <v-divider class="mt-3"></v-divider>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap pa-5 id="limited_rewards">
        <v-flex xs4>
          <div class="det">
            <div class="agala_good" style="width:101px;position:relative;display:inline-block;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.33 80.99"><title>agala_vi</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="14.57 14.99 23.03 56.91 92.26 56.91 100.72 14.99 14.57 14.99" style="fill:none;stroke:#43424f;stroke-miterlimit:10"/><polyline points="0.11 0.49 12.31 3.33 23 57.2 17.84 71.83 78.16 71.83" style="fill:none;stroke:#43424f;stroke-miterlimit:10"/><circle cx="18.49" cy="71.81" r="8.68" style="fill:#fff;stroke:#43424f;stroke-miterlimit:10"/><circle cx="70.47" cy="71.81" r="8.68" style="fill:#fff;stroke:#43424f;stroke-miterlimit:10"/><circle cx="58.58" cy="22.49" r="18.09" style="fill:#fff;stroke:#43424f;stroke-miterlimit:10"/><polyline points="66.8 17.34 56.01 28.13 50.36 22.47" style="fill:none;stroke:#33c689;stroke-miterlimit:10;stroke-width:2px"/></g></g></svg>
            </div>
            <div class="txt ml-4">Limited Rewards:</div>
          </div>
        </v-flex>
        <v-flex xs8>
          <v-layout row wrap v-for="reward in limitedRewards" :key="reward.name">
            <v-flex xs2 text-xs-center>
              <p class="price">
                <span>
                  $ {{reward.price}}
                </span>
              </p>
            </v-flex>
            <v-flex xs6>
              <p class="light">
                <span>
                  {{reward.name}}
                </span>
              </p>
            </v-flex>
            <v-flex xs2>
              <p class="light">
                <span>
                  {{reward.sold}} out of {{reward.tota}}
                </span>
              </p>
            </v-flex>
            <v-flex xs2>
              <p class="light">
                <span >
                  Changed {{reward.changed}} times
                </span>
              </p>
            </v-flex>
            <v-flex xs12>
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap pa-5 id="limited_rewards">
        <v-flex xs4>
          <div class="det">
            <div class="agala_bad" style="width:101px;position:relative;display:inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.33 80.99"><title>agala_x</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="14.57 14.99 23.03 56.91 92.26 56.91 100.72 14.99 14.57 14.99" style="fill:none;stroke:#43424f;stroke-miterlimit:10"/><polyline points="0.11 0.49 12.31 3.33 23 57.2 17.84 71.83 78.16 71.83" style="fill:none;stroke:#43424f;stroke-miterlimit:10"/><circle cx="18.49" cy="71.81" r="8.68" style="fill:#fff;stroke:#43424f;stroke-miterlimit:10"/><circle cx="70.47" cy="71.81" r="8.68" style="fill:#fff;stroke:#43424f;stroke-miterlimit:10"/><circle cx="58.58" cy="22.49" r="18.09" style="fill:#fff;stroke:#43424f;stroke-miterlimit:10"/><line x1="63.97" y1="17.09" x2="53.18" y2="27.88" style="fill:#fff;stroke:#e7505a;stroke-miterlimit:10;stroke-width:2px"/><line x1="53.18" y1="17.09" x2="63.97" y2="27.88" style="fill:#fff;stroke:#e7505a;stroke-miterlimit:10;stroke-width:2px"/></g></g></svg>
            </div>
            <div class="txt ml-4">Gone:</div>
          </div>
        </v-flex>
        <v-flex xs8>
          <v-layout row wrap v-for="reward in goneRewards" :key="reward.name">
            <v-flex xs8>
              <p class="light">
                <span>
                  {{reward.name}}
                </span>
              </p>
            </v-flex>
            <v-flex xs2>
              <p class="light">
                <span>
                  {{reward.sold}} sold
                </span>
              </p>
            </v-flex>
            <v-flex xs2>
              <p class="light">
                <span>
                  Ended {{reward.hoursSinceEnded}} hours ago
                </span>
              </p>
            </v-flex>
            <v-flex xs12>
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Pledges',
  mounted () {
  },
  methods: {
    sendData () {
      this.$emit('getHeight', this.$refs.container.clientHeight)
    }
  },
  data () {
    return {
      goneRewards: [{
        name: 'Lorem ipsum dolor sit amet consectetuer',
        sold: 30,
        hoursSinceEnded: 49
      }, {
        name: '2Lorem ipsum dolor sit amet consectetuer',
        sold: 30,
        hoursSinceEnded: 49
      }],
      limitedRewards: [{
        price: 50,
        name: 'Lorem ipsum dolor sit amet consectetuer',
        sold: 30,
        total: 150,
        changed: 3
      }, {
        price: 70,
        name: '2Lorem ipsum dolor sit amet consectetuer',
        sold: 15,
        total: 35,
        changed: 1
      }]
    }
  }
}
</script>
<style scoped>
p{height: 50px;line-height: 50px;margin:0px;}
p.price span{position:relative;display:inline-block;line-height:20px;vertical-align:middle;color:#33c689;font-size:30px;font-weight:500}
p.light span{position:relative;display:inline-block;line-height:20px;vertical-align:middle}
.light{font-weight: 300}
.det{height: 85px;line-height: 85px;top: 50%;
    position: relative;
    transform: translateY(-50%);}
.det .txt{height:80px;line-height:80px;position:relative;display:inline-block;vertical-align:top;font-size: 18px}
.left_big_title_container{display:inline-block;position:relative;float:left;}
.top_pledges{float:left;margin-top: 130px;width: auto}
.perc{font-size: 50px;position: relative;display: inline-block;}
.perk{position: relative;display: block;white-space: nowrap;vertical-align: top;line-height: 60px}
.perk.r2 .sep{background-color: #f66972}
.perk.r2 .perc{color: #f66972}
.perk.r3 .sep{background-color: #f2a73b}
.perk.r3 .perc{color: #f2a73b}
.perk .val{position:relative;display:inline-block;vertical-align:top}
.perk  span{position: relative;display: inline-block;line-height: 20px;vertical-align: top;}
.sep{position: relative;display: inline-block;height: 60px;width: 5px; background-color: #43415b;vertical-align: top;}
</style>
