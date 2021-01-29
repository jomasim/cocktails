import React from 'react'
import { Card, Button } from 'antd'
import './cocktail.css'

const CockTail = () => (
  <Card
    hoverable
    style={{ width: '300px', margin:'10px' }}
    cover={
      <img
        alt='example'
        src='https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg'
      />
    }
  >
    <div className='meta-detail'>
      <div className='meta-co'>
        <span className='meta-item-left'>Category:</span>
        <span className='meta-item-right'>Other/Unknown</span>
      </div>
      <div className='meta-co'>
        <span className='meta-item-left'>Glass:</span>
        <span className='meta-item-right'>Star glass</span>
      </div>
    </div>
    <Button className='more-btn'>More</Button>
  </Card>
)

export default CockTail
