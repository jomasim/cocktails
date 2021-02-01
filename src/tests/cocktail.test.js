import React from 'react'
import CockTail from '../components/CockTail'
import { shallow } from 'enzyme'


const data = {
  idDrink: '178326',
  strDrink: 'White Wine Sangria',
  strCategory: 'Punch / Party Drink',
  strGlass: 'Pitcher'
}

it('should render  cocktail card ', () => {
  const wrapper = shallow(<CockTail data={data} />)
  expect(wrapper.length).toBe(1)
})
it('matches snapshot', ()=>{
  const wrapper = shallow(<CockTail data={data} />)
  expect(wrapper).toMatchSnapshot()
})
