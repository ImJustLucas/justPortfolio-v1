<template>
  <div>
    <AppHeader />
    <Nuxt />
    <div class="cursor"></div>
    <div class="cursor2"></div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";

export default {
  components: {
    AppHeader
  },
  mounted() {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", function(e) {
      cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
  }
};
</script>

<style>
.cursor {
  position: fixed;
  width: 50px;
  height: 50px;
  border: 1px solid #4a69bd;
  border-radius: 50%;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.1s;
}

.cursor2 {
  position: fixed;
  width: 8px;
  height: 8px;
  border: 1px solid #4a69bd;
  background-color: #4a69bd;
  border-radius: 50%;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.15s;
}
</style>
