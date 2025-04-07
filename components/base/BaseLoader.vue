<script lang="ts" setup></script>

<template>
  <div class="base-loader"></div>
</template>

<style scoped>
.base-loader {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #766df4 94%, #0000) top/8px 8px
      no-repeat,
    conic-gradient(#0000 30%, #766df4);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3 {
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}
</style>
