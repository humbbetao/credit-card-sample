import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 0 40px;
`

const Wrapper = styled.div``

function Inputs() {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [name, setName] = useState('')
  const [validateDate, setValidateDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [quantityParcels, setQuantityParcels] = useState('')

  const handleOnChangeCreditCarNumber = (event) => {
    setCreditCardNumber(event.target.value)
  }
  const handleOnChangeName = (event) => {
    setName(event.target.value)
  }
  const handleOnChangeValidateDate = (event) => {
    setValidateDate(event.target.value)
  }
  const handleOnChangeCvv = (event) => {
    setCvv(event.target.value)
  }
  const handleOnChangeQuantityParcels = (event) => {
    setQuantityParcels(event.target.value)
  }

  return (
    <Container>
      <Wrapper>
        <TextInput
          value={creditCardNumber}
          label={'Número do cartão'}
          onChange={handleOnChangeCreditCarNumber}
          placeholder={''}
          alt={'Número do cartão'}
        />
        <TextInput
          value={name}
          label={'Nome (igual ao cartão)'}
          onChange={handleOnChangeName}
          placeholder={''}
          alt={'Nome (igual ao cartão)'}
        />
        <TextInput
          value={validateDate}
          label={'Validate'}
          onChange={handleOnChangeValidateDate}
          placeholder={''}
          alt={'Validate'}
        />
        <TextInput
          value={cvv}
          label={'CVV'}
          onChange={handleOnChangeCvv}
          placeholder={''}
          alt={'CVV'}
        />
        <TextInput
          value={quantityParcels}
          label={'Número de parcelas'}
          onChange={handleOnChangeQuantityParcels}
          placeholder={''}
          alt={'Número de parcelas'}
        />
      </Wrapper>
    </Container>
  )
}

export default Inputs
