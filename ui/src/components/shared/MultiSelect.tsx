import React, { useState, Fragment } from 'react'

import Select from 'react-select'
import { characterLevels } from 'constants/settings'

const Checkbox = (props: { [key: string]: string }) => <input type='checkbox' {...props} />

const SingleSelect = () => {
  const [isClearable, setIsClearable] = useState(true)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)
  const [isSearchable, setIsSearchable] = useState(true)

  const toggleClearable = () => {
    setIsClearable(!isClearable)
  }
  const toggleDisabled = () => {
    setIsDisabled(!isDisabled)
  }
  const toggleLoading = () => {
    setIsLoading(!isLoading)
  }
  const toggleRtl = () => {
    setIsRtl(!isRtl)
  }
  const toggleSearchable = () => {
    setIsSearchable(!isSearchable)
  }

  return (
    <Select
      className='basic-single'
      isMulti
      classNamePrefix='select'
      defaultValue={characterLevels[0]}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name='color'
      options={characterLevels}
    />
  )
}

export default SingleSelect
