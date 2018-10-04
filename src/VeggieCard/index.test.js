import React from 'react'
import { shallow } from 'enzyme'
import VeggieCard from './index'

describe('VeggieCard', () => {
  it('should match the snapshot', () => {
    // Setup && Execution
    const wrapper = shallow(<VeggieCard name="kale" />)

    // Expectation
    expect(wrapper).toMatchSnapshot()
  })
})
