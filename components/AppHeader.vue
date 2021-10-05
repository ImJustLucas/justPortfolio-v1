<template>
  <div id="header">
    <div class="nav-bar">
      <div class="title" :class="{ active: NavIsOpen }" @click="closeNav()">
        <nuxt-link to="/">Lucas.</nuxt-link>
      </div>

      <div id="nav-bar">
        <div class="nav-btn" :class="{ active: NavIsOpen }" @click="OpenNav()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <transition name="slide-up">
      <div
        class="nav-bar--content"
        :class="{ active: NavIsOpen }"
        v-if="NavIsOpen"
      >
        <ul>
          <li class="hvr-underline-from-center" @click="closeNav()">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="hvr-underline-from-center" @click="closeNav()">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li class="hvr-underline-from-center" @click="closeNav()">
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NavIsOpen: false
    };
  },
  methods: {
    OpenNav() {
      this.NavIsOpen = !this.NavIsOpen;
    },
    closeNav() {
      this.NavIsOpen = false;
    }
  }
};
</script>

<style lang="scss">
#header {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  width: 100vw;

  .nav-bar {
    position: absolute;
    text-transform: uppercase;
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    width: 100vw;
    max-width: 1400px;
    top: 0;
    left: auto;
    right: auto;
    padding-top: $pad-s;

    .title {
      font-weight: bold;
      font-size: 36px;
      padding-left: 20px;
      a {
        color: $dark;
        text-decoration: none;
        transition: $trans;
      }

      &.active {
        a {
          color: $light;
        }
      }
    }
    #nav-bar {
      margin-right: $pad-s;
      align-content: center;

      .nav-btn {
        width: 30px;
        height: 21px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        span {
          width: 25px;
          height: 2px;
          background-color: $dark;
          transition: $trans;
        }

        &.active {
          justify-content: center;
          span {
            background-color: $light;

            &:nth-child(1) {
              transform: rotate(45deg);
              position: relative;
              top: 1px;
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
              position: relative;
              top: -1px;
            }
            &:nth-child(2) {
              display: none;
            }
          }
        }
      }
    }
  }

  .nav-bar--content {
    color: $light;
    background-color: $dark;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 35vh;
    position: relative;
    z-index: 10;

    li {
      padding: $pad-xxs 0;

      @include min-m {
        margin: 0 $pad-s;
        text-align: center;
      }

      a {
        text-transform: uppercase;
        color: $light;
        text-decoration: none;
        font-size: 28px;
      }
    }
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s;
}
.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}
</style>
