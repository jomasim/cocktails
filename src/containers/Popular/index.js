import CockTail from '../../components/CockTail'
import './popular.css'
const Popular = ({ data, showCockTail }) => {
  return (
    <div
      style={{ marginTop: '50px', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ textAlign: 'center' }}>
        <p className='popular-tit'>Popular</p>
      </div>
      <div
        className='co-co'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          padding: '50px'
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
