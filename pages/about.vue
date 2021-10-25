<template>
  <div class="container">
    <div id="blue-BG"></div>
    <div class="content">
      <h1 class="title">about me</h1>
      <p class="subtitle">
        This is gonna be a description about me, one day i promise
      </p>
      <p>
        u can contact me just here :
      </p>
      <p class="contact">
        06.51.32.18.63 <br />
        
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "A propos",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Lucas BELLIER's website, made with love from Normandie. I'm a full stack developer based in France"
        }
      ]
    };
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
  right: 0px;
  background-color: $lightblue;
}

.content {
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: $pad-xl;

  h1.title {
    font-size: 52px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    padding-bottom: $pad-xs;
    @include min-s {
      font-size: 72px;
    }
  }

  .subtitle {
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-size: 22px;
  }

  .contact {
    padding-top: $pad-s;
  }
}
</style>
