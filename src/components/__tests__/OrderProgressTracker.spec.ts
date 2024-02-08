import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrderProgressTracker from '@/components/OrderProgressTracker/OrderProgressTracker.vue'

describe('OrderProgressTracker', () => {
  it('renders the correct number of stages', () => {
    const stages = ['Создан', 'Оплачен', 'Готовится к отправке', 'Готов к отправке', 'В пути', 'Доставлен']
    const stageInfos = ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5', 'Info 6']
    const wrapper = mount(OrderProgressTracker, {
      props: {
        stages,
        stageInfos,
        activeStage: 2
      }
    })

    expect(wrapper.findAll('.stage').length).toBe(stages.length)
  })

  it('assigns the active class to the correct stage', () => {
    const stages = ['Создан', 'Оплачен', 'Готовится к отправке']
    const stageInfos = ['Info 1', 'Info 2', 'Info 3']
    const activeStage = 1
    const wrapper = mount(OrderProgressTracker, {
      props: {
        stages,
        stageInfos,
        activeStage
      }
    })

    const activeStages = wrapper.findAll('.stage.active')
    expect(activeStages.length).toBe(1)
    expect(activeStages[0].text()).toContain(stages[activeStage])
  })

  it('displays stage info on mouseover', async () => {
    const stages = ['Создан', 'Оплачен', 'Готовится к отправке']
    const stageInfos = ['Info 1', 'Info 2', 'Info 3']
    const wrapper = mount(OrderProgressTracker, {
      props: {
        stages,
        stageInfos,
        activeStage: 2
      }
    })

    const stageElements = wrapper.findAll('.stage')
    await stageElements[1].trigger('mouseover')
    expect(wrapper.find('.stage-info').text()).toBe(stageInfos[1])
  })
})
