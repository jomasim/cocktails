import { Button, Row, Col, Image } from 'antd'

const btnStyle = {
  background: '#d22747',
  color: '#fff',
  borderColor: '#d22747',
  height: '51px',
  borderRadius: '6px',
  fontsize: '16px'
}

const Banner = ({ getRandomDrink, bannerImg }) => (
  <Row>
    <Col span={12} style={{ padding: '160px 160px 0' }}>
      <p style={{ color: '#fff', fontSize: '30px', fontWeight: '500' }}>
        Cock Tails, Custom Cocktails Here!
      </p>
      <p style={{ color: '#fff', width: '300px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Button style={btnStyle} onClick={() => getRandomDrink()}>
        Get Random Drink
      </Button>
    </Col>
    <Col span={12}>
      <Image width={450} src={bannerImg} />
    </Col>
  </Row>
)

export default Banner
