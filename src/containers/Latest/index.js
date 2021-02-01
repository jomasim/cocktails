import CockTail from '../../components/CockTail'

const Latest = ({ data, showCockTail }) => {
  return (
    <div
      style={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#fff', fontWeight: '400', fontSize: '31px' }}>
          Latest
        </p>
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

export default Latest
