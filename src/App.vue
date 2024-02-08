<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import OrderProgressTracker from './components/OrderProgressTracker/OrderProgressTracker.vue';
import HeaderWithIcon from './components/HeaderWithIcon/HeaderWithIcon.vue';

const i18n = useI18n()

console.log(i18n.t('test-message'))

i18n.locale.value = 'en'

console.log(i18n.t('test-message'))
</script>

<template>
  <main class="main">
    <HeaderWithIcon />
    <p class="group_text">Групповой заказ</p>
    <OrderProgressTracker :activeStage="4"
      :stages="['Создан', 'Оплачен', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен']"
      :stageInfos="['Ожидает оплаты', 'Заказ передаётся в магазин', 'Магазин готовит заказ к отправке', 'Ищем свободных курьеров', 'Курьер скоро будет у вас', 'Заказ был доставлен курьером']" />
    <p class="group_text">Совместный заказ</p>
    <OrderProgressTracker :activeStage="1"
      :stages="['Создан', 'Оплачен', 'Оплачен всеми', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен']"
      :stageInfos="['Ожидаем оплату и других покупателей', 'Оплата получена, ожидаем других покупателей', 'Оплата получена от всех покупателей', 'Магазин готовит заказ к отправке', 'Ищем свободных курьеров', 'Курьер скоро будет у вас', 'Заказ был доставлен курьером']" />
    <p class="group_text">Обычный заказ</p>
    <OrderProgressTracker :activeStage="3"
      :stages="['Создан', 'На утверждении', 'Оплачен вами', 'Оплачен всеми', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен']"
      :stageInfos="['Ожидаем других участников группы', 'Ожидает подтверждения администратором', 'Ожидаем оплату от вас и других участников группы', 'Оплата получена, ожидаем оплату от других участников группы', 'Оплата получена от всех участников группы', 'Магазин готовит групповой заказ к отправке', 'Ищем свободных курьеров', 'Курьер скоро будет у вас', 'Заказ был доставлен курьером']" />
  </main>
</template>

<style lang="scss" scoped>
@import url('./styles.scss');
</style>
