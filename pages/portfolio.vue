<template>
  <div class="container">
    <h1 class="title">Portfolio</h1>
    <p class="subtitle">
      This is all the project i’ve work on, freelance, or with TaloDev.
    </p>
    <div class="content">
      yes
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Lucas BELLIER | Portfolio",
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

<style scoped>
.container {
  height: 100vh;
}

h1.title {
  font-size: 72px;
  margin: 80px 0 50px 0;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
}

.subtitle {
  text-align: center;
  margin-bottom: 30px;
}

.content {
  height: 100%;
  width: 100%;
  background-color: #e3f6fb;
}
</style>
