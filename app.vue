<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const setI18nParams = useSetI18nParams();

console.log('Page', page);
setI18nParams({
  en: { slug: page.otherpath },
  de: { slug: page.otherpath },
});

watch(page, () => {
  console.log(page);
  setI18nParams({
    en: { slug: page.otherpath },
    de: { slug: page.otherpath },
  });
});
</script>
