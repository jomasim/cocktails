import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CockTail from '../../components/CockTail'
import { fetchLatest } from '../../redux/actions'

const Latest = ({data, loading}) => {
  // const dispatch = useDispatch()
  // const { data, loading } = useSelector(state => state.latest)
  // useEffect(() => {
  //   dispatch(fetchLatest())
  // }, [dispatch])
  console.log(data, "Latest Data")
  return (
    <div style={{ marginTop: '50px' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#fff', fontWeight: '400', fontSize: '31px' }}>
          Latest
        </p>
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
          <CockTail key={item.idDrink} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Latest
