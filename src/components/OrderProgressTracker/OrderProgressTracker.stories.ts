import OrderProgressTracker from './OrderProgressTracker.vue'

import '@/components/OrderProgressTracker/styles.scss'

export default {
  title: 'Components/OrderProgressTracker',
  component: OrderProgressTracker
}

const Template = (args) => ({
  components: { OrderProgressTracker },
  setup() {
    return { args }
  },
  template: '<OrderProgressTracker v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  activeStage: 3,
  stages: ['Создан', 'Оплачен', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен'],
  stageInfos: ['Info 11', 'Info 22', 'Info 33', 'Info 44', 'Info 55', 'Info 66']
}

export const SecondProgressTracker = Template.bind({})
SecondProgressTracker.args = {
  activeStage: 2,
  stages: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6'],
  stageInfos: ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5', 'Info 6'] // Different info texts
}

export const ThirdProgressTracker = Template.bind({})
ThirdProgressTracker.args = {
  activeStage: 1,
  stages: ['Step A', 'Step B', 'Step C', 'Step D', 'Step E', 'Step F'],
  stageInfos: ['Detail A', 'Detail B', 'Detail C', 'Detail D', 'Detail E', 'Detail F'] // Different info texts
}
