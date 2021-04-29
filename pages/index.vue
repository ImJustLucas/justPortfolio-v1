<template>
  <div class="container">
    <div class="split left"></div>
    <div class="content wrap">
      <p class="text"><span class="blue">hey ! i'm</span></p>
      <h1 class="title">Lucas bellier</h1>
      <p class="text typing">i'm a <span class="blue">web developer</span></p>
      <div class="square">
        <p>
          <nuxt-link to="/about"
            >get started <br />
            <i class="fas fa-arrow-right"></i
          ></nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Lucas BELLIER | Home",
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
.split.left {
  position: absolute;
  z-index: -1;
  width: 50%;
  height: 1024px;
  left: 0px;
  top: 0px;
  background-color: #e3f6fb;
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
  margin-top: 150px;
}

.square {
  width: 100px;
  height: 100px;
  background-color: #e3f6fb;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transform: rotate(-45deg);
  margin-top: 50px;
}

.square p {
  transform: rotate(45deg);
  text-transform: initial;
}

a {
  color: black;
  text-decoration: none;
}

.square p:hover {
  cursor: pointer;
}

p.text {
  font-size: 36px;
}

.title {
  font-size: 72px;
  margin: 30px 0;
}

i {
  margin-top: 20px;
}
</style>
