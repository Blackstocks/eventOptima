<template>
  <router-link :to="{ name: 'home' }">
    <img
      src="@/assets/images/logo/ecell-logo-mobile-black.png"
      alt=""
      style="height: 50px"
      v-if="!this.$store.themeSettingsStore.isDark"
    />

    <img
      src="@/assets/images/logo/ecell-logo-mobile.png"
      alt=""
      style=" height: 50px;"
      v-if="this.$store.themeSettingsStore.isDark"
    />
  </router-link>
</template>
<script></script>
