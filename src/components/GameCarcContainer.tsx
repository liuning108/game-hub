import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
  children : ReactNode
}
const GameCarcContainer = ({children}:Props) => {
  return (
     <Box width={{ base: "100%", md: "300px" }} borderRadius={10} overflow={"hidden"}>
       {children}
     </Box> 
  )
}

export default GameCarcContainer