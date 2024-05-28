<template>
  <section class="px-8" id="blog">
    <BaseWrapper class="py-20 lg:py-32">
      <h2 class="text-5xl font-bold text-center mb-28">Blog</h2>
      <div>
        <div v-for="b in blog" :key="b.slug">
          <div v-if="b.head" class="relative">
            <div class="absolute w-6 top-8 left-8 lg:top-12 lg:left-12">
              <img src="~/assets/img/pin.svg" class="rotate-030">
            </div>
            <nuxt-link :to="b._path" class="block lg:flex blog-card rounded-3xl p-8 items-center mb-8">
              <img :src="`${b.image}`" alt="{b.title}" class="lg:max-w-lg lg:mr-6 xl:max-w-2xl">
              <div class="mt-4 lg:mt-0">
                <ul class="mb-4">
                  <li v-for="tag in b.tags" :key="tag" class="text-sm bg-gray-200 inline-block rounded-full px-2 mr-2">
                    {{ tag }}
                  </li>
                </ul>
                <h3 class="text-2xl lg:text-4xl leading-normal">{{ b.title }} </h3>
                <div class="leading-relaxed mt-4">{{ b.discription }}</div>
                <div class="mt-4 text-gray-500 text-sm">{{ new Date(b.date).toLocaleDateString('ja-JP') }}</div>
              </div>
            </nuxt-link>
          </div>
          <div v-else>
            <nuxt-link :to="b._path">
              <div class="blog-card p-8 mb-8 rounded-3xl md:flex">
                <div class="md:mr-8 mb-8 md:mb-0">
                  <img :src="`${b.image}`" alt="{b.title}" class="md:h-28 w-full md:w-auto ">
                </div>
                <div>
                  <li v-for="tag in b.tags" :key="tag" class="text-sm bg-gray-200 inline-block rounded-full px-2 mr-2">
                    {{ tag }}
                  </li>
                  <h3 class="mt-2 md:mt-4 text-xl md:text-2xl">{{ b.title }}</h3>
                  <div class="mt-2 md:mt-4 text-gray-500 text-sm">{{ new Date(b.date).toLocaleDateString('ja-JP') }}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </BaseWrapper>
  </section>
</template>

<style>
.blog-card {
  background-color: rgba(255, 255, 255, .5);
  transition: background-color 0.3s ease-in-out;
}

.blog-card:hover {
  background-color: #fff
}

.blog-card:hover h3 {
  text-decoration: underline #fff800 5px;
}
</style>

<script setup>
const { data: blog } = await useAsyncData("blog", () =>
  queryContent("blog").limit(4).find()
)
useHead({
  title: "blog",
})
</script>
