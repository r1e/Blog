<template>
<div class="relative h-52 my-14">
<div class="scroll"></div>
</div>
</template>

<style scoped>
.scroll::after {
    content : '';
    display : inline-block;
    position : absolute;
    background-color: #999;
    right : 50%;
    transform : translateX(-50%);
    width : 1px;
    height : 200px;
    animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
</style>