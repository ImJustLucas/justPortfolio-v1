<template>
  <div class="container">
    <div class="split right"></div>
    <div class="content wrap">
      <div class="splitContent left-section">
        <h1 class="title">about <span class="blue">me</span></h1>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          mauris sit amet ante elementum efficitur ut ultricies nisi.
        </p>
        <h3>skills :</h3>
        <div class="imgContainer">
          <div class="vue_img imgBlock">
            <img src="~/assets/img/vue.png" alt="vuejs img" />
          </div>
          <div class="nuxt_img imgBlock">
            <img src="~/assets/img/nuxt.png" alt="nuxtjs img" />
          </div>
          <div class="nodejs_img imgBlock">
            <img src="~/assets/img/nodejs.png" alt="nodejs img" />
          </div>
          <div class="wordpress_img imgBlock">
            <img src="~/assets/img/wordpress.png" alt="wordpress img" />
          </div>
          <div class="strapi_img imgBlock">
            <img src="~/assets/img/strapi.png" alt="strapi img" />
          </div>
          <div class="figma_img imgBlock">
            <img src="~/assets/img/figma.png" alt="figma img" />
          </div>
        </div>
        <div class="personalInfo">
          <p>name: lucas bellier</p>
          <p>email: bellierlucas.pro@gmail.com</p>
          <p>tel: 06.51.32.18.63</p>
        </div>
        <div class="credit">
          <p>Portfolio v1 | 2021 - 202X ?</p>
        </div>
      </div>
      <div class="splitContent left-section"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Lucas BELLIER | A propos",
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

<style>
.split.right {
  position: absolute;
  z-index: -1;
  width: 50%;
  height: 100vh;
  right: 0px;
  top: 0px;
  background-color: #e3f6fb;
}

img {
  width: 50%;
}

.content {
  display: flex;
  justify-content: center;
}

.splitContent {
  width: 50%;
  height: 90vh;
  padding: 0 20px;
}

.left-section {
  text-align: center;
}

h1.title {
  font-size: 72px;
  margin: 80px 0;
  text-transform: uppercase;
  font-weight: bold;
}

p.description {
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  text-transform: uppercase;
  font-size: 18px;
  margin: 20px 0 50px 0;
  font-weight: bold;
}

.imgContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.imgBlock {
  width: 24%;
}
.personalInfo {
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
}

.credit {
  margin-top: 100px;
  align-self: flex-end;
}
</style>
