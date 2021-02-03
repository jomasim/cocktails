import { Layout, Input } from 'antd'
import Header from '../../components/Header'
import CockTailForm from '../../components/CockTailForm'
import CockTail from '../../components/CockTail'
import { useEffect } from 'react'
import './customcock.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomCockTail } from '../../redux/actions'
const { Content, Footer } = Layout
const { Search } = Input
const CustomCockTails = () => {
  const dispatch = useDispatch()

  const { data: customCocktails, loading } = useSelector(
    state => state.fetchCustom
  )

  useEffect(() => {
    dispatch(fetchCustomCockTail({}))
  }, [dispatch])

  const showCockTail = () => {
    // todo
  }

  const onSearch = strDrink => {
    dispatch(fetchCustomCockTail({ strDrink }))
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
          onSearch={onSearch}
          style={{ width: '400px', marginLeft: '20px' }}
          loading={loading}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '60vw', display: 'flex' }}>
            {customCocktails.map((data, index) => (
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
