import React from 'react'
import { shallow } from 'enzyme'
import VeggiesContainer from './index'

describe('VeggiesContainer', () => {
  it('should match the snapshot', () => {
    // Setup && Execution
    const wrapper = shallow(<VeggiesContainer />)

    // Expectation
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the veggies passed via props', () => {
    // Setup && Execution
    const mockVeggies = ['broccoli', 'kale', 'carrots', 'peas']
    const wrapper = shallow(<VeggiesContainer veggies={mockVeggies} />)

    // Expectation
    expect(wrapper.find('VeggieCard').length).toBe(4)
  })
})
