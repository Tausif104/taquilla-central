import { Col, Container, Row } from 'react-bootstrap'
import ThankYouMessage from '../components/ThankyouMessage/ThankYouMessage'
import ThankyouTickets from '../components/ThankyouTickets/ThankyouTickets'

const ThankYouPage = () => {
  return (
    <>
      <ThankYouMessage />
      <div className='thank-you-page-details'>
        <Container>
          <Row>
            <Col xl={8} lg={12}>
              <ThankyouTickets />
            </Col>
            <Col xl={4} lg={12}>
              <div className='thank-you-customer-info'>
                <h3>DATOS DEL COMPRADOR</h3>
                <ul>
                  <li>
                    <span>Nombre:</span>
                    <span>Nancy</span>
                  </li>
                  <li>
                    <span>Correo:</span>
                    <span>Nancy@email.com</span>
                  </li>
                  <li>
                    <span>DNI / Pasaporte / ID:</span>
                    <span>1923 925 1922</span>
                  </li>
                  <li>
                    <span>Fecha de Nacimiento:</span>
                    <span>12/05/1996</span>
                  </li>
                  <li>
                    <span>Teléfono:</span>
                    <span>+34 1299 12999</span>
                  </li>
                  <li>
                    <span>Código Postal:</span>
                    <span>11879</span>
                  </li>
                  <li>
                    <span>Genero:</span>
                    <span>Male</span>
                  </li>
                </ul>
                <span className='line-break'></span>
                <h3>Resumen del pedido</h3>
                <ul>
                  <li>
                    <span>Price</span>
                    <span>€1,725.00</span>
                  </li>
                  <li>
                    <span>Discount 10%</span>
                    <span className='red-text'>-€125.00</span>
                  </li>
                  <li>
                    <span>Total Price</span>
                    <span>€1,600.00</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ThankYouPage
