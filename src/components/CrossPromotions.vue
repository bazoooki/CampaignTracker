<template>
  <v-layout row wrap>
    <v-flex xs12 teal lighten-2 ref="container">
      <span>Cross Promotions</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CrossPromotions',
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
