<template>
<section class="nav">
  <div class="nav-logo">
    <img src="../assets/logo.png" alt="logo" class="logo" />
  </div>
  <div class="nav-menu">
    <ul class="nav-menu-list">
      <li class="nav-list-item">
        <router-link class="home" to="/">Home</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="about" to="/about">About</router-link>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  display: block;
}

.logo {
  width: 120px;
}
</style>
