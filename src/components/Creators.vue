<template>
  <v-layout row wrap>
    <v-flex xs12 teal lighten-3 ref="container">
      <span>Creators only</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Creators',
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
