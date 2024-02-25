import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
   onSeach:(searchText :string)=>void
}
const SearchInput = ({onSeach}:Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
       style={{width:'100%'}}
      onSubmit={(e) => {
        e.preventDefault();

        if (ref.current) {
          console.log(ref.current.value);
          onSeach(ref.current.value)
        }

      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
