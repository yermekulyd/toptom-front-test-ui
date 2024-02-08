import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import type { IButtonProps } from '@/components/Button'

import Button from '@/components/Button/CustomButton.vue'

describe('Button', () => {
  it('renders properly', () => {
    const props: IButtonProps = {
      mode: 'primary',
      text: 'asdasdasd'
    }

    const wrapper = mount(Button, { props })
    expect(wrapper.text()).toContain('asdasdasd')
  })
})
