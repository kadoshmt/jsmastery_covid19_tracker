import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'
import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
  const [ fetchedCountries, setFetchedCountries ] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI()
  }, [setFetchedCountries])
  
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <optgroup label="Principal">
          <option value=''>Global</option>          
          <option value='US'>Estados Unidos</option>
          <option value='Brazil'>Brasil</option>
          <option value='United Kingdom'>Reino Unido</option>
          <option value='Italy'>Itália</option>
          <option value='France'>França</option>
        </optgroup> 
        <optgroup label="Todos os países">
          {fetchedCountries.map( (country, idx) => <option value={country} key={idx}>{country}</option> )}
        </optgroup>         
        
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
