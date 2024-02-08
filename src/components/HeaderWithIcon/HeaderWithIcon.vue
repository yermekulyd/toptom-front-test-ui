<template>
    <div class="header-with-icon">
        <div class="header-content">
            <p class="header-title">Timeline</p>
            <p class="header-description">Отображает графическую информацию о статусе заказа</p>
            <Button class="header-button" text="Сторибук" iconPath="../../../public/Union.svg" />
        </div>
        <div class="header-icons">
            <GroupIcons />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Button from '../Button/CustomButton.vue';
import GroupIcons from '../Icons/IconGroup.vue';
</script>
  
<style lang="scss" scoped>
@import url('./styles.scss');
</style>
  