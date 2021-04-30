<template>
  <div id="header" class="wrap">
    <div class="title">Lucas.</div>
    <div class="nav">
      <ul>
        <li class="hvr-underline-from-center">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="hvr-underline-from-center">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="hvr-underline-from-center">
          <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
#header {
  position: relative;
  text-transform: uppercase;
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  margin-top: 20px;
}

div.title {
  font-weight: bold;
  font-size: 36px;
}

div.nav ul {
  display: flex;
  justify-content: space-between;
}

div.nav ul li {
  margin-right: 25px;
  padding-bottom: 5px;
  font-size: 25px;
}

div.nav ul li a {
  text-decoration: none;
  color: black;
}
</style>
