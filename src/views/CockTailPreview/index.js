import { Layout } from 'antd'
import Header from '../../components/Header'
import Details from '../../containers/Details'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCockTail } from '../../redux/actions'

const { Content, Footer } = Layout

const CockTailPreview = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, loading } = useSelector(state => state.cocktail)
  const [ingredients, setIngredients] = useState([])

  const mapIngredients = () => {
    const updated = []
    Object.keys(data).filter(prop => {
      const index = prop.indexOf('strIngredient')
      if (index === 0 && data[prop]) {
        updated.push(data[prop])
      }
    })
    setIngredients(updated)
  }

  useEffect(() => {
    dispatch(fetchCockTail(id))
  }, [dispatch])
  useEffect(() => {
    mapIngredients()
  }, [data])
  return (
    <Layout className='layout'>
      <Header />
      <Content
        style={{ minHeight: '89vh', padding: '250px', background: '#15161a' }}
      >
        <Details data={data} ingredients={ingredients} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
    </Layout>
  )
}
export default CockTailPreview
