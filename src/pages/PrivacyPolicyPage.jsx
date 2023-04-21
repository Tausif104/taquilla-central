import { Col, Container, Row } from 'react-bootstrap'
import PageBannerBg from '../components/PageBanner/bg.png'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className='page-banner-section privacy-policy' style={{ backgroundImage: `url(${PageBannerBg})` }}>
        <Container>
          <Row className='align-items-center text-center'>
            <Col lg={12}>
              <div className='breadcrumb-text'>
                <h1>Política de privacidad, Términosy condiciones</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyPage
