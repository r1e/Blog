<template>
  <img :src="thumbnailSrc" :alt="alt"
    class="object-cover block w-full h-full mb-4 md:mb-0 thumbnail-image cursor-pointer rounded-md bg-neutral-100 opacity-45"
    @click="$emit('click')" />
</template>

<script setup>
defineProps({
  thumbnailSrc: String,
  alt: String,
  thumbnailClass: String
})
</script>

<style scoped>

.thumbnail-image {
  transition: opacity 0.3s ease; 
}

.thumbnail-image:hover {
  opacity: 1 !important;
}

</style>
