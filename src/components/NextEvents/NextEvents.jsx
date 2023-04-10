import { Col, Container, Row } from 'react-bootstrap'
import './nextevents.css'
import Event from '../Event/Event'

const NextEvents = () => {
  return (
    <section className='eventlist-section next-events'>
      <Container>
        <Row className='section-details'>
          <Col md={8}>
            <div className='section-title'>
              <h2>Próximos Eventos</h2>
            </div>
          </Col>
        </Row>
        <Row className='g-4'>
          <Event column='3' />
          <Event column='3' />
          <Event column='3' />
          <Event column='3' />
        </Row>
      </Container>
    </section>
  )
}

export default NextEvents
