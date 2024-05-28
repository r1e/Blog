<template>
  <BaseWrapper class="max-w-screen-md mb-24 py-10 bg-white rounded-3xl">
    <div class="mb-8"><img :src="blog.image" /></div>
    <ul>
      <li v-for="tag in blog.tags" :key="tag"
        class="inline-block bg-gray-100">{{tag}}
      </li>
    </ul>
    <h1 class="text-3xl my-4">{{ blog.title }}</h1>
    <div class="mb-8">{{ new Date(blog.date).toLocaleDateString('ja-JP') }}</div>
    <ContentRenderer :value="blog" />
  </BaseWrapper>
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