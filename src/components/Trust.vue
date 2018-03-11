<template>
  <v-layout row wrap>
    <v-flex xs12 teal lighten-5 ref="container">
      <span>Trust</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Trust',
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
