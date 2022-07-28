import './SearchForm.scss'

import { TextField } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import CustButton from '../CustButton'

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

// eslint-disable-next-line import/no-mutable-exports
let SearchForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name='collection' component={renderTextField} label='Collection slug' type='text' />
      <button type='submit' className='submit-btn'>
        <CustButton text='Find collection' />
      </button>
    </form>
  )
}

SearchForm = reduxForm({
  form: 'search',
})(SearchForm)

export default SearchForm
