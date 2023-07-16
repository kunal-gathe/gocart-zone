import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

function ColorMode() {
    const {toggleColorMode , ColorMode} = useColorMode();
  return (
    <HStack >
        <Switch size='sm' className='c-mode'  colorScheme='#4527a7'  isDisabled = {ColorMode === 'dark'} onChange={toggleColorMode} />
    </HStack>
  )
}

export default ColorMode
