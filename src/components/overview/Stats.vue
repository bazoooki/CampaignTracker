<template>
  <div class="mt-5">
  <v-layout row wrap mt-3 pt-2 v-for="stat in stats" :key="stat.name">
    <v-flex xs2 text-xs-center>
      <stats-icons :icon="stat.icon"></stats-icons>
    </v-flex>
    <v-flex xs5>
      <span class="mid_txt ml-4">{{stat.name}}</span>
    </v-flex>
    <v-flex xs3 offset-xs1 text-xs-left>
      <span class="val_txt ml-3"><span v-if="stat.currency">$</span>{{stat.value}}</span>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import StatsIcons from '@/assets/StatsIcons'
export default {
  name: 'Stats',
  components: {
    StatsIcons
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
      stats: [
        {
          name: 'Avg. backers/day',
          value: 45,
          icon: 1
        },
        {
          name: 'Avg. funding/day',
          value: 287,
          currency: true,
          icon: 2
        },
        {
          name: 'Avg. pledge',
          value: 348,
          currency: true,
          icon: 3
        },
        {
          name: 'Prediction(?)',
          value: 6,
          icon: 4
        },
        {
          name: 'Comments',
          value: 14,
          icon: 5
        },
        {
          name: 'Updates',
          value: 8,
          icon: 6
        }
      ]
    }
  }
}
</script>
<style scoped>
.cls-1{fill:#fff;stroke:#272b37;stroke-miterlimit:10;}
.mid_txt{font-size: 18px;}
.val_txt{font-size: 18px;color: #4597b6;font-weight: 500}
.l_icon{width:14px;position:relative;display:inline-block;vertical-align:middle}
</style>
