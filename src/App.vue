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
}
h3{font-weight: 400;font-size: 18px}
.big_title{color: #43424f;font-size: 30px;font-weight: 400;position: relative;width: auto !important;display: inline-block;}
.big_title .bot_line{width: 100%;position: absolute;height: 2px;background: rgba(67, 66, 79, .3);bottom: -2px;}
/*<h1 class="big_title">
        <span>Overview</span>
        <div class="bot_line"></div>
      </h1>*/
</style>
