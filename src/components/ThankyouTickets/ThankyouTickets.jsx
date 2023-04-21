import { Col, Row } from 'react-bootstrap'
import thumb from './thumb.png'
import { Link } from 'react-router-dom'
import './thank-you-tickers.css'

const ThankyouTickets = () => {
  return (
    <div className='thank-you-tickets'>
      <div className='thank-you-ticket-item'>
        <div className='thank-you-ticket-wrapper d-flex align-items-center'>
          <div className='thank-you-ticket-thumb'>
            <img src={thumb} alt='' />
          </div>
          <div className='thank-you-ticket-content ms-4'>
            <h4>Revelado a través del querido caminar abortivo</h4>
            <p>Su entrada al evento es su entrada a una experiencia inolvidable.</p>
            <span className='ticket-id'>
              Ticket ID: <strong>#172617</strong>
            </span>
          </div>
        </div>
        <div className='thank-you-ticket-price text-end'>
          <p className='ticket-price'>
            Precio: €15.00 <span>(+ 0,00€ g.d.g.)</span>
          </p>
          <button className='primary-btn'>
            Descarga <i className='fas fa-download'></i>
          </button>
        </div>
      </div>
      <div className='thank-you-ticket-item'>
        <div className='thank-you-ticket-wrapper d-flex align-items-center'>
          <div className='thank-you-ticket-thumb'>
            <img src={thumb} alt='' />
          </div>
          <div className='thank-you-ticket-content ms-4'>
            <h4>Revelado a través del querido caminar abortivo</h4>
            <p>Su entrada al evento es su entrada a una experiencia inolvidable.</p>
            <span className='ticket-id'>
              Ticket ID: <strong>#172617</strong>
            </span>
          </div>
        </div>
        <div className='thank-you-ticket-price text-end'>
          <p className='ticket-price'>
            Precio: €15.00 <span>(+ 0,00€ g.d.g.)</span>
          </p>
          <button className='primary-btn'>
            Descarga <i className='fas fa-download'></i>
          </button>
        </div>
      </div>
      <div className='thank-you-ticket-item'>
        <div className='thank-you-ticket-wrapper d-flex align-items-center'>
          <div className='thank-you-ticket-thumb'>
            <img src={thumb} alt='' />
          </div>
          <div className='thank-you-ticket-content ms-4'>
            <h4>Revelado a través del querido caminar abortivo</h4>
            <p>Su entrada al evento es su entrada a una experiencia inolvidable.</p>
            <span className='ticket-id'>
              Ticket ID: <strong>#172617</strong>
            </span>
          </div>
        </div>
        <div className='thank-you-ticket-price text-end'>
          <p className='ticket-price'>
            Precio: €15.00 <span>(+ 0,00€ g.d.g.)</span>
          </p>
          <button className='primary-btn'>
            Descarga <i className='fas fa-download'></i>
          </button>
        </div>
      </div>

      <div className='thank-you-ticket-bottom'>
        <Row className='d-flex justify-content-between align-items-center'>
          <Col xl={5} lg={6}>
            <p>Si estás interesado en comprar otro billete, empieza ahora</p>
          </Col>
          <Col xl={5} lg={6} className='text-end'>
            <div className='button-wrapper'>
              <Link to='/' className='bordered-btn'>
                Compra más entradas <i className='fas fa-arrow-right ms-2'></i>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ThankyouTickets
