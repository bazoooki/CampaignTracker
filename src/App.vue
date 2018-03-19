<template>
  <v-app light>
    <router-view></router-view>
  </v-app>
</template>

<script>
require('vuetify/dist/vuetify.css')
require('font-awesome/css/font-awesome.css')
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: #43424f;
  background-color: #ececec
}
h3{font-weight: 400;font-size: 20px}
.big_title{color: #43424f;font-size: 30px;font-weight: 400;position: relative;width: auto !important;display: inline-block;}
.bot_line{width: 100%;position: absolute;height: 2px;background: rgba(67, 66, 79, .3);bottom: -2px;}
.divider.div{
    background-color: #ececec;
    height: 15px;
}
.vue-world-map .land{transition: all 0.2s}
.vue-world-map .land:hover{fill: #f5f5f5 !important;}
</style>
