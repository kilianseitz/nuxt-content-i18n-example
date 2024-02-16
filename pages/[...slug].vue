<script setup lang="ts">
const { page } = useContent();
</script>

<template>
  <ContentRenderer :value="page" />
</template>
