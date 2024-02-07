<template>
    <div class="progress-tracker">
        <div class="stages">
            <div v-for="(stage, index) in stages" :key="stage" :class="['stage', { 'active': index === activeStage }]">
                <div class="stage-dot-container">
                    <div class="stage-dot"></div>
                </div>
                <div class="stage-label">{{ stage }}</div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const { stages, activeStage } = defineProps<{
    stages: string[];
    activeStage: number;
}>();
</script>

  
<style lang="scss" scoped>
@import url('./styles.scss');
</style>
  