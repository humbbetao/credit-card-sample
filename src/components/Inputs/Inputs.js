import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { CreditCardMask, ExpirationDateMask, CvvMask } from '../mask'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { ReactComponent as ExpandMore } from 'assets/expand-more.svg'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import CardValidator from 'card-validator'
import CreditCardContext from 'components/CreditCardContext'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 0 40px;
`

const ConfirmationInfos = styled.div`
  display: flex;
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

const useStylesConfirmation = makeStyles({
  rootRight: {
    marginRight: '5px',
    marginBottom: '24px',
    width: '100%',
  },
  rootLeft: {
    marginLeft: '5px',
    marginBottom: '24px',
    width: '100%',
  },
})

function Inputs() {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [name, setName] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [quantityParcels, setQuantityParcels] = useState(0)
  const [errors, setErrors] = useState({
    creditCardNumber: false,
    name: false,
    expirationDate: false,
    cvv: false,
    quantityParcels: false,
  })

  const creditCardContext = useContext(CreditCardContext)
  const validateCreditCarNumber = (value) => {
    if (value.length < 16) return
    const isValid = CardValidator.number(value)
    if (isValid.isPotentiallyValid || isValid.isValid) {
      setErrors({ ...errors, creditCardNumber: false })
      creditCardContext.save({
        number: value,
      })
    } else {
      setErrors({ ...errors, creditCardNumber: true })
    }
  }
  const validateName = (value) => {
    if (value.split(' ').length >= 2) {
      setErrors({ ...errors, name: false })
      creditCardContext.save({
        name: value,
      })
    } else {
      setErrors({ ...errors, name: true })
    }
  }
  const validateExpirationDate = (value) => {
    let isValid = false
    if (value.length < 4) {
      isValid = false
    } else {
      const today = new Date()
      const month = value.substring(0, 2)
      const year = `20${value.substring(2, 4)}`
      const date = new Date(year, month)
      if (today > date) {
        isValid = false
      } else {
        isValid = true
      }
    }

    if (isValid) {
      setErrors({ ...errors, expirationDate: false })
      creditCardContext.save({
        expirationDate: value,
      })
    } else {
      setErrors({ ...errors, expirationDate: true })
    }
  }
  const validateCvv = (value) => {
    if (value.length === 3) {
      setErrors({ ...errors, cvv: false })
      creditCardContext.save({
        cvv: value,
      })
    } else {
      setErrors({ ...errors, cvv: true })
    }
  }
  const validateQuantityParcels = (value) => {
    if (!value) {
      setErrors({ ...errors, quantityParcels: false })
      creditCardContext.save({
        quantityParcels: value,
      })
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
  const handleOnChangeExpirationDate = (event) => {
    const value = event.target.value
    setExpirationDate(value)
    validateExpirationDate(value)
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

  const handleOnClickOnButton = () => {
    validateCreditCarNumber(creditCardNumber)
    validateName(name)
    validateExpirationDate(expirationDate)
    validateCvv(cvv)
    validateQuantityParcels(quantityParcels)

    if (
      !errors.creditCardNumber &&
      !errors.name &&
      !errors.expirationDate &&
      !errors.cvv &&
      !errors.quantityParcels
    ) {
      creditCardContext.save({
        creditCardNumber,
        name,
        expirationDate,
        cvv,
        quantityParcels,
      })
    }
  }
  const classesButton = useStylesButton()
  const classesSelect = useStylesSelect()
  const classesConfirmation = useStylesConfirmation()

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
        <ConfirmationInfos>
          <TextInput
            classes={{ root: classesConfirmation.rootRight }}
            label="Validade"
            value={expirationDate}
            onChange={handleOnChangeExpirationDate}
            name="Validade"
            id="Validade"
            InputProps={{
              inputComponent: ExpirationDateMask,
            }}
            error={errors.expirationDate}
            helperText={errors.expirationDate && 'Data inválida'}
          />
          <TextInput
            classes={{ root: classesConfirmation.rootLeft }}
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
        </ConfirmationInfos>

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
        <Button
          onClick={handleOnClickOnButton}
          classes={classesButton}
          variant="contained"
          color="secondary"
        >
          Continuar
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Inputs
