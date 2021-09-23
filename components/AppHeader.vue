<template>
  <div id="header" class="wrap">
    <div class="title"><nuxt-link to="/">Lucas.</nuxt-link></div>
    <div class="nav">
      <ul>
        <li @click="handleClickEvent()" class="hvr-underline-from-center">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li @click="handleClickEvent()" class="hvr-underline-from-center">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li @click="handleClickEvent()" class="hvr-underline-from-center">
          <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickEvent() {}
  }
};
</script>

<style lang="scss">
#header {
  position: relative;
  text-transform: uppercase;
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  padding-top: $pad-s;
}

div.title {
  font-weight: bold;
  font-size: 36px;
  padding-left: 20px;
}

div.title a {
  color: #000;
  text-decoration: none;
}

.nav {
  max-width: 45%;
}

div.nav ul {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

div.nav ul li {
  margin-right: 25px;
  padding-bottom: 5px;
  font-size: 22px;
  text-align: right;
}

div.nav ul li a {
  text-decoration: none;
  color: black;
}

@media screen and (min-width: 768px) {
  div.nav ul {
    justify-content: space-between;
    flex-direction: row;
  }

  div.nav ul li {
    text-align: left;
  }
}
</style>
