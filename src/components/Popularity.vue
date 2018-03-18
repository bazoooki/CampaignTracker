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
        <v-flex xs6 accent> left menus</v-flex>
        <v-flex xs6></v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      
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
