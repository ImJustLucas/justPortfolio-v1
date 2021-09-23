<template>
  <div class="container">
    <h1 class="title">Portfolio</h1>
    <p class="subtitle">
      This is all the project i’ve work on, freelance or with TaloDev.
    </p>
    <div class="content">
      yes, it's coming baby don't worry
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}

h1.title {
  font-size: 52px;
  margin: 80px 0 50px 0;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;

  @include min-s {
    font-size: 72px;
  }
}

.subtitle {
  text-align: center;
  margin-bottom: 30px;
  font-size: 22px;
}

.content {
  height: 100%;
  width: 100%;
  background-color: #e3f6fb;
  text-align: center;
  padding-top: $pad-xs;
  font-size: 22px;
}
</style>
