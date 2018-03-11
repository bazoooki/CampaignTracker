<template>
  <v-layout row wrap>
    <v-flex xs12 light-blue lighten-4 ref="container">
      <span>Pledges</span>
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
    }
  }
}
</script>
<style scoped>
</style>
