import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Event from '../Event/Event'
import './eventlist.css'
import triangle from './triangle.svg'

const EventList = () => {
  const [dropDown, setDropDown] = useState('')

  const handleSelect = () => {
    if (dropDown == true) {
      setDropDown(false)
    } else {
      setDropDown(true)
    }
  }

  return (
    <>
      <section className='eventlist-section'>
        <Container>
          <Row className='section-details'>
            <Col md={8}>
              <div className='section-title'>
                <h2>Seleccione el evento preferido</h2>
              </div>
            </Col>
            <Col md={4}>
              <div className='select-custom'>
                <div onClick={handleSelect} className='select-button'>
                  Most Recent <i className={`fas fa-angle-${dropDown == true ? 'up' : 'down'}`}></i>
                </div>
                {dropDown && (
                  <div className='select-options'>
                    <img src={triangle} alt='' />
                    <div className='select-option'>Destacados</div>
                    <div className='select-option'>Mas Vendidos</div>
                    <div className='select-option'>Mas Recientes</div>
                    <div className='select-option'>Mas Antiguos</div>
                    <div className='select-option'>Alfabeticamente, A-Z</div>
                    <div className='select-option'>Alfabeticamente, Z-A</div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row className='g-4'>
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
            <Event column='3' />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default EventList
