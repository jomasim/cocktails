import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

const Home = () => (
  <Layout className='layout'>
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='1'>nav 1</Menu.Item>
        <Menu.Item key='2'>nav 2</Menu.Item>
        <Menu.Item key='3'>nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', height: '89vh' }}>
      <h1>Content here</h1>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
  </Layout>
)

export default Home
