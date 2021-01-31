import { Layout } from 'antd'
import Header from '../../components/Header'
import CockTailForm from '../../components/CockTailForm'
const { Content, Footer } = Layout
const CustomCockTails = () => (
  <Layout className='layout'>
    <Header />
    <Content
      style={{ minHeight: '89vh', padding: '250px', background: '#15161a' }}
    >
      <CockTailForm />
    </Content>
    <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
  </Layout>
)
export default CustomCockTails
