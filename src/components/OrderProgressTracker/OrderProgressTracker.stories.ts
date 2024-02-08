import OrderProgressTracker from './OrderProgressTracker.vue';

import '@/components/OrderProgressTracker/styles.scss'

export default {
  title: 'Components/OrderProgressTracker',
  component: OrderProgressTracker,
};

const Template = (args) => ({
  components: { OrderProgressTracker },
  setup() {
    return { args };
  },
  template: '<OrderProgressTracker v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  activeStage: 3,
  stages: ['Создан', 'Оплачен', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен'],
};
