<template>
  <v-layout row wrap>
    <v-flex xs12 teal lighten-1 ref="container">
      <span>Cancellations</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Cancellations',
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
