import { Col, Container, Row } from 'react-bootstrap'
import Event from '../Event/Event'
import './featured.css'

const FeaturedEvents = () => {
  return (
    <>
      <section className='event-section'>
        <Container>
          <Row className='section-details'>
            <Col md={6}>
              <div className='section-title'>
                <h2>Eventos destacados</h2>
              </div>
            </Col>
          </Row>
          <Row className='g-4'>
            <Event column='4' />
            <Event column='4' />
            <Event column='4' />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default FeaturedEvents
