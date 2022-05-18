import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FC, memo, ReactElement } from "react";

type Props = {
  placeholder: string
  icon: ReactElement
}

export const BoxWithIcon:FC<Props> = memo((props)=>{
  const {placeholder, icon} = props
  return (
    <>
    <InputGroup>
      <InputLeftElement
          pointerEvents='none'
          children={icon} 
        />
        <Input id="username" placeholder={placeholder} />
    </InputGroup>
    </>
  )
})