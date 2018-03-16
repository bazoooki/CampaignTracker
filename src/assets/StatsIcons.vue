<template>
  <div>
    <div v-if="icon === 1" class="l_icon" style="width:14px;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.97 25.16"><path d="M9.09,17a2.32,2.32,0,0,0-.5-1.57,4.62,4.62,0,0,0-1.74-1.08q-1.24-.51-2.3-1A8,8,0,0,1,2.75,12.1a4.74,4.74,0,0,1-1.17-1.59,5.29,5.29,0,0,1-.41-2.18A4.69,4.69,0,0,1,2.62,4.8,6.23,6.23,0,0,1,6.48,3.18V.5h2V3.23a5.67,5.67,0,0,1,3.65,1.91,6,6,0,0,1,1.33,4H9.18a3.46,3.46,0,0,0-.51-2,1.67,1.67,0,0,0-1.45-.71,1.64,1.64,0,0,0-1.3.53,2.13,2.13,0,0,0-.46,1.45A2.06,2.06,0,0,0,6,9.85,5.26,5.26,0,0,0,7.71,10.9q1.18.5,2.23,1a8.52,8.52,0,0,1,1.81,1.23,5,5,0,0,1,1.19,1.6,5.11,5.11,0,0,1,.43,2.2A4.78,4.78,0,0,1,12,20.51a5.93,5.93,0,0,1-3.75,1.6v2.55h-2V22.09A6.46,6.46,0,0,1,2,20.2,6,6,0,0,1,.5,16H4.78a3.32,3.32,0,0,0,.64,2.2,2.26,2.26,0,0,0,1.82.76,1.8,1.8,0,0,0,1.36-.51A2,2,0,0,0,9.09,17Z" style="fill:#fff;stroke:#272b37;stroke-miterlimit:10"/></svg>
    </div>
    <div v-if="icon === 2" class="l_icon" style="width:25px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.48 25.41"><path d="M12.24,14.31c-3.22,0-5.84-4.83-5.84-8a5.84,5.84,0,0,1,11.67,0C18.07,9.49,15.46,14.31,12.24,14.31Z" style="fill:#fff"/><path d="M12.24,1a5.34,5.34,0,0,1,5.34,5.34c0,3.2-2.64,7.48-5.34,7.48S6.9,9.53,6.9,6.34A5.34,5.34,0,0,1,12.24,1m0-1A6.34,6.34,0,0,0,5.9,6.34c0,3.5,2.84,8.48,6.34,8.48s6.34-5,6.34-8.48A6.34,6.34,0,0,0,12.24,0Z" style="fill:#272b37"/><path d="M.5,24.91v-5a7.39,7.39,0,0,1,5-7l.67-.23c1.67,2.66,3.88,4.18,6.12,4.18s4.45-1.52,6.12-4.18l.67.23a7.39,7.39,0,0,1,5,7v5Z" style="fill:#fff"/><path d="M5.91,13.32c1.74,2.6,4,4.08,6.32,4.08s4.59-1.48,6.32-4.08l.29.1a6.89,6.89,0,0,1,4.62,6.5v4.49H1V19.92a6.89,6.89,0,0,1,4.62-6.5l.3-.1m12.22-1.21c-1.41,2.4-3.53,4.28-5.9,4.28s-4.49-1.88-5.9-4.28l-1,.37A7.89,7.89,0,0,0,0,19.92v5.49H24.48V19.92a7.89,7.89,0,0,0-5.29-7.45l-1-.37Z" style="fill:#272b37"/></svg>
    </div>
    <div v-if="icon === 3" class="l_icon" style="width:24px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.41 31.04"><polygon points="22.89 30.54 0.52 30.54 1.52 6.28 21.89 6.28 22.89 30.54" style="fill:#fff;stroke:#272b37;stroke-miterlimit:10"/><line x1="1.13" y1="27.38" x2="22.28" y2="27.38" style="fill:none;stroke:#272b37;stroke-miterlimit:10"/><path d="M17.3,9.44V6.09A5.59,5.59,0,0,0,11.71.5h0A5.59,5.59,0,0,0,6.11,6.09V9.44" style="fill:none;stroke:#272b37;stroke-linecap:round;stroke-linejoin:round"/></svg>
    </div>

    <div v-if="icon === 4" class="l_icon" style="width:22px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.48 20.73"><polyline points="0.5 0.5 0.5 20.23 20.23 20.23" style="fill:none;stroke:#272b37;stroke-linecap:round;stroke-linejoin:round"/><polyline points="3.56 16.46 9.95 10.06 12.76 12.88 20.73 4.91" style="fill:none;stroke:#272b37;stroke-linecap:round;stroke-linejoin:round"/><polyline points="16.98 4.66 20.98 4.66 20.98 8.66" style="fill:none;stroke:#272b37;stroke-linecap:round;stroke-linejoin:round"/></svg>
    </div>
    <div v-if="icon === 5" class="l_icon" style="width:34px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.19 23.35"><path d="M23.75.5H9.44A8.94,8.94,0,0,0,.5,9.44h0a8.94,8.94,0,0,0,8.94,8.94h4.47S15.14,22,18.7,22.58c-1.63-1.38,0-4.19,0-4.19h5a8.94,8.94,0,0,0,8.94-8.94h0A8.94,8.94,0,0,0,23.75.5Z" style="fill:#fff;stroke:#272b37;stroke-miterlimit:10"/></svg>
    </div>
    <div v-if="icon === 6" class="l_icon" style="width:26px">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.54 17"><rect x="0.5" y="0.5" width="25.54" height="16" style="fill:#fff;stroke:#272b37;stroke-miterlimit:10"/><polyline points="26.19 0.5 13.27 9.39 0.35 0.5" style="fill:none;stroke:#272b37;stroke-miterlimit:10"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsIcons',
  props: ['icon'],
  components: {
  },
  mounted () {
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.mid_txt{font-size: 18px;}
.val_txt{font-size: 18px;color: #4597b6;font-weight: 500}
.l_icon{width:14px;position:relative;display:inline-block;vertical-align:middle}
</style>
