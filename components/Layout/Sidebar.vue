<template>
  <nav class="drop-shadow-lg shadow-lg  w-14 bg-sidebar-black fixed h-screen py-10 flex flex-col justify-between transition-all">
    <div
      class="text-lg
        font-inter font-light
        grid grid-flow-col
        gap-x-4
        rotate-90
        transform-gpu
        list-link
      "
    >
      <a href="#about" class="active">about</a>
      <a href="#works">works</a>
      <a href="#contact">contact</a>
    </div>

    <div class="text-lg grid grid-flow-row justify-center gap-y-3 social-media">
      <a href="https://github.com/achmadawdi"><fa-icon :icon="['fab', 'github']"/></a>
      <a href="https://www.linkedin.com/in/achmad-awdi-033aa51a0/"><fa-icon :icon="['fab', 'linkedin']" /></a>
      <a href="https://www.instagram.com/achmad_awdi/"><fa-icon :icon="['fab', 'instagram']" /></a>
      <a href="mailto:achmadawdi99@gmail.com"><fa-icon icon="envelope" /></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>