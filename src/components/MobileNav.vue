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
  height: 20vh;
  max-width: 100%;
  display: block;
  flex-direction: column;
  background: #333;
  color: #fff;
  margin: 0 5px;
  border-radius: 0 0 10px 10px;
}

.nav-logo {
  width: 80px;
  margin: 0 auto;
}

.nav-menu {
  display: block;
  width: 80%;
  margin: 0 auto;
}

.nav-menu-list {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.nav-list-item {
  list-style: none;
  padding: 10px;
  box-shadow: 0 1px 10px #222;
  background: #444;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s ease-in-out all;
}

.nav-list-item:hover {
  background: #222;
}

.home,
.about {
  color: #fff;
  text-decoration: none;
}

.logo {
  width: 100%;
  padding-bottom: 10px;
}

@media (max-width: 420px) {
  .nav {
    display: block;
  }
}
</style>
