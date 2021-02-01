import { Layout, Input } from 'antd'
import Header from '../../components/Header'
import CockTailForm from '../../components/CockTailForm'
import CockTail from '../../components/CockTail'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomCockTail } from '../../redux/actions'
const { Content, Footer } = Layout
const { Search } = Input
const CustomCockTails = () => {
  const dispatch = useDispatch()
  const [drinks, setDrinks] = useState([])
  const { data: customCocktails } = useSelector(state => state.fetchCustom)

  useEffect(() => {
    dispatch(fetchCustomCockTail())
  }, [dispatch])

  useEffect(() => {
    if (customCocktails.length) {
      setDrinks(customCocktails)
    }
  }, [customCocktails])

  const showCockTail = () => {
    // todo
  }

  const onSearch = e => {
    console.log('values', e.target.value)
    const { value } = e.target
    const filtered = drinks.filter(drink => drink.strDrink.includes(value))
    setDrinks(filtered)
  }
  return (
    <Layout className='layout'>
      <Header />
      <Content
        style={{ minHeight: '89vh', background: '#15161a', padding: '20px' }}
      >
        <Search
          placeholder='enter cocktail name'
          allowClear
          enterButton
          size='large'
          onChange={e => onSearch(e)}
          style={{ width: '400px', marginLeft: '20px' }}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '60vw', display: 'flex' }}>
            {drinks.map((data, index) => (
              <CockTail key={index} data={data} showCockTail={showCockTail} />
            ))}
          </div>
          <CockTailForm />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
    </Layout>
  )
}
export default CustomCockTails
