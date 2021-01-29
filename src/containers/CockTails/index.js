import CockTail from '../../components/CockTail'
import './cocktails.css'
const CockTails = () => {
  const items = new Array(5).fill(0)
  return (
    <div style={{ padding: '200px' }}>
      <div style={{ textAlign: 'center' }}>
        <p className='popular-tit'>Popular</p>
      </div>
      <div className="co-co" style={{ display: 'flex', marginTop: '60px', flexWrap:'wrap', justifyContent:'center' }}>
        {items.map(item => (
          <CockTail />
        ))}
      </div>
    </div>
  )
}

export default CockTails
