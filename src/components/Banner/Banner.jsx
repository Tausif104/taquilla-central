import { Col, Container, Row } from 'react-bootstrap'
import BannerBg from './images/banner.png'
import iconOne from './images/1.svg'
import iconTwo from './images/2.svg'
import iconThree from './images/3.svg'
import './banner.css'

const Banner = () => {
  return (
    <section className='banner-section' style={{ backgroundImage: `url(${BannerBg})` }}>
      <Container>
        <Row>
          <Col xl={8}>
            <div className='banner-content'>
              <h1>Encuentra tus eventos</h1>
              <div className='banner-search-box'>
                <form>
                  <Row>
                    <Col xl={9}>
                      <input type='text' placeholder='Search...' />
                    </Col>
                    <Col xl={3}>
                      <button type='submit'>
                        <i className='fas fa-search'></i> Search
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={8}>
                      <div className='search-items'>
                        <div className='search-item'>
                          <h4>
                            <img src={iconOne} alt='' /> Categoría
                          </h4>
                          <select>
                            <option value='Conciertos'>Conciertos</option>
                            <option value='Conciertos'>Conciertos</option>
                            <option value='Conciertos'>Conciertos</option>
                            <option value='Conciertos'>Conciertos</option>
                          </select>
                        </div>
                        <div className='search-item'>
                          <h4>
                            <img src={iconTwo} alt='' />
                            Ubicación
                          </h4>
                          <select>
                            <option value='Almería province'>Almería province</option>
                            <option value='Almería province'>Almería province</option>
                            <option value='Almería province'>Almería province</option>
                            <option value='Almería province'>Almería province</option>
                          </select>
                        </div>
                        <div className='search-item'>
                          <h4>
                            <img src={iconThree} alt='' />
                            Fecha
                          </h4>
                          <select>
                            <option value='Esta semana'>Esta semana</option>
                            <option value='Esta semana'>Esta semana</option>
                            <option value='Esta semana'>Esta semana</option>
                            <option value='Esta semana'>Esta semana</option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
