import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import './header.css'

const { Header } = Layout
const AppHeader = () => {
  const location = useLocation()
  const { pathname } = location
  const currentPath = pathname === '/custom' ? ['2'] : ['1']
  return (
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={currentPath}>
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/custom'>Custom cocktails</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default AppHeader
