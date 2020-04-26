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
import CardValidator from 'card-validator'

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
  const [errors, setErrors] = useState({
    creditCardNumber: false,
    name: false,
    validateDate: false,
    cvv: false,
    quantityParcels: false,
  })

  const validateCreditCarNumber = (value) => {
    if (value.length < 16) return
    const isValid = CardValidator.number(value)
    if (isValid.isPotentiallyValid || isValid.isValid) {
      setErrors({ ...errors, creditCardNumber: false })
    } else {
      setErrors({ ...errors, creditCardNumber: true })
    }
  }
  const validateName = (value) => {
    if (value.split(' ').length >= 2) {
      setErrors({ ...errors, name: false })
    } else {
      setErrors({ ...errors, name: true })
    }
  }
  const validateValidateDate = (value) => {
    if (!value) {
      setErrors({ ...errors, validateDate: false })
    } else {
      setErrors({ ...errors, validateDate: true })
    }
  }
  const validateCvv = (value) => {
    if (value.length === 2) {
      setErrors({ ...errors, cvv: false })
    } else {
      setErrors({ ...errors, cvv: true })
    }
  }
  const validateQuantityParcels = (value) => {
    if (!value) {
      setErrors({ ...errors, quantityParcels: false })
    } else {
      setErrors({ ...errors, quantityParcels: true })
    }
  }

  const handleOnChangeCreditCarNumber = (event) => {
    const value = event.target.value
    console.log(value)
    setCreditCardNumber(value)
    validateCreditCarNumber(value)
  }
  const handleOnChangeName = (event) => {
    const value = event.target.value
    setName(value)
    validateName(value)
  }
  const handleOnChangeValidateDate = (event) => {
    const value = event.target.value
    setValidateDate(value)
    validateValidateDate(value)
  }
  const handleOnChangeCvv = (event) => {
    const value = event.target.value
    setCvv(value)
    validateCvv(value)
  }
  const handleOnChangeQuantityParcels = (event) => {
    const value = event.target.value
    setQuantityParcels(value)
    validateQuantityParcels(value)
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
          error={errors.creditCardNumber}
          helperText={errors.creditCardNumber && 'Número de cartão inválido'}
        />

        <TextInput
          value={name}
          label="Nome (igual ao cartão)"
          onChange={handleOnChangeName}
          error={errors.name}
          helperText={errors.name && 'Insira seu nome completo'}
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
          error={errors.validateDate}
          helperText={errors.validateDate && 'Data inválida'}
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
          error={errors.cvv}
          helperText={errors.cvv && 'Código inválido'}
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
            error={errors.quantityParcels}
            helperText={errors.quantityParcels && 'Insira o número de parcelas'}
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
