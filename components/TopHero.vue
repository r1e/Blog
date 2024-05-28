<template>
  <section class="relative pt-16 md:pt-24 mx-8">
    <img src="~/assets/img/hero.png" class="absolute hero-bg">
    <BaseWrapper class="
      max-w-screen-xl
      lg:relative lg:items-center lg:py-52
    ">
      <div>
        <h1>
          <TypingAnimation :text="typedText" :typingSpeed="150" class="
            hero-message font-bold text-4xl text-center !leading-normal py-10
            md:text-5xl md:!leading-normal
            lg:text-left lg:text-7xl lg:!leading-normal
            xl:text-8xl xl:!leading-normal
          "/>
        </h1>
      </div>
      <div class="
        hero-card
        bg-white rounded-xl p-10 max-w-80 mx-auto border-r-4 border-b-4 drop-shadow-2xl border-slate-100
        md:p-12
        lg:min-w-80 lg:absolute lg:rotate-6 lg:inset-x-2/3
      ">
        <div class="mb-8">
          <img class="h-12 md:h-14" src="~/assets/img/logo.svg">
        </div>
        <ul class="text-lg md:text-xl">
          <li class="py-1">Project Management</li>
          <li class="py-1">HR Development</li>
          <li class="py-1">Web Design</li>
          <li class="py-1">Coding</li>
          <li class="py-1">Sales</li>
        </ul>
        <div class="
          flex mt-10 items-end justify-between relative h-28
          md:mt-14">
          <div class="
            whitespace-nowrap text-2xl absolute z-10 mb-4 bg-white/70 p-1 font-bold
            md:text-3xl
            ">
            Rie Arai
          </div>
          <img src="~/assets/img/me.png" class="
            h-32 rounded-lg absolute right-0
            md:h-36 md:rounded-xl
          ">
        </div>
      </div>
    </BaseWrapper>
  </section>
</template>

<script>

import TypingAnimation from '~/components/TypingAnimation.vue';

export default {
  components: {
    TypingAnimation
  },
  data() {
    return {
      typedText: "This is Rie Arai's<br>Website."
    };
  }
};

</script>

<style scoped>

.hero-message {
  min-height: 4em;
  height: 100%;
  display: block;
}

@media (min-width: 1024px) {
  .hero-card {
    top: 15%;
  }
  .hero-bg {
    left: 35%;
    width: auto !important;
  }
}

@media (min-width: 1280px) {
  .hero-bg {
    left: 45%
  }
}

.hero-bg {
  top: -20%;
  z-index: -200;
  width: 100%;
}

</style>