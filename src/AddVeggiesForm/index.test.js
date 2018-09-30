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

  describe('updateNewVeggie', () => {
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
