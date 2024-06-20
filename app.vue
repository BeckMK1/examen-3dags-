<template>
  <div>
    <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  </div>
</template>
<script setup>
  useHead({
    bodyAttrs:{
      dataTheme:'dark',
      
    }
  })
  const authCookie = useCookie('authCookie', {
  default: () => ([]),
  sameSite: 'none', 
  secure: true, // change to true in prod
  httpOnly: false,
  watch: true,
  maxAge: 86400, // 24h 
})
</script>
<style lang="scss">
body{}
</style>