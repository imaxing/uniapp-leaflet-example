<!-- #ifdef APP-PLUS -->
<template></template>
<!-- #endif -->

<!-- #ifdef H5 -->
<template>
  <router-view></router-view>
</template>
<!-- #endif -->

<script>
export default {
  mpType: 'app'
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
.leaflet-vue-marker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
