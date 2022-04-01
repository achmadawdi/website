<template>
  <div class="preload z-10 fixed w-full h-screen grid grid-rows-3">
    <div class="bg-black w-full"></div>
    <div class="bg-black w-full"></div>
    <div class="bg-black w-full"></div>
  </div>
</template>

<script>
export default {
  name: "Preload",
  mounted() {
    this.$nextTick(function () {
      this.preload();
    });
  },
  methods: {
    preload() {
      const gsap = this.$gsap;

      gsap.to(".preload div", {
        width: 0,
        stagger: 0.2,
        delay: 0.5,
        duration: 1,
        ease: "Expo.easeInOut",
        onComplete: function () {
          document.querySelector(".preload").remove();
        },
      });
    },
  },
};
</script>

<style>
</style>