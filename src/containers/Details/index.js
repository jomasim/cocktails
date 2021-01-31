import { Row, Col, Image, Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const Details = ({ data, ingredients }) => (
  <Row>
    <Col span={12}>
      <Image width={450} src={data.strDrinkThumb} />
    </Col>
    <Col span={12}>
      <p style={{ color: '#fffd', fontSize: '25px', fontWeight: 'bold' }}>
        {data.strDrink}
      </p>
      <span style={{ color: '#c3aa8a', fontSize: '20px' }}>Category:</span>
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
      <p style={{ color: '#c3aa8a', fontSize: '25px', fontWeight: 'bold' }}>
        Ingredients
      </p>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <CheckCircleOutlined style={{ fontSize: '20px', color: '#c3aa8a' }} />
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
)
export default Details
