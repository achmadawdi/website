<template>
  <section
    id="contact"
    class="bg-yellow-300 w-full pl-14 py-12 text-black font-inter"
  >
    <div class="container mx-auto container-lg px-10 lg:px-10">
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="max-w-sm">
          <h1 class="font-bold text-5xl lg:text-6xl">Contact</h1>
          <div>
            <p class="py-4">
              Thank you for visiting my site. If you have any further questions,
              please feel free to contact me, I will reply as soon as possible.
            </p>
            <p class="text-lg lg:text-xl truncate">
                <a href="mailto:achmadawdi99@gmail.com"><fa-icon icon="envelope" /> achmadawdi99@gmail.com</a>
            </p>
            <p class="text-lg lg:text-xl">
              <fa-icon :icon="['fab', 'discord']" /> awditya#7811
            </p>
          </div>
        </div>
        <form class="max-w-sm grid grid-cols-2 gap-4">
          <p class="text-lg font-bold col-span-2">Notify me,</p>
          <input
            type="email"
            class="bg-transparent outline-none placeholder-black border-black border rounded-md px-4 py-2"
            placeholder="email"
          />
          <input
            type="text"
            class="bg-transparent outline-none placeholder-black border-black border rounded-md px-4 py-2"
            placeholder="name"
          />
          <textarea
            class="border-black border outline-none placeholder-black bg-transparent col-span-2 px-4 py-4 rounded-md"
            placeholder="message"
          ></textarea>
          <button class="btn col-span-2 bg-black text-white">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style></style>
