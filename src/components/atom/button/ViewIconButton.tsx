import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Icon, IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  showPassword: boolean
  onClick: () => void
}

export const ViewIconButton:FC<Props> = memo((props)=> {

  const {showPassword = false, onClick} = props
  return (
    showPassword 
      ? <IconButton aria-label="show"
          icon={<Icon as={ViewIcon} />} 
          w="100%" 
          bg='none' 
          _focus={{ boxShadow: "none"}} 
          _hover={{bg: "none"}} 
          _active={{bg: "none"}}
          color="gray.300"
          onClick={onClick}
        />
      : <IconButton 
          aria-label="show" 
          icon={<Icon as={ViewOffIcon} />} 
          w="100%" 
          bg='none' 
          _focus={{ boxShadow: "none"}} 
          _hover={{bg: "none"}} 
          _active={{bg: "none"}}
          color="gray.300"
          onClick={onClick}
        />
  )
})