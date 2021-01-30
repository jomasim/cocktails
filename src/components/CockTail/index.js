import React from 'react'
import { Card, Button } from 'antd'
import './cocktail.css'

const CockTail = ({ data }) => (
  <Card
    hoverable
    style={{ width: '300px', margin: '10px' }}
    cover={
      <img
        alt='alt'
        src={data.strDrinkThumb}
      />
    }
  >
    <div className='meta-detail'>
      <p style={{ color: '#fff', fontSize: '20px' }}>{data.strDrink}</p>
      <div className='meta-co'>
        <span className='meta-item-left'>Category:</span>
        <span className='meta-item-right'>{data.strCategory}</span>
      </div>
      <div className='meta-co'>
        <span className='meta-item-left'>Glass:</span>
        <span className='meta-item-right'>{data.strGlass}</span>
      </div>
    </div>
    <Button className='more-btn'>More</Button>
  </Card>
)

export default CockTail
