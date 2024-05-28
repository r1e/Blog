<template>
  <header class="
    h-16 px-8 flex items-center justify-between fixed w-full z-50
    md:h-24">
    <a href="/"><img class="h-8 md:h-10" src="~/assets/img/logo.svg"></a>
    <nav class="space-x-6 md:space-x-12">
      <a class="text-gray-500" href="#blog">Blog</a>
      <a class="text-gray-500" href="#about">About</a>
      <a class="text-gray-500" href="#contact">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: rgba(221, 221, 221, 0.5);
  backdrop-filter: blur(20px);
}
</style>