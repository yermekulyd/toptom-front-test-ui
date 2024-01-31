import type { Meta, StoryObj } from '@storybook/vue3'

import '@/components/Button/styles.scss'

import Button from '@/components/Button/Button.vue'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    mode: {
      type: 'string',
      description: 'Вариант размера кнопки',
      defaultValue: 'primary',
      options: ['primary', 'large'],
      control: {
        type: 'radio'
      }
    },
    text: {
      type: 'string',
      description: 'Текст, который должен отобразиться в кнопке',
      defaultValue: 'simple-button',
      options: ['купить', 'убить'],
      control: {
        type: 'radio'
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button :mode="args.mode" :text="args.text"/>'
  }),
  args: {
    mode: 'primary',
    text: 'simple-button'
  }
}
