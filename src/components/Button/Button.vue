<script setup lang="ts">
import { defineProps } from 'vue'

import type { IButtonProps } from '.'

defineProps<IButtonProps>()
</script>

<template>
  <button class="button" :class="{ button_large: mode === 'large' }">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@import url('./styles.scss');
</style>
