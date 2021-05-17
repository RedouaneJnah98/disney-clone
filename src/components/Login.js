import styled from 'styled-components'

const Login = () => {
  return (
    <Wrapper>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`
const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: url('/images/login-background.jpg') no-repeat top/cover;
  z-index: -1;
`

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  min-height: 1px;
  width: 100%;
`

export default Login
