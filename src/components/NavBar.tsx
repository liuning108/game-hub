import { HStack, Image } from '@chakra-ui/react'

import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props {
  onSeach:(searchText :string)=>void
}
const NavBar = ({onSeach}:Props) => {
  return (
    <HStack padding={'10px'}>
       <Image src={logo} boxSize={'60px'}/>
       <SearchInput onSeach={onSeach}/>
       <ColorModeSwitch/>

    </HStack>
  )
}

export default NavBar