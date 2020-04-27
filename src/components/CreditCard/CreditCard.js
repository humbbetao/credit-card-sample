import React from 'react'
import styled from 'styled-components'
import Label from 'components/Label'
import PropTypes from 'prop-types'
import { ReactComponent as CreditCardEmpty } from '../../assets/credit-card-empty.svg'

const Container = styled.div`
  height: 172px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  z-index: 1;
  background: #de4b4b 0% 0% no-repeat padding-box;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    justify-content: flex-start;
    align-items: center;
    width: 365px;
    height: 224px;
    padding: 0;
    padding-top: 31px;
  }
`

const CreditCardEmptyIcon = styled(CreditCardEmpty)`
  width: 280px;
  height: 172px;
  position: relative;
  z-index: 1;
  float: left;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 365px;
    height: 224px;
  }
`

const ContainerLabel = styled.div`
  z-index: 2;
  width: 280px;
  height: 172px;
  position: absolute;
`

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14px 31px 14px;
  box-sizing: border-box;
`

function CreditCard({ creditCardNumber, name, expirationDate }) {
  console.log({ creditCardNumber, name, expirationDate })
  return (
    <Container>
      <CreditCardEmptyIcon />
      <ContainerLabel>
        <Label
          width="100%"
          textAlign="center"
          letterSpacing="0px"
          color="#FFFFFF"
          textShadow="0px 1px 2px #000000B3"
          height="23px"
          padding="79px 14px 0 14px"
          margin="0 0 52px 0"
          fontSize="15px"
          lineHeight="20px"
        >
          {creditCardNumber}
        </Label>
        <Infos>
          <Label>{name}</Label>
          <Label width="35px">{expirationDate}</Label>
        </Infos>
      </ContainerLabel>
    </Container>
  )
}

CreditCard.propTypes = {
  creditCardNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
}

CreditCard.defaultProps = {
  creditCardNumber: '* * * *  * * * *  * * * *  * * * *',
  name: 'NOME DO TITULAR',
  expirationDate: '00/00',
}

export default CreditCard
