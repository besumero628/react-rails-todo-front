import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { FC, memo, ReactElement } from "react";

type Props = {
  id: string
  placeholder: string
  show? : boolean
  lefticon?: ReactElement
  righticon?: ReactElement
}

export const BoxWithIcon:FC<Props> = memo((props)=>{
  const {id, placeholder, show=true, lefticon, righticon} = props
  return (
    <>
    <InputGroup>
      <InputLeftElement
          pointerEvents='none'
          children={lefticon} 
        />
        <Input id={id} placeholder={placeholder} type={show? 'text' : 'password' } />
      <InputRightElement
        children={righticon}
       />
    </InputGroup>
    </>
  )
})