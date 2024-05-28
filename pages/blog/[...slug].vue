<template>
  <div class="pt-28 md:pt-44 px-8">
  <BaseWrapper class="!max-w-screen-md mb-24 px-4 py-8 md:p-10 bg-white rounded-3xl blog-detail">
    <div class="mb-8"><img :src="blog.image" /></div>
    <ul>
      <li v-for="tag in blog.tags" :key="tag"
        class="text-sm bg-gray-200 inline-block rounded-full px-2 mr-2">{{tag}}
      </li>
    </ul>
    <h1 class="text-2xl md:text-3xl my-4 font-bold">{{ blog.title }}</h1>
    <div class="text-sm mb-8">{{ new Date(blog.date).toLocaleDateString('ja-JP') }}</div>
    <ContentRenderer :value="blog" />
  </BaseWrapper>
  </div>
</template>

<style scoped>

</style>

<script setup>
  const route = useRoute()
  const blog = await queryContent(route.path).findOne()
  const meta = {
    title: blog.title,
  }
  useHead(meta)
</script>

<style>

.blog-detail {

  h2 {
    font-size: large;
    border-left: 5px solid #eee000;
    padding-left: .5em;
    margin-top: 2rem;
    font-weight: bold;
  }
  
  p {
    line-height: 2em;
    margin-top: 2rem;
  }

}

</style>