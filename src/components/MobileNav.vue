<template>
<section class="nav">
  <div class="nav-logo">
    <img src="../assets/logo.png" alt="logo" class="logo">
  </div>
  <div class="nav-menu">
    <ul class="nav-menu-list">
      <li class="nav-list-item">About Me</li>
      <li class="nav-list-item">Github</li>
    </ul>
  </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav {
  height: 20vh;
  max-width: 100%;
  display: flex;
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
  width: 100%;
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
  transition: 0.5s ease-in-out all;
}

.nav-list-item:hover {
  background: #222;
}

.logo {
  width: 100%;
  padding-bottom: 10px;
}
</style>
