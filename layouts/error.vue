<template>
  <div>
    <div id="blue-BG"></div>
    <div class="content">
      <h2>404</h2>
      <p>you should not be there ...</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#blue-BG {
  position: absolute;
  z-index: -1;
  width: 50vw;
  height: 100vh;
  top: 0px;
  left: 0px;
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
  padding-top: $pad-l;

  h2 {
    font-size: 200px;
  }

  p {
    padding-top: $pad-m;
  }
}
</style>
