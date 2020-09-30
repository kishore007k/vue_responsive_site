<template>
<div id="nav">
  <MobileNav class="mobile-nav" />
  <div class="view-container">
    <router-view />
  </div>
</div>
</template>

<script>
import MobileNav from '@/components/MobileNav'

export default {
  components: {
    MobileNav
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #ddd;
}

@media screen and (max-width: 420px) {
  .dektop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }
}
</style>
