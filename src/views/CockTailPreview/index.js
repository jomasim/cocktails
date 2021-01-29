import { Layout, Menu, Row, Col, Image, Tag, Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout

const CockTailPreview = () => (
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
          <Image
            width={450}
            src='https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
          />
        </Col>
        <Col span={12}>
          <p style={{ color: '#fffd', fontSize: '25px', fontWeight: 'bold' }}>
            Smashed Watermelon Margarita
          </p>
          <span style={{ color: '#c3aa8a', fontSize: '20px' }}>Category: </span>
          <span style={{ color: '#d2cdcd', fontSize: '20px' }}>
            Ordinary Drink
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
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p style={{ color: '#c3aa8a', fontSize: '25px', fontWeight: 'bold' }}>
            Ingredients
          </p>
          <div>
            <CheckCircleOutlined
              style={{ fontSize: '20px', color: '#c3aa8a' }}
            />
            <span
              style={{ color: '#d2cdcd', fontSize: '20px', padding: '10px' }}
            >
              Vodka
            </span>
          </div>
          <div>
            <CheckCircleOutlined
              style={{ fontSize: '20px', color: '#c3aa8a' }}
            />
            <span
              style={{ color: '#d2cdcd', fontSize: '20px', padding: '10px' }}
            >
              Cola
            </span>
          </div>
        </Col>
      </Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
  </Layout>
)

export default CockTailPreview
