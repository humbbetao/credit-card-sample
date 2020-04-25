import React from 'react'
import styled from 'styled-components'
import Label from '../Label'
import { ReactComponent as AddNewCreditCard } from 'assets/add-new-credit-card.svg'
import CreditCard from 'components/CreditCard'

const AddNewCreditCardIcon = styled(AddNewCreditCard)`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`
const Container = styled.nav`
  width: 100%;
  height: 239px;
  background: #de4b4b 0% 0% no-repeat padding-box;
  opacity: 1;
  padding-top: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 352px;
    height: 596px;
    padding: 58px 0 58px 68px;
  }
`
const ContainerLabel = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  display: flex;
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`

export function SideBar() {
  return (
    <Container>
      <ContainerLabel height="20px" justifyContent="center">
        <Label>
          <b>Etapa 2</b> de 3
        </Label>
      </ContainerLabel>

      <ContainerLabel margin="30px 0 0 0" height="48px" justifyContent="center">
        <AddNewCreditCardIcon></AddNewCreditCardIcon>
        <Label height="48px" fontSize="18px" lineHeight="20px">
          <b>Adicione um novo cartão de crédito</b>
        </Label>
      </ContainerLabel>
      <CreditCard />
    </Container>
  )
}
export default SideBar
