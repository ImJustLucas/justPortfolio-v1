<template>
  <main>
    <transition name="loading">
      <div class="loader" v-if="!isloaded">
        <p id="number">0</p>
      </div>
    </transition>
    <AppHeader />
    <transition name="slide">
      <Nuxt />
    </transition>
    <div class="cursor" v-if="$device.isDesktop"></div>
    <div class="cursor2" v-if="$device.isDesktop"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isloaded: false
    };
  },
  mounted() {
    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    let loader = document.getElementById("number");
    document.addEventListener("mousemove", function(e) {
      if (cursor != null && cursor2 != null) {
        cursor.style.cssText = cursor2.style.cssText =
          "left: " + e.clientX + "px; top: " + e.clientY + "px;";
      }
    });

    const loaderInterval = setInterval(() => {
      if (loader.innerText === "100") {
        loader.classList.add("leave");
        setTimeout(() => {
          clearInterval(loaderInterval);
          return (this.isloaded = true);
        }, 500);
      } else {
        loader.innerText = 1 + parseInt(loader.innerText);
        console.log(loader.innerText);
      }
    }, 20);
  }
};
</script>

<style lang="scss">
span.blue {
  color: $darkblue;
}

.loader {
  width: 100vw;
  height: 100vh;
  color: $dark;
  background-color: $lightblue;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  #number {
    font-size: 72px;
    transition: all 1s ease-out;

    &.leave {
      opacity: 0;
    }
  }
}

.cursor {
  position: fixed;
  width: 50px;
  height: 50px;
  border: 1px solid $darkblue;
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
  border: 1px solid $darkblue;
  background-color: $darkblue;
  border-radius: 50%;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: 0.15s;
}

.loading-enter-active,
.loading-leave-active {
  transition: all 1s;
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
