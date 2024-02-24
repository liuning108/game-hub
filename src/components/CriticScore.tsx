import { Badge } from '@chakra-ui/react'
import React from 'react'
interface Props {
  score : number
}
const CriticScore = ({score}:Props) => {
  return (
     <Badge borderRadius={"4px"} fontSize={"14px"} paddingX={2}  colorScheme={score > 79 ? "green" : "yellow"}>{score}</Badge>
  )
}

export default CriticScore