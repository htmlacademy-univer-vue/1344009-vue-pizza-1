<template>
  <AppLayout>
    <transition name="slide-fade">
      <router-view />
    </transition>
  </AppLayout>
</template>

<script setup>
import { AppLayout } from "@/layouts";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}

.slide-fade-leave-active {
  transform: translateX(-100%);
}
</style>
