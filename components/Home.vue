<template>
  <section id="about" class="w-full pl-14 py-10 lg:py-0">
    <div class="container mx-auto container-lg px-10 lg:px-10">
      <div
        class="grid sm:grid-flow-row lg:grid-cols-2 place-items-center h-full lg:h-screen"
      >
        <div
          class="text-black font-inter w-full grid grid-cols-1 gap-y-5 order-2 lg:order-1"
        >
          <h1 class="text-5xl lg:text-6xl font-bold max-w-lg">
            Hello, I'm Achmad Awdi Z
          </h1>
          <p class="text-xl lg:text-2xl font-normal">
            I am a web developer as well as a beginner ui/ux designer, I am very
            interested in developing an application.
          </p>
          <div class="flex gap-x-4 text-lg lg:text-xl">
            <a href="#works"><button class="btn bg-black text-white">My works</button></a>
            <button class="btn border-black border">More about me</button>
          </div>
          <hr class="border-black" />
          <div
            class="w-full h-11 border-black border rounded-md relative overflow-hidden"
          >
            <Skillbar />
          </div>
        </div>
        <div
          class="w-full h-full lg:pl-40 flex justify-center items-center order-1 lg:order-2 pb-5 lg:pb-0"
        >
          <div
            :style="{
              background: 'url(/assets/images/me.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            class="h-80 lg:h-3/4 rounded-lg"
            v-gsap.fromTo="[
              {
                width: 0,
              },
              {
                width: '100%',
                duration: 1,
                delay: 1.8,
                ease: 'Expo.easeInOut',
              },
            ]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Skillbar from "./Portfolio/Skillbar.vue";
export default {
  components: { Skillbar },
  name: "Home",
};
</script>
