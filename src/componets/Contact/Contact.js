import React from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Radio,
  RadioGroup,
  HStack
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import '../Contact/Contact.css'

function Contact() {
  return (
    <div className='form-container'>
      <FormControl isRequired >
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' className='form-input'/>
        <FormLabel>Last name</FormLabel>
        <Input placeholder='Last name' className='form-input' />
        <FormLabel>Email address</FormLabel>
        <Input type='email' className='form-input' />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Country</FormLabel>
        <Select placeholder='Select country'>
          <option>India</option>
          <option>Rassia</option>
          <option>Nepal</option>
          <option>Bhutan</option>
        </Select>
        <FormLabel as='legend'>
          Gender
        </FormLabel>
        <RadioGroup defaultValue='Itachi' as='fieldset'>
          <HStack spacing='24px'>
            <Radio value='Sasuke'>Male</Radio>
            <Radio value='Nagato'>Female</Radio>
            <Radio value='Itachi'>Other</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <Button onClick={()=> alert("Form Submitted Successfully !")} colorScheme='blue' className='form-btn'>Submit</Button>
    </div>
  )
}

export default Contact
