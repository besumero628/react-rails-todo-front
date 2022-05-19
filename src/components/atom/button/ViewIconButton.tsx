import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Icon, IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  showPassword: boolean
}

export const ViewIconButton:FC<Props> = memo((props)=> {
  const {showPassword = false} = props
  return (
    showPassword 
      ? <IconButton aria-label="show password"
      icon={<Icon as={ViewIcon} />} 
      w="100%" 
      bg='none' 
      _focus={{ boxShadow: "none"}} 
      _hover={{bg: "none"}} 
      _active={{bg: "none"}} 
    />
      : <IconButton 
          aria-label="show password" 
          icon={<Icon as={ViewOffIcon} />} 
          w="100%" 
          bg='none' 
          _focus={{ boxShadow: "none"}} 
          _hover={{bg: "none"}} 
          _active={{bg: "none"}} 
        />
  )
})