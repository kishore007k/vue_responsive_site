<template>
<div id="nav">
  <div class="view-container">
    <DesktopNav class="desktop-nav" />
    <MobileNav class="mobile-nav" />
    <router-view />
  </div>
</div>
</template>

<script>
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";

export default {
  components: {
    DesktopNav,
    MobileNav
  }
};
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

.view-container {
  display: block;
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
}

@media screen and (max-width: 420px) {
  .desktop-nav {
    display: block;
  }

  .mobile-nav {
    display: none;
  }
}
</style>
