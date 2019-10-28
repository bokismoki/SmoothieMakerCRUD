<template>
  <div class="smoothiesMaker">
    <div class="nav">
      <h1 @click="goToHome" class="routerLink">Smoothie Maker App</h1>
      <div @click="goToAddSmoothie" class="addSmoothieCircle routerLink">
        <i class="fa fa-plus fa-2x"></i>
      </div>
    </div>
    <div class="loaderContainer" v-if="isLoading">
      <img src="./assets/91.gif" class="loader" alt="Loading Animation" />
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SmoothieMaker",
  data() {
    return {};
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "smoothies" });
    },
    goToAddSmoothie() {
      this.$router.push({ name: "addSmoothie" });
    }
  },
  computed: {
    ...mapGetters(["isLoading"])
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Times New Roman", Times, serif;
  position: relative;
}
.smoothiesMaker {
  padding-bottom: 5em;
  .nav {
    background-color: #265abb;
    max-width: 100vw;
    height: 140px;
    position: relative;
    color: #fff;
    z-index: 999;
    .routerLink {
      cursor: pointer;
    }
    h1 {
      display: inline-block;
      font-size: 3.5em;
      font-weight: 100;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1em;
    }
    .addSmoothieCircle {
      position: absolute;
      right: 4em;
      bottom: -2.5em;
      background-color: #ee2c53;
      padding: 2em;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .loaderContainer {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
    width: 100%;
    height: 100%;
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>