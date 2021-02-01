import React from 'react'
import Popular from '../containers/Popular'
import { shallow } from 'enzyme'

const data = [
  {
    idDrink: '178326',
    strDrink: 'White Wine Sangria',
    strCategory: 'Punch / Party Drink',
    strGlass: 'Pitcher'
  },
  {
    idDrink: '178326',
    strDrink: 'White Wine Sangria',
    strCategory: 'Punch / Party Drink',
    strGlass: 'Pitcher'
  }
]
const showCockTail = jest.fn()
it('should render  popular container ', () => {
  const wrapper = shallow(<Popular data={data} showCockTail={showCockTail} />)
  expect(wrapper.length).toBe(1)
})
it('matches snapshot', () => {
  const wrapper = shallow(<Popular data={data} showCockTail={showCockTail} />)
  expect(wrapper).toMatchSnapshot()
})
