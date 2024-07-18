'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import FormControlLabel from '@mui/material/FormControlLabel';
//import InputLabel from '@mui/material/InputLabel';

import {
  Grid,
  TextField,
  Button,
  Autocomplete,
  Checkbox,
  FormControl,
} from '@mui/material';

// Datepicker
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import dayjs from 'dayjs';

//import * as request from '@/apicalls/request';

export function TextInputX(props) {
  return (
    <TextField
      fullWidth
      label="Enter"
      type="text"
      size="small"
      autoComplete="off"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function NumberInputX(props) {
  return (
    <TextField
      fullWidth
      label="Enter"
      type="number"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function NameInputX(props) {
  return (
    <TextField
      fullWidth
      label="Name"
      size="small"
      type="text"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function PhoneInputX(props) {
  return (
    <TextField
      fullWidth
      label="Phone"
      name="phone_number"
      type="tel"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function EmailInputX(props) {
  return (
    <TextField
      fullWidth
      label="Email"
      name="email"
      type="email"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function DateInputX(props) {
  let prefilledValue = new Date(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
    }).format(new Date())
  )
    .toISOString()
    .slice(0, 10);
  if (props.defaultValue !== undefined) {
    prefilledValue = props.defaultValue;
  }
  return (
    <TextField
      fullWidth
      label="Date"
      name="date"
      type="date"
      size="small"
      defaultValue={prefilledValue}
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function TimeInputX(props) {
  return (
    <TextField
      fullWidth
      label="Time"
      type="time"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function PasswordInputX(props) {
  return (
    <TextField
      fullWidth
      label="Password"
      type="password"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function HiddenInputX(props) {
  return <input type="hidden" size="small" {...props} />;
}
export function AddressInputX(props) {
  return (
    <TextField
      fullWidth
      multiline
      rows="4"
      label="Information"
      name="permanent_address"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function CheckboxX(props) {
  const [isChecked, setIsChecked] = useState(props.checked);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
      {...props}
    />
  );
}
export function TextAreaX(props) {
  return (
    <TextField
      fullWidth
      multiline
      rows="2"
      label="Information"
      size="small"
      InputLabelProps={{ shrink: true }}
      {...props}
    />
  );
}
export function ButtonX(props) {
  return (
    <Button
      fullWidth
      type="button"
      size="medium"
      variant="contained"
      className="white_button"
      {...props}
    >
      {props.label}
    </Button>
  );
}
export function SubmitButtonX(props) {
  return (
    <Button
      fullWidth
      type="submit"
      size="medium"
      variant="contained"
      className="blue_button"
      {...props}
    >
      {props.label !== undefined ? props.label : 'Save'}
    </Button>
  );
}
export function LinkButtonX(props) {
  return (
    <Link href={props.path}>
      <Button
        fullWidth
        type="button"
        size="small"
        variant="outlined"
        {...props}
      >
        {props.label}
      </Button>
    </Link>
  );
}
export function OptionButtonX(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <ButtonX onClick={handleClick} variant="outlined" label="+New" {...props} />
  );
}

// Define your SelectOptionField component
export function SelectOptionField(props) {
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState(props.options ? props.options : []);

  /*const fetchOptions = async () => {
    try {
      const response = await request.readOptionRes(
        props.module,
        props.datakey ? props.datakey : props.datares
      );
      const loadedOptions = Object.entries(response.data.data).map(
        ([key, label]) => ({
          label: label,
          value: key,
          name: props.name,
        })
      );
      setOptions(loadedOptions);
      setLabel(props.label ? props.label : label);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };*/

  // Fetch options initially when the component mounts and only when its not provided in props
  useEffect(() => {
    //fetchOptions();
  }, [!props.options]);

  // Merge option to add value
  useEffect(() => {
    // When optiontoadd prop changes, merge it with existing options
    if (props.optiontoadd && Array.isArray(props.optiontoadd)) {
      setOptions((prevOptions) => [...prevOptions, ...props.optiontoadd]);
    }
  }, [props.optiontoadd]);

  // set currently selected option
  const [selectedOption, setSelectedOption] = useState(
    props.multiple ? [] : null
  );

  useEffect(() => {
    if (props.multiple) {
      if (props.selected && props.selected.length > 0) {
        const matchingItems = options.filter((option) =>
          props.selected.includes(option.value)
        );
        setSelectedOption(matchingItems);
      } else {
        setSelectedOption([]); // Set to an empty array if props.selected is falsy or undefined
      }
    } else {
      setSelectedOption(
        props.selected && props.selected !== undefined
          ? options.find((option) => option.value === props.selected)
          : options[0] // Set to null if props.selected is not provided
      );
    }
  }, [options, props.selected, props.multiple]);
  console.log('options:in-udxformcomponents:' + JSON.stringify(options));
  console.log(
    'props.selected-data-sent:' +
      props.selected +
      ' / option selected' +
      JSON.stringify(selectedOption)
  );
  return (
    <Autocomplete
      size="small"
      options={options}
      value={selectedOption || (props.multiple ? [] : null)} // Ensure value is not undefined
      getOptionLabel={(option) => option.label || ''}
      renderInput={(params) => <TextField {...params} label={label} />}
      {...props}
    />
  );
}
