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
      ? <IconButton aria-label="show password" icon={<Icon as={ViewIcon} />} w="100%" bg='white' /> 
      : <IconButton aria-label="show password" icon={<Icon as={ViewOffIcon} />} w="100%" bg='white' />
  )
})