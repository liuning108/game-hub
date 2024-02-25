import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameOuery } from '../App'

interface Props {
  gameQuery: GameOuery
}
const GameHeading = ({gameQuery}:Props) => {
  const heading =`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading as={'h1'} style={{marginBottom:'8px'}}>
     {heading}
    </Heading>
  )
}

export default GameHeading