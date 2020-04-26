import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& label.Mui-error': {
      color: theme.palette.error.light,
    },
    marginBottom: '24px',
  },
}))

function TextInput({
  value = '',
  onChange,
  onBlur,
  onFocus,
  onEnter,
  alt = '',
  placeholder = '',
  label = '',
  error = false,
  helperText = '',
  type = 'text',
  pattern,
  ...props
}) {
  const classes = useStyles()
  return (
    <TextField
      classes={classes}
      value={value}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onEnter={onEnter}
      placeholder={placeholder}
      alt={alt}
      error={error}
      helperText={helperText}
      type={type}
      pattern={pattern}
      {...props}
    />
  )
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onEnter: PropTypes.func,
  alt: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
}

export default TextInput
