import React from 'react'
import { shallow } from 'enzyme'
import AddVeggiesForm from './index'

describe('AddVeggiesForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<AddVeggiesForm />)
    expect(wrapper).toMatchSnapshot()
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
})
