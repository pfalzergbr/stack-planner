<template>
  <the-navigation></the-navigation>
  <router-view/>
</template>

<script>

import TheNavigation from '@/components/TheNavigation.vue';
export default {
  components: { TheNavigation }
}
</script>

<style lang="scss">

</style>
