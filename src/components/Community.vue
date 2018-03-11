<template>
  <v-layout row wrap>
    <v-flex xs12 light-blue lighten-2 ref="container">
      <span>Community</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Community',
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
