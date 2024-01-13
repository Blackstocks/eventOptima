<template>
  <router-link :to="{ name: 'home' }">
    <img
      src="@/assets/images/logo/ecell-logo.png"
      alt=""
      v-if="!this.$store.themeSettingsStore.isDark"
    />

    <img
      src="@/assets/images/logo/ecell-logo-white.png"
      alt=""
      v-if="this.$store.themeSettingsStore.isDark"
    />
  </router-link>
</template>
<script></script>
