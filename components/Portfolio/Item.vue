<template>
  <div class="grid sm:grid-flow-row lg:grid-cols-2">
    <div class="pt-2 lg:pt-0 lg:pr-5 order-2 lg:order-1">
      <h2
        class="pr-1 text-white tracking-wider text-3xl text-stroke font-bold inline-block"
        :style="{ background : halfBackground(portfolio.bgColor)}"
      >
        {{portfolio.title}}
      </h2>
      <p class="py-4">
         {{portfolio.description}}
      </p>
      <button class="btn border border-white inline-block">View Project</button>    
    </div>
    <div class="border h-full min-h-2 border-white rounded-md bg-cover bg-center order-1 lg:order-2" :style="{backgroundImage : portfolioBackground(portfolio.image.provider, portfolio.image.src)}" />
  </div>
</template>
<script>
export default {
  name: "PortfolioItem",
  props: ['portfolio'],
  methods:{
    halfBackground(hexColor){
      return `linear-gradient(to bottom,#ffffff00 0,#ffffff00 55%,${hexColor} 56%,${hexColor} 100%)`
    },
    portfolioBackground(provider,file){
      if(provider === 'static'){
        return `url(assets/images/portfolio/${file})`
      }else{
        return `url(${file})`
      }
    }
  }
};
</script>
