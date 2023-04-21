import { Col, Container, Row, Accordion } from 'react-bootstrap'
import './privacy-policy.css'

const PrivacyPolicy = () => {
  return (
    <>
      <section className='privacy-policy-section'>
        <Container>
          <Row>
            <Col xl={4} lg={4}>
              <div className='privacy-policy-accordion'>
                <Accordion defaultActiveKey='0'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <i className='fa-solid fa-circle-chevron-right'></i> Política de privacidad
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <a href='#website-content'>Contenido del sitio web</a>
                        </li>
                        <li>
                          <a href='#property'>Propiedad intelectual</a>
                        </li>
                        <li>
                          <a href='#identify-party'>De la identificación de las partes</a>
                        </li>
                        <li>
                          <a href='#purchase-procedure'>Procedimiento de compra</a>
                        </li>
                        <li>
                          <a href='#agreement-lang'>Idioma del acuerdo</a>
                        </li>
                        <li>
                          <a href='#terminative-service'>Terminación del servicio</a>
                        </li>
                        <li>
                          <a href='#applicable-reg'>Regulaciones aplicables</a>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      <i className='fa-solid fa-circle-chevron-right'></i> Términos y condiciones
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
            <Col xl={8} lg={8}>
              <div className='privacy-policy-content'>
                <div className='privacy-content-item' id='website-content'>
                  <h3>Contenido del sitio web</h3>
                  <p>
                    Bienvenido al mejor portal de entradas para eventos! Aquí puede comprar boletos para varios eventos, conciertos, espectáculos y eventos deportivos en todo el país. Desde festivales
                    de música hasta producciones teatrales, tenemos todo lo que necesitas para asegurarte de que experimentes la emoción de cada momento.
                  </p>
                  <p>
                    ¡Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                </div>
                <div className='privacy-content-item' id='property'>
                  <h3>Propiedad intelectual</h3>
                  <p>
                    Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                  <p>
                    Presentamos nuestro boleto exclusivo para eventos: ¡su pase a una experiencia inolvidable! Con este boleto, tendrá acceso a los eventos más populares de la ciudad, incluidos
                    conciertos, festivales, eventos deportivos y mucho más.
                  </p>
                </div>
                <div className='privacy-content-item' id='identify-party'>
                  <h3>De la identificación de las partes</h3>
                  <p>
                    Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                  <p>
                    Presentamos nuestro boleto exclusivo para eventos: ¡su pase a una experiencia inolvidable! Con este boleto, tendrá acceso a los eventos más populares de la ciudad, incluidos
                    conciertos, festivales, eventos deportivos y mucho más.
                  </p>
                </div>
                <div className='privacy-content-item' id='purchase-procedure'>
                  <h3>Procedimiento de compra</h3>
                  <p>
                    Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                  <p>
                    Presentamos nuestro boleto exclusivo para eventos: ¡su pase a una experiencia inolvidable! Con este boleto, tendrá acceso a los eventos más populares de la ciudad, incluidos
                    conciertos, festivales, eventos deportivos y mucho más.
                  </p>
                </div>
                <div className='privacy-content-item' id='agreement-lang'>
                  <h3>Idioma del acuerdo</h3>
                  <p>
                    Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                  <p>
                    Presentamos nuestro boleto exclusivo para eventos: ¡su pase a una experiencia inolvidable! Con este boleto, tendrá acceso a los eventos más populares de la ciudad, incluidos
                    conciertos, festivales, eventos deportivos y mucho más.
                  </p>
                </div>
                <div className='privacy-content-item' id='terminative-service'>
                  <h3>Terminación del servicio</h3>
                  <p>
                    Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                  <p>
                    Presentamos nuestro boleto exclusivo para eventos: ¡su pase a una experiencia inolvidable! Con este boleto, tendrá acceso a los eventos más populares de la ciudad, incluidos
                    conciertos, festivales, eventos deportivos y mucho más.
                  </p>
                </div>
                <div className='privacy-content-item' id='applicable-reg'>
                  <h3>Regulaciones aplicables</h3>
                  <p>
                    Únete a nosotros para una experiencia inolvidable! Este boleto para el evento es su pase a una noche llena de emoción, entretenimiento y recuerdos. Obtenga acceso a un lugar de
                    clase mundial, donde estará rodeado de otros entusiastas que comparten su pasión.
                  </p>
                  <p>
                    Presentamos nuestro boleto exclusivo para eventos: ¡su pase a una experiencia inolvidable! Con este boleto, tendrá acceso a los eventos más populares de la ciudad, incluidos
                    conciertos, festivales, eventos deportivos y mucho más.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PrivacyPolicy
