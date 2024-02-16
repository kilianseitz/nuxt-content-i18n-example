<template>
  <div>
    <NuxtLink :to="switchLocalePath('en')"> en </NuxtLink>
    <NuxtLink :to="switchLocalePath('de')"> de </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>
