<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-divider class="div"></v-divider>
    </v-flex>
    <v-flex xs12 ref="container" class="pa-5">
      <div class="big_title">
        <span>Popularity
        <div class="bot_line"></div>
        </span>
      </div>      
    </v-flex>
    <v-flex xs12>
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
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
