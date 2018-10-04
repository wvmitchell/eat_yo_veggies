import React from 'react'
import { shallow } from 'enzyme'
import AddVeggiesForm from './index'

describe('AddVeggiesForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<AddVeggiesForm />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const wrapper = shallow(<AddVeggiesForm />)
    expect(wrapper.state()).toEqual({ veggie: '' })
  })

  it('should have a default state snapshot', () => {
    const wrapper = shallow(<AddVeggiesForm />)
    expect(wrapper.state()).toMatchSnapshot()
  })

  describe('updateNewVeggie', () => {
    it('should be called on change', () => {
      // Setup
      const wrapper = shallow(<AddVeggiesForm />)
      const spy = spyOn(wrapper.instance(), 'updateNewVeggie')
      wrapper.instance().forceUpdate()

      // Execution
      wrapper.find('input').simulate('change')

      // Expectation
      expect(spy).toHaveBeenCalled()
    })

    it('should take the change event and update the state', () => {
      // Setup
      const mockEvent = { target: { value: 'squash' } }
      const wrapper = shallow(<AddVeggiesForm />)

      // Execution
      wrapper.instance().updateNewVeggie(mockEvent)

      // Expectation
      expect(wrapper.state('veggie')).toEqual('squash')
    })
  })

  describe('handleSubmit', () => {
    it('should be called on submit', () => {
      // Setup
      const wrapper = shallow(<AddVeggiesForm addVegetable={jest.fn()}/>)
      const spy = spyOn(wrapper.instance(), 'handleSubmit')
      wrapper.instance().forceUpdate()

      // Execution
      wrapper.find('form').simulate('submit')

      // Expectation
      expect(spy).toHaveBeenCalled()
    })

    it('should digest the form submission and call addVegetable', () => {
      // Setup
      const mockEvent = { preventDefault: jest.fn() }
      const mockAddVegetable = jest.fn()
      const wrapper = shallow(<AddVeggiesForm addVegetable={mockAddVegetable} />)
      wrapper.setState({ veggie: 'squash' })

      // Execution
      wrapper.instance().handleSubmit(mockEvent)

      // Expectation
      expect(mockEvent.preventDefault).toHaveBeenCalled()
      expect(mockAddVegetable).toHaveBeenCalledWith('squash')
    })
  })
})
