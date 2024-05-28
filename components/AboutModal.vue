<template>
  <div class="modal-overlay p-4" @click.self="$emit('close')">
    <div class="modal-content bg-white p-4 md:p-10 lg:p-20 max-w-screen-xl relative rounded-3xl">
      <button class="close-button absolute text-md md:text-xl lg:text-2xl bg-neutral-300 md:p-2 rounded-full text-center w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14" @click="close">x</button>
      <img :src="image.modalSrc" :alt="image.alt" class="modal-image max-w-full" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: Object
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.close-button {
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .close-button {
    top: 50px;
    right: 50px;
  }
}

</style>