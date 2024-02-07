<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Button from './components/Button/Button.vue'
import OrderProgressTracker from './components/OrderProgressTracker/OrderProgressTracker.vue';

const i18n = useI18n()

console.log(i18n.t('test-message'))

i18n.locale.value = 'en'

console.log(i18n.t('test-message'))
</script>

<template>
  <main>
    <!-- main
    <Button :mode="'large'" text="Click me"/> -->
    <OrderProgressTracker :activeStage="2" :stages="['Создан', 'Оплачен', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен']" />
  </main>
</template>

<style scoped></style>
