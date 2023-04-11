<template>
  <section
    id="works"
    class="bg-black w-full min-h-screen pl-14 py-20 text-white font-inter"
  >
    <div class="container mx-auto container-lg px-10 lg:px-10">
      <h1 class="font-bold text-5xl lg:text-6xl">Recent Work</h1>
      <div class="grid lg:grid-cols-2 py-10 gap-10 font-inter">
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
      portfolio: [
        {
          title: "Cute Animals",
          description:
            "A racing map with cute characters that was released on Minecraft Bedrock Marketplace, and here I have a role as a Bedrock Developer in Hellocraft team.",
          bgColor: "#FFB013",
          image: {
            provider: "static",
            src: "cute_animal.webp",
          },
          link: "https://www.minecraft.net/en-us/marketplace/pdp?id=e3743da0-d266-4a88-887f-61d8caa1bb8e",
        },
        {
          title: "Museum",
          description:
            "Equator Museum, is a virtual museum on minecraft. This virtual museum was built by MIVUBI Team. this website is used for 360 view of the museum",
          bgColor: "#0069b2",
          image: {
            provider: "static",
            src: "khatulistiwa.webp",
          },
          link: "https://museumkhatulistiwa.minecraft-id.net/",
        },
        {
          title: "MinecraftID Store",
          description:
            "I have developed this website as a full-stack developer. This website functions as a platform for transactions between games and other products.",
          bgColor: "#4D8ACD",
          image: {
            provider: "static",
            src: "minecraftid_store.webp",
          },
          link: "https://www.minecraft-id.net/",
        },
        {
          title: "Dream Light",
          description:
            "This website is used as an information site about the team as well as a professional portfolio website about , game map designer, and game map store.",
          bgColor: "#473BD6",
          image: {
            provider: "static",
            src: "dreamlight.webp",
          },
          link: "https://dreamlightbuilds.com/",
        },
        {
          title: "RAM Museum",
          description:
            "Reconnected Access Memory is an art project by Riyan Kresnandi in collaboration with MIVUBI., and here I have a role as a Bedrock Developer in Mivubi team.",
          bgColor: "#ffffff",
          image: {
            provider: "static",
            src: "ram_museum.webp",
          },
          link: "https://ram.minecraft-id.net/",
        },
        {
          title: "FFBID",
          description:
            "Fest From Block Indonesia, is a virtual music festival, held virtually through the minecraft game, on this website providing information and live music in game.",
          bgColor: "#ffffff",
          image: {
            provider: "static",
            src: "ffbid.webp",
          },
          link: "https://www.minecraft-id.net/",
        },
      ],
    };
  },
};
</script>
