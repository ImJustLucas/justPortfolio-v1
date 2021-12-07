<template>
  <div class="container">
    <div id="blue-BG"></div>
    <div class="content">
      <p class="text"><span class="blue">hey, i'm</span></p>
      <h1 class="title">Lucas bellier</h1>
      <p class="text typing">i'm a <span id="spanTyped" class="blue"></span></p>
      <div class="square">
        <p>
          <nuxt-link to="/about"
            >get started <br />
            <img
              :src="require('~/assets/img/arrow-right.svg')"
              alt="Flèche vers la droite"
          /></nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { init } from "ityped";

export default {
  head() {
    return {
      title: "Home",
    };
  },
  mounted() {
    const spanTyped = document.getElementById("spanTyped");
    init(spanTyped, {
      strings: ["web developer", "web designer", "nice guy :)"],
      backDelay: 2500
    });
  }
};
</script>

<style lang="scss" scoped>
#blue-BG {
  position: absolute;
  z-index: -1;
  width: 50vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background-color: $lightblue;
}

.content {
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding-top: $pad-xl;

  .square {
    width: 100px;
    height: 100px;
    background-color: $lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    transform: rotate(-45deg);
    margin-top: 50px;
    p {
      transform: rotate(45deg);
      text-transform: initial;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
a {
  color: $dark;
  text-decoration: none;
}

p.text {
  font-size: 22px;
  @include min-s {
    font-size: 28px;
  }

  @include min-m {
    font-size: 36px;
  }
}

.title {
  font-size: 46px;
  margin: 30px 0;
  @include min-s {
    font-size: 55px;
  }

  @include min-m {
    font-size: 72px;
  }
}

img {
  margin-top: 20px;
  width: 15px;
  animation: getStarted 2s infinite ease-in-out;
}

.ityped-cursor {
  font-size: 2.2rem;
  animation: blink 0.3s infinite;
}
</style>
