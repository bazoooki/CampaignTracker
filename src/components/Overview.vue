<template>
  <v-layout row wrap>
    <v-flex xs12 light-blue lighten-5 ref="container">
      <span>Overview</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Overview',
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
