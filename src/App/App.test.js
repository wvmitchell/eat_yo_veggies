import React from 'react';
import { shallow, mount } from 'enzyme'
import App from './index';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the default state', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state()).toEqual({ veggies: [] })
  })

  describe('addVegetable', () => {
    it('should add a veggie to the state', () => {
      // Setup
      const wrapper = shallow(<App />)

      // Execution
      wrapper.instance().addVegetable('broccoli')
      
      // Expectation
      expect(wrapper.state('veggies')).toEqual(['broccoli'])
    })

    it('should not overwrite other veggies', () => {
      // Setup
      const wrapper = shallow(<App />)
      wrapper.setState({ veggies: ['kale']})

      // Execution
      wrapper.instance().addVegetable('broccoli')
      
      // Expectation
      expect(wrapper.state('veggies')).toEqual(['kale', 'broccoli'])
    })
  })

  describe('e2e', () => {
    it('should let the user add a veggie to the app', () => {
      const wrapper = mount(<App />)

      wrapper.find('input').simulate('change', { target: { value: 'kale' }})
      wrapper.find('form').simulate('submit')

      expect(wrapper.state('veggies')).toEqual(['kale'])
      expect(wrapper.find('VeggieCard').length).toEqual(1)
    })
  })
})
