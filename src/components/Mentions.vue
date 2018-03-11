<template>
  <v-layout row wrap>
    <v-flex xs12 teal lighten-4 ref="container">
      <span>Mentions</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Mentions',
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
