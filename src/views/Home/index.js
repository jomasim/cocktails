import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Layout } from 'antd'
import bannerImg from '../../assets/wine.png'
import Popular from '../../containers/Popular'
import Latest from '../../containers/Latest'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { fetchPopular, fetchRandom, fetchLatest } from '../../redux/actions'
import { useHistory } from 'react-router-dom'

const { Content, Footer } = Layout

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { data: latestData, loading: loadingLatest } = useSelector(
    state => state.latest
  )

  const { data: popularData, loading: loadingPopular } = useSelector(
    state => state.popular
  )
  const { data: random } = useSelector(state => state.random)

  useEffect(() => {
    dispatch(fetchPopular())
    dispatch(fetchLatest())
  }, [])

  useEffect(() => {
    if (random.idDrink) {
      showCockTail(random.idDrink)
    }
  }, [random])

  const showCockTail = id => {
    history.push(`/cocktails/${id}`)
  }

  const getRandomDrink = () => {
    dispatch(fetchRandom())
  }

  return (
    <Layout className='layout'>
      <Header />
      <Content style={{ minHeight: '89vh', background: '#15161a' }}>
        <Banner getRandomDrink={getRandomDrink} bannerImg={bannerImg} />
        <Popular
          data={popularData}
          loading={loadingPopular}
          showCockTail={showCockTail}
        />
        <Latest
          data={latestData}
          loading={loadingLatest}
          showCockTail={showCockTail}
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Cocktails here 2021</Footer>
    </Layout>
  )
}

export default Home
