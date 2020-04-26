import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { CreditCardMask, ValidateDateMask, CvvMask } from '../mask'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { ReactComponent as ExpandMore } from 'assets/expand-more.svg'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 0 40px;
`

const Wrapper = styled.div``
const useStylesButton = makeStyles({
  root: {
    width: '100%',
    height: '51px',
    marginBottom: '40px',
  },
})
const useStylesSelect = makeStyles({
  root: {
    width: '100%',
    marginBottom: '24px',
    minWidth: '100%',
  },
})
function Inputs() {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [name, setName] = useState('')
  const [validateDate, setValidateDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [quantityParcels, setQuantityParcels] = useState('')

  const handleOnChangeCreditCarNumber = (event) => {
    const value = event.target.value
    console.log(value)
    console.log(event)
    setCreditCardNumber(value)
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
  const classesButton = useStylesButton()
  const classesSelect = useStylesSelect()
  return (
    <Container>
      <Wrapper>
        <TextInput
          label="Número do cartão"
          value={creditCardNumber}
          onChange={handleOnChangeCreditCarNumber}
          name="Número do cartão"
          id="Número do cartão"
          InputProps={{
            inputComponent: CreditCardMask,
          }}
        />

        <TextInput
          value={name}
          label="Nome (igual ao cartão)"
          onChange={handleOnChangeName}
        />
        <TextInput
          label="Validate"
          value={validateDate}
          onChange={handleOnChangeValidateDate}
          name="Validate"
          id="Validate"
          InputProps={{
            inputComponent: ValidateDateMask,
          }}
        />
        <TextInput
          label="CVV"
          value={cvv}
          onChange={handleOnChangeCvv}
          name="CVV"
          id="CVV"
          InputProps={{
            inputComponent: CvvMask,
          }}
        />
        <FormControl classes={classesSelect}>
          <InputLabel>Name</InputLabel>
          <Select
            label="Número de parcelas"
            name="Número de parcelas"
            id="Número de parcelas"
            value={quantityParcels}
            onChange={handleOnChangeQuantityParcels}
            IconComponent={ExpandMore}
            autoWidth={true}
          >
            <MenuItem
              classes={classesSelect}
              value={'12x R$1.000,00 sem juros'}
            >
              Ten
            </MenuItem>
            <MenuItem
              classes={classesSelect}
              value={'12x R$1.000,00 sem juros'}
            >
              Twenty
            </MenuItem>
            <MenuItem
              classes={classesSelect}
              value={'12x R$1.000,00 sem juros'}
            >
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
        <Button classes={classesButton} variant="contained" color="secondary">
          Continuar
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Inputs
