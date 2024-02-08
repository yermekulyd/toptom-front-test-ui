<template>
  <button class="button" :class="{ button_large: mode === 'large' }">
    <span>{{ text }}</span>
    <!-- Conditionally render an icon if the iconPath prop is provided -->
    <template v-if="iconPath">
      <img :src="iconPath" alt="Icon" class="button-icon" />
    </template>
  </button>
</template>

<script setup lang="ts">

defineProps({
  mode: String,
  text: String,
  iconPath: String // Prop for the icon path
})
</script>

<style lang="scss" scoped>
@import url('./styles.scss');
</style>
