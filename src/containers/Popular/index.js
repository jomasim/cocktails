import CockTail from '../../components/CockTail'
import './popular.css'
const Popular = ({ data, showCockTail }) => {
  return (
    <div style={{ marginTop: '50px' }}>
      <div style={{ textAlign: 'center' }}>
        <p className='popular-tit'>Popular</p>
      </div>
      <div
        className='co-co'
        style={{
          display: 'flex',
          marginTop: '60px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {data.map(item => (
          <CockTail
            key={item.idDrink}
            data={item}
            showCockTail={showCockTail}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
