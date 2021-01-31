import { Layout, Menu, Row, Col, Image, Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCockTail } from '../../redux/actions'

const { Header, Content, Footer } = Layout

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
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>Home</Menu.Item>
          <Menu.Item key='2'>Categories</Menu.Item>
          <Menu.Item key='3'>More</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ minHeight: '89vh', padding: '250px', background: '#15161a' }}
      >
        <Row>
          <Col span={12}>
            <Image width={450} src={data.strDrinkThumb} />
          </Col>
          <Col span={12}>
            <p style={{ color: '#fffd', fontSize: '25px', fontWeight: 'bold' }}>
              {data.strDrink}
            </p>
            <span style={{ color: '#c3aa8a', fontSize: '20px' }}>
              Category:
            </span>
            <span style={{ color: '#d2cdcd', fontSize: '20px' }}>
              {data.strCategory}
            </span>

            <Divider
              style={{ borderColor: '#fff', marginTop: '100px' }}
              orientation='left'
            ></Divider>
            <p
              style={{
                color: '#c3aa8a',
                fontSize: '25px',
                fontWeight: 'bold'
              }}
            >
              Instructions
            </p>
            <p style={{ color: '#d2cdcd', fontSize: '20px' }}>
              {data.strInstructions}
            </p>
            <p
              style={{ color: '#c3aa8a', fontSize: '25px', fontWeight: 'bold' }}
            >
              Ingredients
            </p>
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                <CheckCircleOutlined
                  style={{ fontSize: '20px', color: '#c3aa8a' }}
                />
                <span
                  style={{
                    color: '#d2cdcd',
                    fontSize: '20px',
                    padding: '10px'
                  }}
                >
                  {ingredient}
                </span>
              </div>
            ))}
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
    </Layout>
  )
}
export default CockTailPreview
