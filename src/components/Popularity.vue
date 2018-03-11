<template>
  <v-layout row wrap>
    <v-flex xs12 light-blue lighten-3 ref="container">
      <span>Popularity</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Popularity',
  mounted () {
  },
  methods: {
    sendData () {
      this.$emit('getHeight', this.$refs.container.clientHeight)
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
