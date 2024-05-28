<template>
  <div ref="typing" class="typing w-full">
    <span v-html="displayText"></span>
    <span id="cursor" class="cursor" v-show="showCursor">|</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    typingSpeed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      displayText: '',
      currentIndex: 0,
      showCursor: true
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      const interval = setInterval(() => {
        if (this.currentIndex === this.text.length) {
          clearInterval(interval);
          this.showCursor = false;
          return;
        }
        this.displayText += this.text[this.currentIndex++];
      }, this.typingSpeed);
    }
  }
};
</script>

<style scoped>
#cursor {
  animation: blink 1s infinite;
  color: #eee000;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>