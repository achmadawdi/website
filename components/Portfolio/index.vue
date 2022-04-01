<template>
  <section id="works" class="bg-black w-full min-h-screen pl-14 py-16 text-white font-inter">
    <div class="container mx-auto container-lg px-10 lg:px-10">
      <h1 class="font-bold text-5xl lg:text-6xl">Recent Work</h1>
      <div class="grid lg:grid-cols-2 py-10 gap-8 font-inter">
        <portfolio-item
          v-for="(portfolio, index) in portfolio"
          :key="index"
          :portfolio="portfolio"
        />
      </div>
      <div class="flex gap-x-4">
        <button class="btn bg-white text-black">See more</button>
        <button class="btn border border=white">Open Resume</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [],
    };
  },
  async fetch() {
    const portfolio = await this.$axios.$get(
      "https://api.minecraft-id.net/awditya/?data=portfolio"
    );
    this.portfolio = portfolio;
  },
};
</script>