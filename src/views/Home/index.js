import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchLatest } from '../../redux/actions'
import { Layout, Menu, Row, Col, Image, Button } from 'antd'
import bannerImg from '../../assets/wine.png'
import Banner from '../../components/Banner'
import Popular from '../../containers/Popular'
import Latest from '../../containers/Latest'
import { fetchPopular } from '../../redux/actions'

const { Header, Content, Footer } = Layout

const btnStyle = {
  background: '#d22747',
  color: '#fff',
  borderColor: '#d22747',
  height: '51px',
  borderRadius: '6px',
  fontsize: '16px'
}

const Home = () => {
  const dispatch = useDispatch()

  const { data: latestData, loading: loadingLatest } = useSelector(
    state => state.latest
  )
  const { data: popularData, loading: loadingPopular } = useSelector(
    state => state.popular
  )
  useEffect(() => {
    dispatch(fetchPopular())
    dispatch(fetchLatest())
  }, [])


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
      <Content style={{ minHeight: '89vh', background: '#15161a' }}>
        <Row>
          <Col span={12} style={{ padding: '160px 160px 0' }}>
            <p style={{ color: '#fff', fontSize: '30px', fontWeight: '500' }}>
              Cock Tails, Custom Cocktails Here!
            </p>
            <p style={{ color: '#fff', width: '300px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button style={btnStyle}>Get Random Drink</Button>
          </Col>
          <Col span={12}>
            <Image width={450} src={bannerImg} />
          </Col>
        </Row>
        <Popular data={popularData} loading={loadingPopular} />
        <Latest data={latestData} loading={loadingLatest} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
    </Layout>
  )
}

export default Home
