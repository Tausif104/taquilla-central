import { useState } from 'react'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import Logo from './images/logo.svg'
import Hamburger from './images/hamburger.svg'
import Phone from './images/phone.svg'

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // finding location
  const location = useLocation()
  const routeName = location.pathname.split('/')[1]

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Taquilla Central</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
      <header id='top' className={routeName ? routeName : 'page-header'}>
        <Container>
          <Row className='align-items-center'>
            <Col xs={4}>
              <div className='menu-trigger' onClick={handleShow}>
                <img src={Hamburger} alt='' />
              </div>
            </Col>
            <Col xs={4}>
              <div className='site-logo text-center'>
                <Link to='/'>
                  <img src={Logo} alt='logo' />
                </Link>
              </div>
            </Col>
            <Col xs={4}>
              <div className='phone-number justify-content-end d-flex align-items-center'>
                <img src={Phone} alt='' />
                <div className='phone-content text-start'>
                  <h4>Tiene alguna consulta?</h4>
                  <a href='tel:644 50 75 41'>644 50 75 41</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header
