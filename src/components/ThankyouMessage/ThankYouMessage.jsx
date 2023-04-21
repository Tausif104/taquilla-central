import { Container, Row, Col } from 'react-bootstrap'
import './thanks.css'
import Check from './check.svg'

const ThankYouMessage = () => {
  return (
    <section className='thank-you-section'>
      <Container>
        <Row className='justify-content-center'>
          <Col xl={8} className='text-center'>
            <div className='thank-you-content'>
              <img src={Check} alt='' />
              <h1>Gracias por su compra</h1>
              <p>Se ha enviado un recibo por correo electrónico que incluye detalles sobre su pedido e instrucciones de acceso a la dirección de correo electrónico proporcionada</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ThankYouMessage
