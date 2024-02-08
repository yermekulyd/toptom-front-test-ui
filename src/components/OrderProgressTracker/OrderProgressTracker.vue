<template>
    <div class="progress-tracker">
        <div class="stages">
            <div v-for="(stage, index) in stages" :key="stage" :class="['stage', { 'active': index === activeStage }]"
                @mouseover="setStageText(index)" @mouseout="clearStageText">
                <div class="stage-dot-container">
                    <div class="stage-dot"></div>
                </div>
                <div class="stage-label">{{ stage }}</div>
                <div v-if="index === hoveredStage" class="stage-info">{{ stageInfo }}</div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps, ref } from 'vue';

const { stages, activeStage } = defineProps<{
    stages: string[];
    activeStage: number;
}>();

const hoveredStage = ref<number | null>(null);
const stageTexts = [
    'Ожидает оплаты',
    'Заказ передаётся в магазин',
    'Магазин готовит заказ к отправке',
    'Ищем свободных курьеров',
    'Курьер скоро будет у вас',
    'Заказ был доставлен курьером',
];
const stageInfo = ref('');

function setStageText(index: number) {
    if (index <= activeStage) {
        hoveredStage.value = index;
        stageInfo.value = stageTexts[index];
    }
}

function clearStageText() {
    hoveredStage.value = null;
    stageInfo.value = '';
}
</script>

  
<style lang="scss" scoped>
@import url('./styles.scss');
</style>
  