import React from 'react'
import s from '../Order.module.scss'
import { useState, useEffect } from 'react';
import Select from 'react-select'
const options = [
    { value: '1', label: 'Тимошенка 29и' },
    { value: '2', label: 'Грінченка 2а' },
    { value: '3', label: 'Венеція 11г' }
  ]
  const customStyles = {
    multiValue: (styles) => ({
                ...styles,
                borderRadius: 0,
            }),
    }

export default function CustomSelect() {

    return (
        <div>
            <Select options={options}  
                theme={theme => ({
                ...theme,
                border :"2px solid #d3d7da",
                borderRadius: 2,
                 colors: {
                 ...theme.colors,
                primary25: '#d3d7da',
                primary50: '#d3d7da',
                primary75: '#d3d7da',
                primary: 'black',
                },
            })}/>
        </div>
    )
}
