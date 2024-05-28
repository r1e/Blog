<template>
  <section class="py-32 p-8" id="about">
    <div class="max-w-screen-xl mx-auto h-full bg-gray-800 py-12 px-6 md:p-16 rounded-3xl">
      <h2 class="text-3xl md:text-5xl font-bold text-center text-gray-50 mb-8 w-full">About</h2>
      <p class="text-gray-50 text-center mb-10 leading-7">
        ビジネスサイド・開発サイド、上流から下流までの業務経験を活かし、<br>前後の工程と連携してプロジェクトを推進します。
      </p>
      <div class="bg-white rounded-md">
        <div class="about-grid px-4 md:gap-8 md:p-8">
          <AboutImage
            v-for="image in images"
            :key="image.id"
            :src="image.thumbnailSrc"
            :alt="image.alt"
            :class="image.thumbnailClass"
            @click="openModal(image)"
          />
          <AboutModal v-if="selectedImage" :image="selectedImage" @close="closeModal" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import tnPath1 from '@/assets/img/tn-pm.svg'
import tnPath2 from '@/assets/img/tn-design.svg'
import tnPath3 from '@/assets/img/tn-sales.svg'
import tnPath4 from '@/assets/img/tn-coding.svg'
import tnPath5 from '@/assets/img/tn-hrd.svg'

import modalPath1 from '@/assets/img/about-pm.png'
import modalPath2 from '@/assets/img/about-design.png'
import modalPath3 from '@/assets/img/about-sales.png'
import modalPath4 from '@/assets/img/about-coding.png'
import modalPath5 from '@/assets/img/about-hrd.png'

const images = ref([
  { id: 1,
    thumbnailSrc: tnPath1,
    thumbnailClass:'about1',
    modalSrc: modalPath1,
    alt: 'Project Management'
  },
  { id: 2,
    thumbnailSrc: tnPath2,
    thumbnailClass:'about2',
    modalSrc: modalPath2,
    alt: 'Design'
  },
  { id: 3,
    thumbnailSrc: tnPath3,
    thumbnailClass:'about3',
    modalSrc: modalPath3,
    alt: 'Sales'
  },
  { id: 4,
    thumbnailSrc: tnPath4,
    thumbnailClass:'about4',
    modalSrc: modalPath4,
    alt: 'Coding'
  },
  { id: 5,
    thumbnailSrc: tnPath5,
    thumbnailClass:'about5',
    modalSrc: modalPath5,
    alt: 'HR Development'
  },
])

const selectedImage = ref(null)

const openModal = (image) => {
  selectedImage.value = image
}

const closeModal = () => {
  selectedImage.value = null
}

</script>

<style scoped>

@media (min-width: 768px) {
  .about-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}
  .about1 { grid-area: 1 / 1 / 5 / 3; }
  .about2 { grid-area: 1 / 3 / 3 / 5; }
  .about3 { grid-area: 3 / 3 / 5 / 5; }
  .about4 { grid-area: 5 / 1 / 7 / 3; }
  .about5 { grid-area: 5 / 3 / 7 / 5; }

}


</style>
