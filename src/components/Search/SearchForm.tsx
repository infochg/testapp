import './SearchForm.scss'

import SearchIcon from '@mui/icons-material/Search'
import { TextField } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

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
    <form onSubmit={handleSubmit} className='search-form'>
      <Field
        name='collection'
        component={renderTextField}
        label='Collection slug'
        type='text'
        className='search-form__field'
      />
      <button type='submit' className='search-form__submit-btn'>
        <SearchIcon />
      </button>
    </form>
  )
}

SearchForm = reduxForm({
  form: 'search',
})(SearchForm)

export default SearchForm
