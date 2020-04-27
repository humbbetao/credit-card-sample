import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

function CreditCardMask(props) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      format="#### #### #### ####"
    />
  )
}
function ExpirationDateMask(props) {
  const { inputRef, onChange, ...other } = props
  function limit(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = '0' + val
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = '01'

        //this can happen when user paste number
      } else if (val > max) {
        val = max
      }
    }

    return val
  }

  function cardExpiry(val) {
    let month = limit(val.substring(0, 2), '12')
    let year = val.substring(2, 4)

    return month + (year.length ? '/' + year : '')
  }
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      format={cardExpiry}
      placeholder="MM/YY"
      mask={['M', 'M', 'Y', 'Y']}
    />
  )
}

function CvvMask(props) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        })
      }}
      format="###"
    />
  )
}

CvvMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

ExpirationDateMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
CreditCardMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
export { CreditCardMask, CvvMask, ExpirationDateMask }
